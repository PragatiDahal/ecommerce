const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Enforces uniqueness for username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Enforces uniqueness for email
  },
  phone: {
    type: String,
    required: true,
    unique: true, // Enforces uniqueness for phone number
  },
  password: {
    type: String,
    required: true,
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;

