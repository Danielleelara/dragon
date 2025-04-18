import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createServer, Model, Response } from "miragejs";
import { v4 as uuidv4 } from 'uuid';

import "./index.css";
import App from "./App.tsx";

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

      const user = schema.db.users.findBy({
        nickname: login.nickname,
        password: login.password,
      });

      if (!user) {
        return new Response(401, {}, { error: "Unauthorized" });
      }

      const token = uuidv4();

      return new Response(200, {}, { token });
    });

    this.passthrough("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/**");
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
