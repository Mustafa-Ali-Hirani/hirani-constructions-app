// This line MUST be first to load our secret address
require("dotenv").config();

// --- Import all our tools ---
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // For the "permission slip"
const authRoutes = require("./routes/auth.js"); // <-- ADD THIS LINE

// --- Import our new instruction sheet ---
const projectRoutes = require("./routes/Projects.js");

// --- Create the main app and set the port ---
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares (Tools that run on every request) ---
app.use(cors()); // Use the permission slip tool
app.use(express.json()); // This teaches our app to read JSON data

// --- Routes (The main assembly line instructions) ---
// This tells the app: for any URL that starts with "/api/projects",
// use the instructions from our projectRoutes file.
app.use("/api/projects", projectRoutes);

app.use("/api/auth", authRoutes); // <-- ADD THIS LINE

// A simple test route to make sure the server is alive
app.get("/", (req, res) => {
  res.send("The Hirani Constructions Workshop is running!");
});

// --- Connect to the Warehouse and Start the Workshop ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // We only start the workshop if the warehouse connection is successful
    app.listen(PORT, () => {
      console.log("Success! Connected to the Warehouse.");
      console.log(`Workshop is open and running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failure! Could not connect to the Warehouse. Error:", error);
  });
