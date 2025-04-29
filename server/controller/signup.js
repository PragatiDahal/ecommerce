const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Server-side validation function
function validateUserData(username, email, phone, password) {
  if (!username || !email || !phone || !password) {
    return "All fields are required.";
  }

  const usernameRegex = /^[A-Za-z][A-Za-z0-9]*\s?[A-Za-z0-9]*$/;
  if (!usernameRegex.test(username)) {
    return "Username must start with a letter and can include numbers and an optional space.";
  }

  const emailRegex = /^([A-Za-z0-9]+(?:[.#_][A-Za-z\d]+)*@[A-Za-z]+)(\.[A-Za-z]{2,3})$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return "Phone number must be 10 digits.";
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and include uppercase, lowercase, a digit, and a special character.";
  }

  return null;
}

// Signup controller function
const signuppage = async (req, res) => {
  const { username, email, phone, password } = req.body;

  // Validate user input
  const validationError = validateUserData(username, email, phone, password);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists." });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists." });
      }
    }

    const saltRounds = Number(process.env.SALT) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Error during user registration:", err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = signuppage;
