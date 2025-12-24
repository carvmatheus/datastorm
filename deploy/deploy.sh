#!/bin/bash

# Script de Deploy para DataStorm
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando deploy do DataStorm..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Variáveis
PROJECT_DIR="/var/www/datastorm"
DOMAIN="datastorm.cloud"
SERVICE_USER="www-data"

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Por favor, execute como root ou com sudo${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Verificando dependências...${NC}"

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js não encontrado. Instalando...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
fi

# Verificar Python
if ! command -v python3 &> /dev/null; then
    echo -e "${YELLOW}⚠️  Python3 não encontrado. Instalando...${NC}"
    apt-get update
    apt-get install -y python3 python3-pip python3-venv
fi

# Verificar Nginx
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}⚠️  Nginx não encontrado. Instalando...${NC}"
    apt-get update
    apt-get install -y nginx
fi

# Criar diretório do projeto
echo -e "${GREEN}📁 Criando diretório do projeto...${NC}"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Copiar arquivos do projeto (assumindo que você já tem o código)
echo -e "${GREEN}📦 Instalando dependências do frontend...${NC}"
if [ -f "package.json" ]; then
    npm install --production
    npm run build
fi

echo -e "${GREEN}📦 Instalando dependências do backend...${NC}"
if [ -d "backend" ]; then
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ..
fi

# Configurar systemd services
echo -e "${GREEN}⚙️  Configurando serviços systemd...${NC}"

# Frontend service
cat > /etc/systemd/system/datastorm-frontend.service << EOF
[Unit]
Description=DataStorm Frontend (Next.js)
After=network.target

[Service]
Type=simple
User=$SERVICE_USER
WorkingDirectory=$PROJECT_DIR
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Backend service
cat > /etc/systemd/system/datastorm-backend.service << EOF
[Unit]
Description=DataStorm Backend (FastAPI)
After=network.target

[Service]
Type=simple
User=$SERVICE_USER
WorkingDirectory=$PROJECT_DIR/backend
Environment=PYTHONUNBUFFERED=1
ExecStart=$PROJECT_DIR/backend/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Recarregar systemd
systemctl daemon-reload

# Habilitar e iniciar serviços
echo -e "${GREEN}🔄 Iniciando serviços...${NC}"
systemctl enable datastorm-frontend
systemctl enable datastorm-backend
systemctl restart datastorm-frontend
systemctl restart datastorm-backend

# Configurar Nginx
echo -e "${GREEN}🌐 Configurando Nginx...${NC}"
if [ -f "deploy/nginx.conf" ]; then
    cp deploy/nginx.conf /etc/nginx/sites-available/$DOMAIN
    ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
    nginx -t
    systemctl reload nginx
fi

echo -e "${GREEN}✅ Deploy concluído!${NC}"
echo -e "${YELLOW}⚠️  Não esqueça de:${NC}"
echo "   1. Configurar DNS apontando para este servidor"
echo "   2. Instalar certificado SSL com: certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo "   3. Verificar status dos serviços: systemctl status datastorm-frontend datastorm-backend"

