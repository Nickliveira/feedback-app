const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
// Rotas
app.use("/api/feedback", require("./routes/feedbackRoutes"));

// Inicialização do servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});