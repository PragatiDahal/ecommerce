const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getAllWomenClothing,
  getWomenClothingById,
  addWomenClothing,
  updateWomenClothing,
  deleteWomenClothing,
} = require("../controller/womenclothingController");

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

router.get("/", getAllWomenClothing);
router.get("/:id", getWomenClothingById);
router.post("/", upload.single("image"), addWomenClothing);
router.put("/:id", upload.single("image"), updateWomenClothing);
router.delete("/:id", deleteWomenClothing);

module.exports = router;
