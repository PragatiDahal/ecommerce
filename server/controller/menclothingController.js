const Menclothing = require("../models/Menclothing");

// Get all MenClothing items
const getAllMenClothing = async (req, res) => {
  try {
    const items = await Menclothing.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items", details: error.message });
  }
};

// Get a single MenClothing item by ID
const getMenClothingById = async (req, res) => {
  try {
    const item = await Menclothing.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching item", details: error.message });
  }
};

// Add a new MenClothing item
const addMenClothing = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

    const newItem = new Menclothing({ name, price, image });
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res.status(500).json({ error: "Error adding item", details: error.message });
  }
};

// Update a MenClothing item
const updateMenClothing = async (req, res) => {
  try {
    const { name, price } = req.body;
    let image = req.body.image;

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await Menclothing.findByIdAndUpdate(
      req.params.id,
      { name, price, image },
      { new: true }
    );

    if (!updatedItem) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Item updated successfully", updatedItem });
  } catch (error) {
    res.status(500).json({ error: "Error updating item", details: error.message });
  }
};

// Delete a MenClothing item
const deleteMenClothing = async (req, res) => {
  try {
    const deletedItem = await Menclothing.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item", details: error.message });
  }
};

module.exports = {
  getAllMenClothing,
  getMenClothingById,
  addMenClothing,
  updateMenClothing,
  deleteMenClothing,
};
