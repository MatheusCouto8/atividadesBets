import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Bruno Mars",
    envAposta: true, //envolvimento em apostas
    nvSusp: "Alto" //nivel de suspeito
  },
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

// Rota para cadastrar um novo candidato
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

  // Criação de um novo candidato
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    profissao,
    envAposta,
    nvSusp,
  };

  // Adiciona o novo candidato ao array de suspeitos
  suspeitos.push(novoCandidato);

  return res.status(201).json({
    message: "Candidato cadastrado com sucesso!",
    novoCandidato,
  });
});

// Rota para buscar um candidato pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um candidato pelo id no array de suspeitos
  const candidato = suspeitos.find((politico) => politico.id == id);

  // Verifica se o candidato foi encontrado
  if (!candidato) {
    return res
      .status(404)
      .json({ message: `Candidato com id ${id} não encontrado!` });
  }

  return res.status(200).json(candidato);
});

// Rota para atualizar um candidato pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, partido, idade, segundo, propostas } = req.body;

  // Busca um candidato pelo id no array de suspeitos
  const candidato = suspeitos.find((politico) => politico.id == id);

  // Verifica se o candidato foi encontrado
  if (!candidato) {
    return res
      .status(404)
      .json({ message: `Candidato com id ${id} não encontrado!` });
  }

  // Validação dos campos nome e partido
  if (!nome || !partido) {
    return res.status(400).send({
      message: "O nome ou o partido não foi preenchido, criança aleatória!",
    });
  }

  candidato.nome = nome;
  candidato.partido = partido;
  candidato.idade = idade;
  candidato.segundo = segundo;
  candidato.propostas = propostas;

  return res.status(200).json({
    message: "Candidato atualizado com sucesso!",
    candidato,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um candidato pelo id no array de suspeitos
  const candidato = suspeitos.find((politico) => politico.id == id);

  // Verifica se o candidato foi encontrado
  if (!candidato) {
    return res
      .status(404)
      .json({ message: `Candidato com id ${id} não encontrado!` });
  }

  // Remove o candidato do array de suspeitos
  suspeitos = suspeitos.filter((candidato) => candidato.id != id);

  return res.status(200).json({
    message: "Candidato removido com sucesso!",
    candidato,
  });
});
*/
export default suspeitosRoutes;