# 🧪 Guia de Teste - DataStorm

## Passo 1: Instalar Dependências

### Frontend (Next.js)
```bash
npm install
```

### Backend (FastAPI)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
```

## Passo 2: Executar o Projeto

### Opção A: Executar Separadamente (Recomendado para teste)

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

Você deve ver:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Você deve ver:
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
```

### Opção B: Script Automático
```bash
./scripts/dev.sh
```

## Passo 3: Testar no Navegador

### Frontend
1. Abra: **http://localhost:3000**
2. Teste a navegação:
   - ✅ Clique nos links do menu
   - ✅ Role a página e veja as animações
   - ✅ Teste o scroll suave entre seções
   - ✅ Veja o modal do portfólio (mesmo sem imagens)

### Backend API
1. Abra: **http://localhost:8000/docs**
2. Teste os endpoints:
   - ✅ GET `/` - Informações da API
   - ✅ GET `/api/health` - Health check
   - ✅ POST `/api/contact` - Formulário de contato
   - ✅ GET `/api/portfolio` - Dados do portfólio

## Passo 4: Testar Funcionalidades

### 1. Navegação
- [ ] Menu fixo aparece ao rolar a página
- [ ] Links do menu levam às seções corretas
- [ ] Menu mobile funciona (redimensione a janela)

### 2. Hero Section
- [ ] Texto animado aparece corretamente
- [ ] Botões "Ver Portfólio" e "Fale Conosco" funcionam
- [ ] Seta de scroll para baixo funciona

### 3. Portfólio
- [ ] Cards do portfólio aparecem
- [ ] Clique abre o modal
- [ ] Navegação entre imagens funciona (quando adicionar imagens)
- [ ] Botão de fechar funciona

### 4. Formulário de Contato
- [ ] Preencha o formulário
- [ ] Clique em "Enviar Mensagem"
- [ ] Verifique se aparece mensagem de sucesso
- [ ] Verifique no console do backend se a mensagem chegou

### 5. Links Sociais
- [ ] Links do footer funcionam
- [ ] Links abrem em nova aba
- [ ] LinkedIn e GitHub estão corretos

## Passo 5: Testar API com cURL

### Testar Health Check
```bash
curl http://localhost:8000/api/health
```

### Testar Formulário de Contato
```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "message": "Esta é uma mensagem de teste"
  }'
```

### Testar Portfólio
```bash
curl http://localhost:8000/api/portfolio
```

## Passo 6: Adicionar Imagens do Portfólio

1. Coloque as imagens do Compredahorta em:
   ```
   public/portfolio/compredahorta/
   ```

2. Nomes sugeridos:
   - `admin-1.png`
   - `admin-2.png`
   - `admin-3.png`
   - `admin-4.png`
   - `admin-5.png`
   - `dashboard-1.png`
   - `dashboard-2.png`
   - `dashboard-3.png`

3. Recarregue a página e teste o modal novamente

## Problemas Comuns

### Porta 3000 já em uso
```bash
# Encontre o processo
lsof -ti:3000

# Mate o processo
kill -9 $(lsof -ti:3000)
```

### Porta 8000 já em uso
```bash
# Encontre o processo
lsof -ti:8000

# Mate o processo
kill -9 $(lsof -ti:8000)
```

### Erro de módulos não encontrados
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro no Python/venv
```bash
# Recrie o ambiente virtual
cd backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Checklist de Teste Completo

- [ ] Frontend inicia sem erros
- [ ] Backend inicia sem erros
- [ ] Página carrega corretamente
- [ ] Todas as seções aparecem
- [ ] Animações funcionam
- [ ] Navegação funciona
- [ ] Formulário de contato funciona
- [ ] API responde corretamente
- [ ] Links sociais funcionam
- [ ] Design responsivo funciona (teste em mobile)
- [ ] Console do navegador sem erros
- [ ] Console do backend sem erros

## Próximos Passos Após Teste

1. ✅ Adicionar imagens do Compredahorta
2. ✅ Personalizar textos e conteúdo
3. ✅ Configurar variáveis de ambiente
4. ✅ Adicionar banco de dados (opcional)
5. ✅ Configurar envio de emails (opcional)
6. ✅ Deploy em produção

