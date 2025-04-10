const mongoose = require("mongoose");

const TrendingSchema = new  mongoose.Schema(
    {
    name: String,
    image: String,
    price: String,
    },
    { collection: "Trending"}
);
const Trending = mongoose.model("Trending", TrendingSchema);
module.exports = Trending;