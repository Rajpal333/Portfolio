const Skill = require("../models/Skills");

// CREATE Skill
exports.createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const saved = await skill.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET All Skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};