const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllTrending,
  getTrendingById,
  addTrending,
  updateTrending,
  deleteTrending,
} = require("../controller/trendingController");

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
router.get("/", getAllTrending);
router.get("/:id", getTrendingById);
router.post("/", upload.single("image"), addTrending); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateTrending);
router.delete("/:id", deleteTrending);

module.exports = router;