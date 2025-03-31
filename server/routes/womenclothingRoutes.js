const express = require("express");
const {
    getAllWomenClothing,
    getWomenClothingById,
    addWomenClothing,
    updateWomenClothing,
    deleteWomenClothing, 
} = require("../models/Womenclothing");

const router = express.Router();

router.get("/", getAllWomenClothing);
router.get("/:id", getWomenClothingById);
router.post("/", addWomenClothing);
router.put("/:id", updateWomenClothing);
router.delete("/:id", deleteWomenClothing);

module.exports = router