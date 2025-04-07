const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Serve uploaded images as static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// import Routes
const menClothingRoutes = require("./routes/menclothingRoutes");
const menshoesRoutes = require("./routes/menshoesRoutes");

// Routes
app.use("/api/menclothing", menClothingRoutes);
app.use("/api/menshoes", menshoesRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(" Error connecting to MongoDB:", err));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
