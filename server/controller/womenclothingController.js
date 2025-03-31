const Womenclothing = require("../models/Womenclothing");

// Get allWomen clothing items
const getAllWomenClothing = async (req, res) => {
  try {
    const clothing = await WWomenclothing.find();
    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get a singleWomen clothing item by ID
const getWomenClothingById = async (req, res) => {
  try {
    const clothing = await WWomenclothing.findById(req.params.id);
    if (!clothing) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add a new Women clothing item
const addWomenClothing = async (req, res) => {
  try {
    const { name, image, price } = req.body;
    const newItem = new WWomenclothing({ name, image, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error adding item" });
  }
};

// Update a Women clothing item by ID
const updateWomenClothing = async (req, res) => {
  try {
    const { name, image, price } = req.body;
    const updatedItem = await Womenclothing.findByIdAndUpdate(
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

// Delete aWomen clothing item by ID
const deleteWomenClothing = async (req, res) => {
  try {
    const deletedItem = await Womenclothing.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item" });
  }
};

module.exports = {
  getAllWomenClothing,
  getWomenClothingById,
  addWomenClothing,
  updateWomenClothing,
  deleteWomenClothing,
};
