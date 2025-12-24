# DataStorm Backend API

Backend FastAPI para a DataStorm.

## Instalação

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt
```

## Executar

```bash
uvicorn main:app --reload
```

A API estará disponível em: `http://localhost:8000`

## Documentação

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Endpoints

### GET /
Retorna informações básicas da API.

### GET /api/health
Health check da API.

### POST /api/contact
Recebe mensagens do formulário de contato.

**Body:**
```json
{
  "name": "Nome do Cliente",
  "email": "cliente@email.com",
  "message": "Mensagem do cliente"
}
```

### GET /api/portfolio
Retorna informações sobre os projetos do portfólio.

## Próximos Passos

Para produção, considere adicionar:
- Banco de dados (PostgreSQL, MongoDB, etc.)
- Autenticação (JWT, OAuth)
- Envio de emails (SendGrid, AWS SES)
- Logging e monitoramento
- Rate limiting
- Validação de email mais robusta

