require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db.js");

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/customers", require("./routes/customers"));
app.use("/api/alerta", require("./routes/alerta"));
app.use("/api/task", require("./routes/task"));
app.use("/api/graphic", require("./routes/graphic"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server Started on Port 5000!")
);
