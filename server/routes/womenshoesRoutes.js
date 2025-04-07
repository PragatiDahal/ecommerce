const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllWomenshoes,
  getWomenshoesById,
  addWomenshoes,
  updateWomenshoes,
  deleteWomenshoes,
} = require("../controller/womenshoesController");

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
router.get("/", getAllWomenshoes);
router.get("/:id", getWomenshoesById);
router.post("/", upload.single("image"), addWomenshoes); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateWomenshoes);
router.delete("/:id", deleteWomenshoes);

module.exports = router;