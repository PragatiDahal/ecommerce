const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST - Save contact info
router.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact info saved successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All contacts
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// DELETE - Contact by ID
router.delete("/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

module.exports = router;


