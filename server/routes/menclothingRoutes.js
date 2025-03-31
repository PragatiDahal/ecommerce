const express = require("express");
const {
  getAllMenClothing,
  getMenClothingById,
  addMenClothing,
  updateMenClothing,
  deleteMenClothing,
} = require("../controller/menclothingController");

const router = express.Router();

router.get("/", getAllMenClothing);
router.get("/:id", getMenClothingById);
router.post("/", addMenClothing);
router.put("/:id", updateMenClothing);
router.delete("/:id", deleteMenClothing);

module.exports = router;
