# 🚀 Guia Rápido - DataStorm

## Início Rápido

### 1. Instalar Dependências

```bash
# Frontend
npm install

# Backend
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### 2. Adicionar Imagens do Portfólio

Coloque as imagens do Compredahorta em:
```
public/portfolio/compredahorta/
├── admin-1.png
├── admin-2.png
├── admin-3.png
├── admin-4.png
├── admin-5.png
├── dashboard-1.png
├── dashboard-2.png
└── dashboard-3.png
```

### 3. Executar o Projeto

**Opção 1: Script Automático (Recomendado)**
```bash
./scripts/dev.sh
```

**Opção 2: Manual**

Terminal 1 - Backend:
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 4. Acessar

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## 📝 Próximos Passos

1. ✅ Adicione as imagens do Compredahorta em `public/portfolio/compredahorta/`
2. ✅ Personalize os textos nos componentes
3. ✅ Configure variáveis de ambiente (`.env`)
4. ✅ Integre com banco de dados (opcional)
5. ✅ Configure envio de emails (opcional)

## 🎨 Personalização

- **Cores**: Edite `tailwind.config.ts`
- **Conteúdo**: Edite os componentes em `components/`
- **Portfólio**: Adicione projetos em `components/Portfolio.tsx`

## 📧 Contato

- GitHub: https://github.com/carvmatheus
- LinkedIn: http://linkedin.com/in/matheus-carvalho-cardoso

