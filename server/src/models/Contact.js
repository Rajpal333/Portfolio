const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  linkedin: String,
  github: String,
  whatsapp: String,
  gmail: String,
  telegram: String
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);