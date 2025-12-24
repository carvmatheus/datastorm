#!/bin/bash

# Script para organizar imagens do Compredahorta

TARGET_DIR="public/portfolio/compredahorta"
SOURCE_DIR="${1:-.}"

echo "🖼️  Organizando imagens do Compredahorta..."
echo "📁 Diretório de origem: $SOURCE_DIR"
echo "📁 Diretório de destino: $TARGET_DIR"
echo ""

# Criar diretório se não existir
mkdir -p "$TARGET_DIR"

# Mapeamento de nomes esperados
declare -A image_map=(
    ["dashboard"]="dashboard-admin.png"
    ["analytics"]="dashboard-analytics.png"
    ["produtos"]="produtos-admin.png"
    ["transporte"]="transporte-admin.png"
    ["mobile"]="dashboard-mobile.png"
    ["home"]="loja-home.png"
    ["loja"]="loja-produtos.png"
    ["carrinho"]="loja-carrinho.png"
    ["pedidos"]="pedidos.png"
)

# Contador
count=0

# Procurar imagens no diretório de origem
find "$SOURCE_DIR" -maxdepth 2 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read img; do
    filename=$(basename "$img")
    filename_lower=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    
    # Tentar identificar o tipo de imagem pelo nome
    target_name=""
    
    if [[ "$filename_lower" == *"dashboard"* ]] && [[ "$filename_lower" == *"admin"* ]]; then
        target_name="dashboard-admin.png"
    elif [[ "$filename_lower" == *"dashboard"* ]] && [[ "$filename_lower" == *"analytics"* ]]; then
        target_name="dashboard-analytics.png"
    elif [[ "$filename_lower" == *"dashboard"* ]] && [[ "$filename_lower" == *"mobile"* ]]; then
        target_name="dashboard-mobile.png"
    elif [[ "$filename_lower" == *"produto"* ]]; then
        target_name="produtos-admin.png"
    elif [[ "$filename_lower" == *"transporte"* ]]; then
        target_name="transporte-admin.png"
    elif [[ "$filename_lower" == *"home"* ]] || [[ "$filename_lower" == *"inicio"* ]]; then
        target_name="loja-home.png"
    elif [[ "$filename_lower" == *"carrinho"* ]]; then
        target_name="loja-carrinho.png"
    elif [[ "$filename_lower" == *"pedido"* ]]; then
        target_name="pedidos.png"
    elif [[ "$filename_lower" == *"loja"* ]] || [[ "$filename_lower" == *"produto"* ]]; then
        target_name="loja-produtos.png"
    fi
    
    if [ -n "$target_name" ]; then
        target_path="$TARGET_DIR/$target_name"
        if [ ! -f "$target_path" ]; then
            cp "$img" "$target_path"
            echo "✅ Copiado: $filename -> $target_name"
            ((count++))
        else
            echo "⚠️  Já existe: $target_name (pulando)"
        fi
    else
        echo "❓ Não identificado: $filename"
    fi
done

echo ""
echo "✨ Processo concluído! $count imagens organizadas."
echo "📝 Se alguma imagem não foi identificada, renomeie manualmente e coloque em: $TARGET_DIR"

