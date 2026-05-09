const express = require("express");
const router = express.Router();

const {
  createProfile,
  getProfile
} = require("../controllers/profileController");

// POST → Save profile
router.post("/", createProfile);

// GET → Fetch profile
router.get("/", getProfile);

module.exports = router;