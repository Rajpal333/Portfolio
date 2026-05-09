const Contact = require("../models/Contact");

// CREATE Contact
exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const saved = await contact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET Contact (Single)
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};