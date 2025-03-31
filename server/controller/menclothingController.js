const Menclothing = require("../models/Menclothing");

// Get all men clothing items
const getAllMenClothing = async (req, res) => {
  try {
    const clothing = await Menclothing.find();
    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get a single men clothing item by ID
const getMenClothingById = async (req, res) => {
  try {
    const clothing = await Menclothing.findById(req.params.id);
    if (!clothing) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add a new men clothing item
const addMenClothing = async (req, res) => {
  try {
    const { name, image, price } = req.body;
    const newItem = new Menclothing({ name, image, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error adding item" });
  }
};

// Update a men clothing item by ID
const updateMenClothing = async (req, res) => {
  try {
    const { name, image, price } = req.body;
    const updatedItem = await Menclothing.findByIdAndUpdate(
      req.params.id,
      { name, image, price },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Error updating item" });
  }
};

// Delete a men clothing item by ID
const deleteMenClothing = async (req, res) => {
  try {
    const deletedItem = await Menclothing.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item" });
  }
};

module.exports = {
  getAllMenClothing,
  getMenClothingById,
  addMenClothing,
  updateMenClothing,
  deleteMenClothing,
};
