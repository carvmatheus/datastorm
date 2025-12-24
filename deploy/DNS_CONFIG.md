# 🌐 Configuração DNS para datastorm.cloud

## Passo 1: Escolher um Provedor de DNS

Opções recomendadas:
- **Cloudflare** (recomendado - gratuito, rápido, com SSL)
- **Namecheap**
- **Google Domains**
- **AWS Route 53**

## Passo 2: Configurar Registros DNS

### Opção A: Cloudflare (Recomendado)

1. **Criar conta no Cloudflare**: https://cloudflare.com
2. **Adicionar domínio**: Adicione `datastorm.cloud` ao Cloudflare
3. **Alterar nameservers**: Use os nameservers fornecidos pelo Cloudflare no seu registrador de domínio

4. **Configurar registros DNS**:

```
Tipo: A
Nome: @
Conteúdo: [IP_DO_SEU_SERVIDOR]
Proxy: ✅ (ativado - laranja)

Tipo: A
Nome: www
Conteúdo: [IP_DO_SEU_SERVIDOR]
Proxy: ✅ (ativado - laranja)
```

5. **SSL/TLS**: 
   - Vá em SSL/TLS
   - Escolha "Full" ou "Full (strict)"
   - Ative "Always Use HTTPS"

### Opção B: DNS Tradicional

Se não usar Cloudflare, configure diretamente no seu registrador:

```
Tipo: A
Nome: @
Valor: [IP_DO_SEU_SERVIDOR]
TTL: 3600

Tipo: A
Nome: www
Valor: [IP_DO_SEU_SERVIDOR]
TTL: 3600
```

## Passo 3: Verificar Configuração

### Verificar propagação DNS:

```bash
# Verificar se o DNS está propagado
dig datastorm.cloud
nslookup datastorm.cloud

# Verificar de diferentes locais
# https://www.whatsmydns.net/#A/datastorm.cloud
```

### Tempo de propagação:
- **Cloudflare**: 1-5 minutos
- **DNS tradicional**: 24-48 horas

## Passo 4: Obter IP do Servidor

Se você não sabe o IP do seu servidor:

```bash
# No servidor
curl ifconfig.me
# ou
hostname -I
```

## Exemplo Completo (Cloudflare)

1. Login no Cloudflare
2. Selecionar domínio `datastorm.cloud`
3. Ir em "DNS" > "Records"
4. Adicionar:

| Tipo | Nome | Conteúdo | Proxy | TTL |
|------|------|----------|-------|-----|
| A | @ | 192.168.1.100 | ✅ | Auto |
| A | www | 192.168.1.100 | ✅ | Auto |

5. Aguardar propagação (1-5 minutos)
6. Testar: `ping datastorm.cloud`

## Troubleshooting

### DNS não está funcionando?

1. Verificar se o IP está correto
2. Verificar se os nameservers estão corretos
3. Limpar cache DNS local:
   ```bash
   # Linux/Mac
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   ```

### Verificar se o servidor está acessível:

```bash
# Testar se o servidor responde na porta 80
curl -I http://[IP_DO_SERVIDOR]

# Testar se o servidor responde na porta 443
curl -I https://[IP_DO_SERVIDOR]
```

