const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let graphic = [
      {
        Inclusions: "14",
        Treatment: "25",
        Grip: "9",
        Canceled: "6"
      }
    ];

    res.status(200).send(graphic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
