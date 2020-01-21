const mongoose = require("mongoose");

const alertaSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Subtitle: { type: String, required: true },
  Route: { type: String, required: true },
  ButtonDescription: { type: String, required: true },
});

module.exports = mongoose.model("Alerta", alertaSchema);
