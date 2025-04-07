const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllMenshoes,
  getMenshoesById,
  addMenshoes,
  updateMenshoes,
  deleteMenshoes,
} = require("../controller/menshoesController");

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
router.get("/", getAllMenshoes);
router.get("/:id", getMenshoesById);
router.post("/", upload.single("image"), addMenshoes); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateMenshoes);
router.delete("/:id", deleteMenshoes);

module.exports = router;