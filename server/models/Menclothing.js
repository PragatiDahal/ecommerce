const mongoose = require("mongoose");

const menclothingSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Menclothing"}
);
const Menclothing = mongoose.model("Menclothing", menclothingSchema);
module.exports = Menclothing;