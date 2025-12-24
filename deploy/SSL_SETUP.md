# 🔒 Configuração SSL/HTTPS com Let's Encrypt

## Pré-requisitos

1. ✅ Domínio configurado e apontando para o servidor
2. ✅ Nginx instalado e configurado
3. ✅ Portas 80 e 443 abertas no firewall

## Passo 1: Instalar Certbot

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install -y certbot python3-certbot-nginx
```

## Passo 2: Obter Certificado SSL

### Opção A: Automático (Recomendado)

Certbot configura automaticamente o Nginx:

```bash
sudo certbot --nginx -d datastorm.cloud -d www.datastorm.cloud
```

Durante o processo, você será perguntado:
- Email para notificações de renovação
- Aceitar termos de serviço
- Compartilhar email com EFF (opcional)
- Redirecionar HTTP para HTTPS (escolha 2 - Redirect)

### Opção B: Manual

Se preferir configurar manualmente:

```bash
# Obter certificado
sudo certbot certonly --nginx -d datastorm.cloud -d www.datastorm.cloud

# O certificado será salvo em:
# /etc/letsencrypt/live/datastorm.cloud/fullchain.pem
# /etc/letsencrypt/live/datastorm.cloud/privkey.pem
```

## Passo 3: Verificar Renovação Automática

O Certbot cria um timer systemd para renovação automática:

```bash
# Verificar status
sudo systemctl status certbot.timer

# Testar renovação
sudo certbot renew --dry-run
```

## Passo 4: Configurar Firewall

Se usar UFW:

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

Se usar firewalld:

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Passo 5: Testar SSL

### Verificar certificado:

```bash
# Verificar se o certificado está instalado
sudo certbot certificates

# Testar SSL online
# https://www.ssllabs.com/ssltest/analyze.html?d=datastorm.cloud
```

### Verificar no navegador:

1. Acesse: `https://datastorm.cloud`
2. Verifique o cadeado verde no navegador
3. Clique no cadeado para ver detalhes do certificado

## Passo 6: Configuração Avançada (Opcional)

### Forçar HTTPS (já configurado no nginx.conf):

O arquivo `nginx.conf` já inclui redirecionamento HTTP → HTTPS.

### Headers de Segurança:

Já incluídos no `nginx.conf`:
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

## Troubleshooting

### Erro: "Failed to obtain certificate"

**Causas comuns:**
1. DNS não está propagado
2. Porta 80 bloqueada
3. Domínio não aponta para o servidor

**Solução:**
```bash
# Verificar DNS
dig datastorm.cloud

# Verificar se porta 80 está aberta
sudo netstat -tulpn | grep :80

# Verificar se Nginx está rodando
sudo systemctl status nginx
```

### Erro: "Connection refused"

**Solução:**
```bash
# Verificar firewall
sudo ufw status

# Verificar se Nginx está escutando
sudo netstat -tulpn | grep nginx
```

### Renovação falhando

**Solução:**
```bash
# Verificar logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log

# Forçar renovação manual
sudo certbot renew --force-renewal
```

## Comandos Úteis

```bash
# Ver certificados instalados
sudo certbot certificates

# Renovar certificado manualmente
sudo certbot renew

# Revogar certificado
sudo certbot revoke --cert-path /etc/letsencrypt/live/datastorm.cloud/cert.pem

# Deletar certificado
sudo certbot delete --cert-name datastorm.cloud
```

## Próximos Passos

Após configurar SSL:

1. ✅ Testar acesso HTTPS
2. ✅ Verificar redirecionamento HTTP → HTTPS
3. ✅ Configurar renovação automática
4. ✅ Monitorar logs: `sudo tail -f /var/log/nginx/datastorm-error.log`

