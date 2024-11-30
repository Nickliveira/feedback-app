const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, default: "Anônimo" },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);