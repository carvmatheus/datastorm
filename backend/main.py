from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(
    title="DataStorm API",
    description="API backend para DataStorm - Software House de Soluções em Dados",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://datastorm.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

# Routes
@app.get("/")
async def root():
    return {
        "message": "DataStorm API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/contact", response_model=ContactResponse)
async def contact(request: ContactRequest):
    """
    Endpoint para receber mensagens do formulário de contato.
    
    Em produção, você pode:
    - Salvar no banco de dados
    - Enviar email de notificação
    - Integrar com serviços de CRM
    """
    try:
        # Aqui você pode adicionar lógica para:
        # - Salvar no banco de dados
        # - Enviar email
        # - Notificar via webhook
        
        # Por enquanto, apenas retornamos sucesso
        return ContactResponse(
            success=True,
            message="Mensagem recebida com sucesso! Entraremos em contato em breve."
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/portfolio")
async def get_portfolio():
    """
    Retorna informações sobre os projetos do portfólio.
    """
    return {
        "projects": [
            {
                "id": 1,
                "title": "Compredahorta - Sistema Administrativo",
                "description": "Plataforma completa de gestão administrativa",
                "category": "Sistema Administrativo",
                "technologies": ["Next.js", "FastAPI", "PostgreSQL", "Python", "TypeScript"],
                "images": [
                    "/portfolio/compredahorta/admin-1.png",
                    "/portfolio/compredahorta/admin-2.png",
                    "/portfolio/compredahorta/admin-3.png",
                ]
            },
            {
                "id": 2,
                "title": "Compredahorta - Dashboard Analytics",
                "description": "Dashboard completo com visualizações interativas",
                "category": "Analytics",
                "technologies": ["React", "D3.js", "Python", "FastAPI"],
                "images": [
                    "/portfolio/compredahorta/dashboard-1.png",
                    "/portfolio/compredahorta/dashboard-2.png",
                ]
            }
        ]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

