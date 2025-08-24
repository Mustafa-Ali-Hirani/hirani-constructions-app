const express = require("express");
const router = express.Router();

// We need to get our "Project" blueprint from the models folder
const Project = require("../models/Project.js");

// --- INSTRUCTION 1: Get all projects ---
// This runs when we send a GET request to /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

// --- INSTRUCTION 2: Create a new project ---
// This runs when we send a POST request to /api/projects
router.post("/", async (req, res) => {
  // Create a new project in memory from the data sent to us
  const newProject = new Project({
    name: req.body.name,
    location: req.body.location,
    budget: req.body.budget,
  });

  try {
    // Try to save this new project to the database
    const savedProject = await newProject.save();
    res.status(201).json(savedProject); // Send back the saved project as confirmation
  } catch (error) {
    res.status(400).json({ message: "Failed to create project" });
  }
});

// We must export this whole instruction sheet so other files can use it

// --- INSTRUCTION 3: Delete a project ---
// This runs when we send a DELETE request to a specific project's ID
// For example: /api/projects/652d8c3f7b3e8c5e8f3b1e7a
router.delete("/:id", async (req, res) => {
  try {
    // We find the project by its unique ID (from the URL) and delete it.
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    // If we couldn't find a project with that ID, send an error.
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    // If it was deleted successfully, send a confirmation message.
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    // If something else went wrong, send a server error message.
    res.status(500).json({ message: "Failed to delete project" });
  }
});

// --- INSTRUCTION 4: Update a project ---
// This runs when we send a PUT request to a specific project's ID
// A PUT request is the standard for updating data.
router.put("/:id", async (req, res) => {
  try {
    // We find a project by its ID and update it with the new data
    // { new: true } tells the database to send back the *updated* project.
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    // If we couldn't find a project with that ID, send an error.
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    // If it was updated successfully, send back the new project data.
    res.json(updatedProject);
  } catch (error) {
    // If something else went wrong (like a validation error), send a server error message.
    res.status(400).json({ message: "Failed to update project" });
  }
});
module.exports = router;
