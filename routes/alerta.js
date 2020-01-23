const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let alertas = [
      {
        Title: "Documento Ilegível",
        Subtitle: "Xpto",
        Route: "my-account",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Medicamento Esgotando",
        Subtitle: "XptoXptoXptoXptoXpto",
        Route: "my-account",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Dados Incorretos",
        Subtitle: "Solve",
        Route: "my-account",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Indicar Cuidador",
        Subtitle: "Solve test 3",
        Route: "my-account",
        ButtonDescription: "Resolver"
      },
      {
        Title: "Indicar Médico",
        Subtitle: "Solve test 3",
        Route: "my-account",
        ButtonDescription: "Resolver"
      }
    ];

    res.status(200).send(alertas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
