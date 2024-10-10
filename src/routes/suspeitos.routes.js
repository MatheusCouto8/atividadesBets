import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Bruno Mars",
    profissao: "Cantor",
    envAposta: true, //envolvimento em apostas
    nvSusp: [
        "Alto",
        "Médio",
        "Baixo"
    ]   //nivel de suspeito
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeitos
suspeitosRoutes.post("/", (req, res) => {
  const { nome, profissao, envAposta, nvSusp } = req.body;

  // Validação dos campos nome e partido
  if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou a profissão não foi preenchido",
    });
  }

  // Validação de nvAposta
  if (nvSusp != "Baixo" && nvSusp != "Médio" && nvSusp != "Alto") {
    return res.status(400).send({
      message:
        "O suspeito não tem nível!",
    });
  }

  // Criação de um novo suspeitos
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    profissao,
    envAposta,
    nvSusp,
  };

  // Adiciona o novo suspeitos ao array de suspeitos
  suspeitos.push(novosuspeitos);

  return res.status(201).json({
    message: "suspeitos cadastrado com sucesso!",
    novosuspeitos,
  });
});

suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeitos pelo id no array de suspeitos
  const suspeitos = suspeitos.find((suspects) => suspects.id == id);

  // Verifica se o suspeitos foi encontrado
  if (!suspeitos) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeitos);
});

// Rota para atualizar um suspeitos pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, partido, idade, segundo, propostas } = req.body;

  // Busca um suspeitos pelo id no array de suspeitos
  const suspeitos = suspeitos.find((politico) => politico.id == id);

  // Verifica se o suspeitos foi encontrado
  if (!suspeitos) {
    return res
      .status(404)
      .json({ message: `suspeitos com id ${id} não encontrado!` });
  }

  // Validação dos campos nome e partido
  if (!nome || !partido) {
    return res.status(400).send({
      message: "O nome ou o partido não foi preenchido, criança aleatória!",
    });
  }

  suspeitos.nome = nome;
  suspeitos.partido = partido;
  suspeitos.idade = idade;
  suspeitos.segundo = segundo;
  suspeitos.propostas = propostas;

  return res.status(200).json({
    message: "suspeitos atualizado com sucesso!",
    suspeitos,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeitos pelo id no array de suspeitos
  const suspeitos = suspeitos.find((politico) => politico.id == id);

  // Verifica se o suspeitos foi encontrado
  if (!suspeitos) {
    return res
      .status(404)
      .json({ message: `suspeitos com id ${id} não encontrado!` });
  }

  // Remove o suspeitos do array de suspeitos
  suspeitos = suspeitos.filter((suspeitos) => suspeitos.id != id);

  return res.status(200).json({
    message: "suspeitos removido com sucesso!",
    suspeitos,
  });
});

export default suspeitosRoutes;