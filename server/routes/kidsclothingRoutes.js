const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllKidsClothing,
  getKidsClothingById,
  addKidsClothing,
  updateKidsClothing,
  deleteKidsClothing,
} = require("../controller/kidsclothingController");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Routes
router.get("/", getAllKidsClothing);
router.get("/:id", getKidsClothingById);
router.post("/", upload.single("image"), addKidsClothing); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateKidsClothing);
router.delete("/:id", deleteKidsClothing);

module.exports = router;