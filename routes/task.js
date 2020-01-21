const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let tasks = [
      {
        Date: "20/07/2020",
        Profile: "Medico",
        RequesterName: "Dr. Renan",
        Patient: "Mauricios de Souza",
        Subject: "Agendamento"
      },
      {
        Date: "20/10/2020",
        Profile: "Enfermeiro",
        RequesterName: "Pedro",
        Patient: "Mauricios de Souza",
        Subject: "Agendamento"
      },
      {
        Date: "20/07/2020",
        Profile: "Enfermeiro",
        RequesterName: "Dr. Renan",
        Patient: "Mauricios de Souza",
        Subject: "Agendamento"
      },
    ];

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
