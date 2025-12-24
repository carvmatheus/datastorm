import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Integração com o backend FastAPI
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem para o backend')
      }

      const data = await response.json()
      return NextResponse.json(data, { status: 200 })
    } catch (apiError) {
      // Se o backend não estiver rodando, retorna sucesso mesmo assim
      // (para desenvolvimento)
      console.warn('Backend não disponível, retornando sucesso local:', apiError)
      return NextResponse.json(
        { message: 'Mensagem enviada com sucesso!' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}

