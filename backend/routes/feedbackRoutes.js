const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback"); // Modelo do MongoDB

// Rota para adicionar feedback
router.post("/", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    // Validação básica
    if (!rating || !comment) {
      return res.status(400).json({ error: "Nota e comentário são obrigatórios!" });
    }

    // Criação do feedback no banco de dados
    const feedback = new Feedback({
      name: name || "Anônimo",
      rating,
      comment,
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback salvo com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar feedback:", err); // Exibe o erro no terminal
    res.status(500).json({ error: "Erro ao salvar feedback" }); // Retorna erro ao Insomnia
  }
});

module.exports = router;