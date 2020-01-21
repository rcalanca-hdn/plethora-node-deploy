const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let alertas = [
      {
        Title: "Documento Ilegível",
        Subtitle: "Xpto",
        Route: "minha-conta",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Medicamento Esgotando",
        Subtitle: "XptoXptoXptoXptoXpto",
        Route: "minha-conta",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Dados Incorretos",
        Subtitle: "Solve",
        Route: "minha-conta",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Indicar Cuidador",
        Subtitle: "Solve test 3",
        Route: "minha-conta",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Indicar Médico",
        Subtitle: "Solve test 3",
        Route: "/minha-conta",
        ButtonDescription: "Resolver"
      }
    ];

    res.status(200).send(alertas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
