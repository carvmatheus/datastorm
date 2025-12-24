#!/bin/bash

# Script para configurar DataStorm no servidor
# Execute no servidor após clonar o repositório em /root/datastorm/

set -e

PROJECT_DIR="/root/datastorm"
DOMAIN="datastorm.cloud"

echo "🚀 Configurando DataStorm..."

# 1. Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
cd $PROJECT_DIR
npm install --production

# 2. Build do frontend
echo "🔨 Fazendo build do frontend..."
npm run build

# 3. Instalar dependências do backend
echo "📦 Instalando dependências do backend..."
cd $PROJECT_DIR/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 4. Configurar serviços systemd
echo "⚙️  Configurando serviços systemd..."

# Frontend service
cat > /etc/systemd/system/datastorm-frontend.service << EOF
[Unit]
Description=DataStorm Frontend (Next.js)
After=network.target

[Service]
Type=simple
User=root
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
User=root
WorkingDirectory=$PROJECT_DIR/backend
Environment=PYTHONUNBUFFERED=1
ExecStart=$PROJECT_DIR/backend/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# 5. Recarregar systemd
systemctl daemon-reload

# 6. Habilitar e iniciar serviços
echo "🔄 Iniciando serviços..."
systemctl enable datastorm-frontend
systemctl enable datastorm-backend
systemctl restart datastorm-frontend
systemctl restart datastorm-backend

# 7. Configurar Nginx
echo "🌐 Configurando Nginx..."
cp $PROJECT_DIR/deploy/datastorm.cloud.conf /etc/nginx/sites-available/$DOMAIN
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# 8. Testar e recarregar Nginx
nginx -t
systemctl reload nginx

echo "✅ Configuração concluída!"
echo ""
echo "Próximos passos:"
echo "1. Configure DNS apontando para este servidor"
echo "2. Após DNS propagar, execute: certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo "3. Verificar status: systemctl status datastorm-frontend datastorm-backend"

