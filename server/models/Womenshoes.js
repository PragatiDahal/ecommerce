const mongoose = require("mongoose");

const WomenshoesSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Womenshoes"}
);
const Womenshoes = mongoose.model("Womenshoes", WomenshoesSchema);
module.exports = Womenshoes;