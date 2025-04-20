# 🐉 Projeto Dragões

Este é um projeto front-end desenvolvido com **React** e **TypeScript**, que simula uma interface de gerenciamento de dragões. Ele utiliza o **MirageJS** exclusivamente para simular o **login**, enquanto as demais funcionalidades interagem com uma **API real externa**.

## 🐉 Telas

<img width="1415" alt="Captura de Tela 2025-04-20 às 14 16 52" src="https://github.com/user-attachments/assets/e2ebb9cf-8fb8-4bf3-a7dc-1972b12c439f" />
<img width="1415" alt="Captura de Tela 2025-04-20 às 14 11 54" src="https://github.com/user-attachments/assets/69eca790-3f83-4418-89d9-9eb61ecddf1b" />
<img width="1376" alt="Captura de Tela 2025-04-20 às 14 12 05" src="https://github.com/user-attachments/assets/5609d7fe-8d8f-4f50-9c87-2d6f2d0d495a" />
<img width="400" alt="Captura de Tela 2025-04-20 às 14 13 13" src="https://github.com/user-attachments/assets/a04312b7-af77-40b8-b02e-29b19080e6b4" />
<img width="400" alt="Captura de Tela 2025-04-20 às 14 13 29" src="https://github.com/user-attachments/assets/dc836355-2ad9-415b-b074-3fbbb074568b" />


## 🔐 Login

- usuário: admin
- senha: Xgtl#k@1

## 🔥 Funcionalidades

- 🔐 **Login simulado com MirageJS**
- 📋 **Lista de dragões (API real)**
- ➕ **Criação de novo dragão (API real)**
- ✏️ **Edição de dragão existente (API real)**
- ❌ **Exclusão de dragão (API real)**

## 🛠️ Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MirageJS](https://miragejs.com/)
- [Vitest](https://vitest.dev/)
- [React Router](https://reactrouter.com/)
- [Vercel](https://vercel.com/) (deploy automático)

## 📦 Instalação e uso

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/Danielleelara/dragon
cd dragon
yarn install

Para iniciar o projeto localmente:
yarn start
Acesse em: http://localhost:5173

🧪 Testes
Para executar os testes unitários:

yarn test
Os testes cobrem os componentes de forma unitária, garantindo estão sendo renderizados corretamente.

🚀 Deploy
O deploy é feito automaticamente na Vercel toda vez que há um push na branch master. O pipeline está configurado para:

- Rodar os testes com o Vitest.

- Se os testes passarem, gerar o build.

- Publicar na Vercel.

Acesse o ambiente de produção em: https://dragon-eta-ivory.vercel.app/

🧾 Estrutura de Pastas

src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas: Login, Lista, Detalhes, Edição
└── services/       # Configuração das requisições a API

💡 Melhorias Futuras

Autenticação real com backend

Paginação e busca na lista de dragões

Validações mais robustas nos formulários

👩‍💻 Autora
Desenvolvido por Danielle Souza
