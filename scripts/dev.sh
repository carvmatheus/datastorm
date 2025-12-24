#!/bin/bash

# Script para iniciar frontend e backend simultaneamente

echo "🚀 Iniciando DataStorm..."

# Verificar se o backend está rodando
if ! lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "📦 Iniciando backend FastAPI..."
    cd backend
    if [ ! -d "venv" ]; then
        echo "📦 Criando ambiente virtual..."
        python3 -m venv venv
    fi
    source venv/bin/activate
    pip install -r requirements.txt > /dev/null 2>&1
    uvicorn main:app --reload &
    BACKEND_PID=$!
    cd ..
    echo "✅ Backend rodando em http://localhost:8000 (PID: $BACKEND_PID)"
else
    echo "✅ Backend já está rodando"
fi

# Verificar se o frontend está rodando
if ! lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "🎨 Iniciando frontend Next.js..."
    npm run dev &
    FRONTEND_PID=$!
    echo "✅ Frontend rodando em http://localhost:3000 (PID: $FRONTEND_PID)"
else
    echo "✅ Frontend já está rodando"
fi

echo ""
echo "✨ DataStorm está rodando!"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:8000"
echo "   API Docs: http://localhost:8000/docs"
echo ""
echo "Pressione Ctrl+C para parar todos os serviços"

# Aguardar interrupção
wait

