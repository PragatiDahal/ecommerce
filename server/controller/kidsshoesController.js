const Kidsshoes = require("../models/Kidsshoes");

// Get all Kidsshoes items
const getAllKidsshoes = async (req, res) => {
  try {
    const items = await Kidsshoes.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items", details: error.message });
  }
};

// Get a single Kidsshoes item by ID
const getKidsshoesById = async (req, res) => {
  try {
    const item = await Kidsshoes.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching item", details: error.message });
  }
};

// Add a new Kidsshoes item
const addKidsshoes = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

    const newItem = new Kidsshoes({ name, price, image });
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res.status(500).json({ error: "Error adding item", details: error.message });
  }
};

// Update a Kidsshoes item
const updateKidsshoes = async (req, res) => {
  try {
    const { name, price } = req.body;
    let image = req.body.image;

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await Kidsshoes.findByIdAndUpdate(
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

// Delete a Kidsshoes item
const deleteKidsshoes = async (req, res) => {
  try {
    const deletedItem = await Kidsshoes.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item", details: error.message });
  }
};

module.exports = {
  getAllKidsshoes,
  getKidsshoesById,
  addKidsshoes,
  updateKidsshoes,
  deleteKidsshoes,
};
