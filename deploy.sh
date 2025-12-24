#!/bin/bash

# Script de deploy para DataStorm com Docker

set -e

echo "🚀 Iniciando deploy do DataStorm..."

# Verificar se Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado. Instale primeiro."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose não está instalado. Instale primeiro."
    exit 1
fi

# Parar containers existentes
echo "🛑 Parando containers existentes..."
docker-compose -f docker-compose.prod.yml down

# Construir e iniciar containers
echo "🔨 Construindo e iniciando containers..."
docker-compose -f docker-compose.prod.yml up -d --build

# Verificar status
echo "✅ Verificando status dos containers..."
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "✨ Deploy concluído!"
echo "📊 Ver logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "🛑 Parar: docker-compose -f docker-compose.prod.yml down"

