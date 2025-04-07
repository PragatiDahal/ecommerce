const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllKidsshoes,
  getKidsshoesById,
  addKidsshoes,
  updateKidsshoes,
  deleteKidsshoes,
} = require("../controller/kidsshoesController");

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
router.get("/", getAllKidsshoes);
router.get("/:id", getKidsshoesById);
router.post("/", upload.single("image"), addKidsshoes); // Apply Multer Middleware
router.put("/:id", upload.single("image"), updateKidsshoes);
router.delete("/:id", deleteKidsshoes);

module.exports = router;