import { Router } from "express";

// Lista de importação das rotas do projeto
import suspeitosRoutes from "./suspeitos.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "🎉😎" });
});

// Lista de uso das rotas do projeto
routes.use("/suspeitos", suspeitosRoutes);

export default routes;
