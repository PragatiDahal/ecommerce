const mongoose = require("mongoose");

const menshoesSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Menshoes"}
);
const Menshoes = mongoose.model("Menshoes", menshoesSchema);
module.exports = Menshoes;