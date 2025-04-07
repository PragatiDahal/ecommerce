const mongoose = require("mongoose");

const kidsshoesSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "kidsshoes"}
);
const kidsshoes = mongoose.model("kidsshoes", kidsshoesSchema);
module.exports = kidsshoes;