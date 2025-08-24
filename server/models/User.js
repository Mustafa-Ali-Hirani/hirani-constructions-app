const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // We need our new password scrambler tool
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
    lowercase: true, // Store emails in lowercase to avoid confusion
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Passwords must be at least 6 characters long
  },
});

// --- THIS IS THE PASSWORD SCRAMBLING MAGIC ---
// This special function will run automatically BEFORE a user is saved to the database.
userSchema.pre("save", async function (next) {
  // We generate a "salt", which is a random string to make the scramble stronger
  const salt = await bcrypt.genSalt();
  // We take the user's plain password, scramble it with the salt, and store that instead
  this.password = await bcrypt.hash(this.password, salt);
  next(); // Continue with the saving process
});

const User = mongoose.model("User", userSchema);

module.exports = User;
