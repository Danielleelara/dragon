import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer, Model } from "miragejs";
import './index.css'
import App from './App.tsx'


createServer({
  models: {
    user: Model,
  },
  seeds(server) {
    server.db.loadData({
      users: [
        {
          nickname: "josé",
          password: "123",
        },
      ],
    });
  },
  routes() {
    this.passthrough();

    this.urlPrefix = "http://localhost:5173/";

    this.post("/", (schema, request) => {
      const login = JSON.parse(request.requestBody);

      return schema.users.findBy({
        nickname: login.nickname,
        password: login.password,
      });
    });

    this.passthrough("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/**");

  }

});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
