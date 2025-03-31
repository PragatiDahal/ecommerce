const mongoose = require("mongoose");

const womenclothingSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Womenclothing"}
);
const Womenclothing = mongoose.model("Womenclothing", womenclothingSchema);
module.exports = Womenclothing;