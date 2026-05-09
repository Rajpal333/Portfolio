const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  profileImage: {
    type: String
  },
  resume: {
    type: String
  },
  location: {
    type: String
  },
  email: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);