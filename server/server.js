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
const womenclothingRoutes = require("./routes/womenclothingRoutes");
const womenshoesRoutes = require("./routes/womenshoesRoutes");
const kidsclothingRoutes = require("./routes/kidsclothingRoutes");
const KidsshoesRoutes = require("./routes/kidsshoesRoutes");
const trendingRoutes = require("./routes/trendingRoutes");
const contactRoutes = require('./routes/contactRoutes');
const signupRoute = require("./routes/signuppage");
const loginRoute = require("./routes/loginpage");
const userRoutes = require("./routes/userRoutes");

// Routes
app.use("/api/menclothing", menClothingRoutes);
app.use("/api/menshoes", menshoesRoutes);
app.use("/api/womenclothing", womenclothingRoutes);
app.use("/api/womenshoes", womenshoesRoutes);
app.use("/api/kidsclothing", kidsclothingRoutes);
app.use("/api/kidsshoes", KidsshoesRoutes);
app.use("/api/trending", trendingRoutes);
app.use('/api', contactRoutes);
app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", userRoutes);


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
