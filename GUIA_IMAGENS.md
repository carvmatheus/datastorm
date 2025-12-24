# 🖼️ Guia de Preparação de Imagens - Compredahorta

## 📋 Checklist de Sensura

Antes de adicionar as imagens ao portfólio, certifique-se de sensurar:

### ✅ Dados Pessoais
- [ ] Nomes de pessoas (substituir por "Usuário", "Cliente", etc.)
- [ ] Emails pessoais
- [ ] Números de telefone
- [ ] CPF/CNPJ
- [ ] Endereços completos (manter apenas cidade/estado)

### ✅ Dados Financeiros
- [ ] Valores monetários específicos (substituir por valores genéricos como "R$ XXX,XX")
- [ ] Informações bancárias
- [ ] Dados de cartão de crédito

### ✅ Dados de Negócio
- [ ] Nomes de clientes reais
- [ ] Quantidades específicas de estoque (se sensível)
- [ ] IDs de pedidos reais (substituir por IDs genéricos)

## 🎨 Ferramentas Recomendadas

### Para Sensura:
1. **Photoshop / GIMP** - Blur tool ou retângulo preto
2. **Figma** - Fácil para adicionar overlays
3. **Canva** - Interface simples para edição rápida
4. **Online**: Photopea.com (gratuito, similar ao Photoshop)

### Processo Rápido:
1. Abra a imagem
2. Use a ferramenta de seleção retangular
3. Selecione áreas com dados sensíveis
4. Aplique blur (desfoque) ou preencha com cor sólida
5. Adicione texto genérico se necessário
6. Exporte como PNG ou JPG

## 📁 Estrutura de Arquivos

Coloque as imagens processadas em:
```
public/portfolio/compredahorta/
```

### Nomes dos Arquivos:
- `dashboard-admin.png` - Dashboard administrativo
- `dashboard-analytics.png` - Analytics e métricas
- `produtos-admin.png` - Gestão de produtos
- `transporte-admin.png` - Gestão de transporte
- `dashboard-mobile.png` - Dashboard mobile
- `loja-home.png` - Loja - Home
- `loja-produtos.png` - Loja - Produtos
- `loja-carrinho.png` - Loja - Carrinho
- `pedidos.png` - Gestão de pedidos

## 🎯 Exemplos de Sensura

### Antes:
- Nome: "Jean Carvalho"
- Email: "jean@example.com"
- Telefone: "(22) 99838-7886"
- Endereço: "Rua Exemplo, 123, Bairro, Cidade-RJ, 12345-678"
- Valor: "R$ 1.058,74"

### Depois:
- Nome: "Usuário" ou "Cliente Exemplo"
- Email: "usuario@exemplo.com"
- Telefone: "(XX) XXXXX-XXXX"
- Endereço: "Cidade-RJ" (apenas cidade/estado)
- Valor: "R$ XXX,XX" ou manter valores genéricos

## ✨ Dicas de Design

1. **Mantenha a consistência**: Use o mesmo estilo de sensura em todas as imagens
2. **Blur suave**: Use blur gaussiano (10-20px) ao invés de preto sólido quando possível
3. **Cores**: Se usar retângulos, use cores que combinem com o tema (verde escuro, preto)
4. **Legibilidade**: Certifique-se de que o resto da interface ainda seja legível

## 🚀 Após Adicionar as Imagens

1. Recarregue o site (http://localhost:3000)
2. Navegue até a seção "Portfólio"
3. Teste a visualização em tela cheia
4. Verifique se todas as imagens carregam corretamente

