// const Profile = require("../models/Profile");
   const Profile = require("../models/profile")

// 👉 CREATE Profile
exports.createProfile = async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 GET Profile (Single)
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
