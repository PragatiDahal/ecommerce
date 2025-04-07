const Menshoes = require("../models/Menshoes");

// Get all Menshoes items
const getAllMenshoes = async (req, res) => {
  try {
    const items = await Menshoes.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items", details: error.message });
  }
};

// Get a single Menshoes item by ID
const getMenshoesById = async (req, res) => {
  try {
    const item = await Menshoes.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching item", details: error.message });
  }
};

// Add a new Menshoes item
const addMenshoes = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

    const newItem = new Menshoes({ name, price, image });
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res.status(500).json({ error: "Error adding item", details: error.message });
  }
};

// Update a Menshoes item
const updateMenshoes = async (req, res) => {
  try {
    const { name, price } = req.body;
    let image = req.body.image;

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await Menshoes.findByIdAndUpdate(
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

// Delete a Menshoes item
const deleteMenshoes = async (req, res) => {
  try {
    const deletedItem = await Menshoes.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item", details: error.message });
  }
};

module.exports = {
  getAllMenshoes,
  getMenshoesById,
  addMenshoes,
  updateMenshoes,
  deleteMenshoes,
};
