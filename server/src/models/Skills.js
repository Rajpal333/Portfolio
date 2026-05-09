const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number, // 0–100
    required: true
  },
  category: {
    type: String // Frontend / Backend / AI / Tools
  }
}, { timestamps: true });

module.exports = mongoose.model("Skill", skillSchema);