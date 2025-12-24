# ✅ Como Testar - Guia Rápido

## 🚀 Passo a Passo

### 1️⃣ Iniciar o Backend (Terminal 1)

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

**Você deve ver:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

✅ **Teste a API:** Abra http://localhost:8000/docs no navegador

---

### 2️⃣ Iniciar o Frontend (Terminal 2)

```bash
npm run dev
```

**Você deve ver:**
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
```

✅ **Teste o site:** Abra http://localhost:3000 no navegador

---

## 🧪 O que Testar

### ✅ Navegação
- [ ] Clique nos links do menu (Início, Sobre, Serviços, Portfólio, Contato)
- [ ] Role a página e veja as animações
- [ ] Menu fixo aparece ao rolar

### ✅ Seções
- [ ] Hero: Botões funcionam
- [ ] Sobre: Cards aparecem
- [ ] Serviços: Grid de serviços visível
- [ ] Portfólio: Clique abre modal (mesmo sem imagens)
- [ ] Contato: Formulário funciona

### ✅ Formulário de Contato
1. Preencha nome, email e mensagem
2. Clique em "Enviar Mensagem"
3. Deve aparecer mensagem de sucesso
4. Verifique no terminal do backend se recebeu a requisição

### ✅ API (http://localhost:8000/docs)
- [ ] GET `/` - Informações da API
- [ ] GET `/api/health` - Health check
- [ ] POST `/api/contact` - Teste o formulário
- [ ] GET `/api/portfolio` - Dados do portfólio

---

## 🖼️ Adicionar Imagens (Opcional)

Coloque as screenshots do Compredahorta em:
```
public/portfolio/compredahorta/
```

Nomes: `admin-1.png`, `admin-2.png`, etc.

---

## 🐛 Problemas?

### Porta ocupada?
```bash
# Matar processo na porta 3000
kill -9 $(lsof -ti:3000)

# Matar processo na porta 8000
kill -9 $(lsof -ti:8000)
```

### Erros?
- Verifique se ambos os servidores estão rodando
- Verifique o console do navegador (F12)
- Verifique os terminais para mensagens de erro

---

## ✨ Pronto!

Agora você pode testar tudo! 🎉

