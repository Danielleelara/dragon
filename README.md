# 🐉 Projeto Dragões

Este é um projeto front-end desenvolvido com **React** e **TypeScript**, que simula uma interface de gerenciamento de dragões. Ele utiliza o **MirageJS** exclusivamente para simular o **login**, enquanto as demais funcionalidades interagem com uma **API real externa**.

##  Telas

<img width="1409" alt="Captura de Tela 2025-04-20 às 12 38 37" src="https://github.com/user-attachments/assets/379519f6-d869-4e23-9b9f-30f7001a175a" />
<img width="1419" alt="Captura de Tela 2025-04-20 às 12 38 58" src="https://github.com/user-attachments/assets/2b448c26-64ae-48b4-8f99-121bc858dd93" />

<img width="1409" alt="Captura de Tela 2025-04-20 às 12 38 37" src="https://github.com/user-attachments/assets/8b600097-5718-40d4-b14f-ee9a0886190f" />

##  Login

usuário: admin
senha Xgtl#k@1

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

Rodar os testes com o Vitest.

Se os testes passarem, gerar o build.

Publicar na Vercel.

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

Testes E2E com Cypress

👩‍💻 Autor(a)
Desenvolvido por Danielle Souza💙
Sinta-se à vontade para contribuir, abrir issues ou fazer sugestões!
