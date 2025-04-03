const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllMenClothing,
  getMenClothingById,
  addMenClothing,
  updateMenClothing,
  deleteMenClothing,
} = require("../controller/menclothingController");

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
router.get("/", getAllMenClothing);
router.get("/:id", getMenClothingById);
router.post("/", upload.single("image"), addMenClothing); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateMenClothing);
router.delete("/:id", deleteMenClothing);

module.exports = router;
