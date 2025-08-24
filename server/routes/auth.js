const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); // Our User blueprint
const bcrypt = require("bcrypt"); // Our password tool
const jwt = require("jsonwebtoken"); // Our new "ID Card" tool

// --- INSTRUCTION 1: Register a new user ---
// This runs on a POST request to /api/auth/register
router.post("/register", async (req, res) => {
  try {
    // Create a new user in memory with the email and password from the form
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    // The password will be automatically scrambled here by the magic in User.js

    // Save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    // If the email is already taken, a special error occurs.
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Failed to register user." });
  }
});

// --- INSTRUCTION 2: Log in an existing user ---
// This runs on a POST request to /api/auth/login
router.post("/login", async (req, res) => {
  try {
    // Find a user in the database with the matching email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // If we can't find the user, send an error
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Use bcrypt to compare the password from the form with the scrambled password in the database
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      // If they don't match, send an error
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // --- If the password IS a match, we create the "digital ID card" (JWT) ---
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET, // A secret key we will create soon
      { expiresIn: "1h" } // The ID card expires in 1 hour
    );

    // Send the ID card back to the user
    res.json({ token: token });
  } catch (error) {
    res.status(500).json({ message: "Server error during login." });
  }
});

module.exports = router;
