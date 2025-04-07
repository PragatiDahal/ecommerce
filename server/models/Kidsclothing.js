const mongoose = require("mongoose");

const KidsclothingSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Kidsclothing"}
);
const Kidsclothing = mongoose.model("Kidsclothing", KidsclothingSchema);
module.exports = Kidsclothing;