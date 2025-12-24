# DataStorm - Software House de Soluções em Dados

Website moderno e profissional para a DataStorm, uma software house especializada em criar soluções inteligentes para negócios, transformando dados em resultados.

## 🚀 Tecnologias

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **Framer Motion** - Animações suaves e interativas
- **Lucide React** - Ícones modernos

### Backend
- **FastAPI** - Framework Python moderno e rápido
- **Uvicorn** - Servidor ASGI de alta performance
- **Pydantic** - Validação de dados

## 📁 Estrutura do Projeto

```
datastorm/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── Navigation.tsx     # Navegação
│   ├── Hero.tsx           # Seção hero
│   ├── About.tsx          # Sobre
│   ├── Services.tsx       # Serviços
│   ├── Portfolio.tsx      # Portfólio
│   ├── Contact.tsx        # Contato
│   └── Footer.tsx         # Rodapé
├── backend/               # Backend FastAPI
│   ├── main.py           # Aplicação principal
│   └── requirements.txt  # Dependências Python
├── public/                # Arquivos estáticos
│   └── portfolio/        # Imagens do portfólio
└── package.json          # Dependências Node.js
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ e npm/yarn
- Python 3.9+

### 1. Instalar dependências do Frontend

```bash
npm install
# ou
yarn install
```

### 2. Instalar dependências do Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Adicionar imagens do portfólio

Crie a seguinte estrutura de pastas e adicione as imagens do Compredahorta:

```
public/
└── portfolio/
    └── compredahorta/
        ├── admin-1.png
        ├── admin-2.png
        ├── admin-3.png
        ├── admin-4.png
        ├── admin-5.png
        ├── dashboard-1.png
        ├── dashboard-2.png
        └── dashboard-3.png
```

## 🚀 Executando o Projeto

### Frontend (Next.js)

```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:3000`

### Backend (FastAPI)

```bash
cd backend
uvicorn main:app --reload
```

O backend estará disponível em: `http://localhost:8000`

Documentação da API (Swagger): `http://localhost:8000/docs`

## 📝 Funcionalidades

### Página Inicial
- **Hero Section** - Apresentação impactante com animações
- **Sobre** - Informações sobre a empresa e diferenciais
- **Serviços** - Cards com os principais serviços oferecidos
- **Portfólio** - Galeria de projetos com modal para visualização detalhada
- **Contato** - Formulário de contato integrado com backend
- **Footer** - Links sociais e informações da empresa

### Características
- ✅ Design moderno inspirado no site do Lando Norris
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves com Framer Motion
- ✅ Navegação suave entre seções
- ✅ Modal de portfólio com galeria de imagens
- ✅ Integração frontend/backend
- ✅ Formulário de contato funcional

## 🎨 Personalização

### Cores
As cores podem ser personalizadas em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Sua paleta de cores primária
  }
}
```

### Conteúdo
- Edite os componentes em `components/` para alterar textos e informações
- Adicione mais projetos no componente `Portfolio.tsx`
- Personalize os serviços em `Services.tsx`

## 📧 Integração do Formulário de Contato

O formulário de contato está configurado para enviar dados para o backend FastAPI. Para integrar completamente:

1. Edite `app/api/contact/route.ts` para fazer a chamada ao FastAPI
2. Configure o backend em `backend/main.py` para:
   - Salvar mensagens no banco de dados
   - Enviar emails de notificação
   - Integrar com serviços de CRM

## 🔗 Links

- **GitHub**: https://github.com/carvmatheus
- **LinkedIn**: http://linkedin.com/in/matheus-carvalho-cardoso

## 📄 Licença

Este projeto é propriedade da DataStorm.

---

Desenvolvido com ❤️ pela DataStorm

