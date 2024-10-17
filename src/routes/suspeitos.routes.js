import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "mateus marcelino",
    profissao: "jogador",
    apostas: true,
    suspeita: "Médio"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "lucas",
    profissao: "professor",
    apostas: false,
    suspeita: "Alto",
  },
];

suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

suspeitosRoutes.get("/:id ", (req, res) => {
  return res.send(200).json(suspeitos);
});

suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const suspeito = suspeitos.find((suspects) => suspects.id == id);

  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeito);
});

suspeitosRoutes.post("/", (req, res) => {

  const {
      nome,
      profissao,
      apostas,
      suspeita
  } = req.body;

  if (!nome) {
      return res.status(400).send({ message: "Coloque um nome para o suspeito" })
  }

  if (!profissao) {
      return res.status(400).send({ message: "Coloque uma profissão" })
  }

  if (suspeita == "") {
      return res.status(400).send({ message: "Coloque o nivel de suspeita" })
  }


  const novoSuspeito = {
      id: Math.floor(Math.random() * 1000),
      nome,
      profissao,
      apostas,
      suspeita
  }

  suspeitos.push(novoSuspeito)
  return res.status(201).send("Suspeito criado com sucesso")
});



suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissao, apostas, suspeita } = req.body;

  const suspeito = suspeitos.find((suspects) => suspects.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  // Validação dos campos nome e partido
  if (suspeita != "Baixo" && suspeita != "Médio" && suspeita != "Alto") {
    return res.status(400).send({
      message:
        "O suspeito não tem nenhum nível de suspeito!",
    });
  }

  suspeito.nome = nome;
  suspeito.profissao = profissao;
  suspeito.apostas = apostas;
  suspeito.suspeita = suspeita;

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspects) => suspects.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  // Remove o suspeito do array de suspeitos
  suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

  return res.status(200).json({
    message: "Suspeito removido com sucesso!",
    suspeito,
  });
});

export default suspeitosRoutes;