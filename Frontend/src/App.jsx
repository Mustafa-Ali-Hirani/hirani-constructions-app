import { useState, useEffect } from "react";
import axios from "axios";

import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import SectionHeader from "./components/SectionHeader";
import ProjectGallery from "./components/ProjectGallery";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import NewProjectForm from "./components/NewProjectForm"; // <-- NEW: Import the form

// Define the base URL for your API
const API_BASE_URL = "https://hirani-constructions-api.onrender.com";

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // --- NEW: CHECK FOR LOGIN STATUS ---
    // Look in the browser's local storage for our "digital ID card" (the token)
    const token = localStorage.getItem("token");
    if (token) {
      // If the token exists, flip our isLoggedIn switch to true
      setIsLoggedIn(true);
    }
    // --- END: CHECK FOR LOGIN STATUS ---

    // This is your original code to fetch projects. It runs right after the login check.
    const fetchProjects = async () => {
      try {
        // Use the full URL to your deployed backend
        const response = await axios.get(`${API_BASE_URL}/api/projects`); // <-- CHANGED
        setProjects(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Could not fetch projects from the database.");
        setIsLoading(false);
        console.error("Backend Error:", err);
      }
    };

    fetchProjects();
  }, []); // The empty [] means this all runs only once when the app first loads

  // --- START: NEW FUNCTION ---
  // This function will be given to the NewProjectForm.
  // When a project is added, the form will call this function.
  const handleProjectAdded = (newProject) => {
    // We update our list of projects by adding the new one to the end.
    setProjects([...projects, newProject]);
  };
  // --- END: NEW FUNCTION ---

  // --- START: NEW DELETE FUNCTION ---
  const handleProjectDeleted = async (projectId) => {
    // Ask the user to confirm before deleting
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        // Use the full URL to your deployed backend
        await axios.delete(`${API_BASE_URL}/api/projects/${projectId}`); // <-- CHANGED

        // If the deletion was successful, update our frontend list
        // by filtering out the project with the matching ID.
        setProjects(projects.filter((p) => p._id !== projectId));
      } catch (err) {
        console.error("Failed to delete project", err);
        // Optional: You could show an error message to the user here
        alert("Error: Could not delete the project.");
      }
    }
  };
  // --- END: NEW DELETE FUNCTION ---

  // --- START: NEW UPDATE FUNCTION ---
  const handleProjectUpdated = (updatedProject) => {
    // We update our projects list by finding the old project
    // and replacing it with the new, updated version.
    setProjects(
      projects.map((p) => (p._id === updatedProject._id ? updatedProject : p))
    );
  };
  // --- END: NEW UPDATE FUNCTION ---

  return (
    <>
      <HeroSection />

      {/* --- CHANGE #1: CONDITIONAL FORM --- */}
      {/* This is a magic trick in JSX. It means: */}
      {/* If 'isLoggedIn' is true, THEN show the <NewProjectForm />. */}
      {isLoggedIn && <NewProjectForm onProjectAdded={handleProjectAdded} />}

      <WhatWeDo />
      <WhoWeAre />
      <SectionHeader />

      <ProjectGallery
        projects={projects}
        isLoading={isLoading}
        error={error}
        // --- CHANGE #2: CONDITIONAL PROPS ---
        // This is another magic trick. It means:
        // If 'isLoggedIn' is true, THEN pass down the delete function, otherwise pass 'null'.
        onProjectDeleted={isLoggedIn ? handleProjectDeleted : null}
        onProjectUpdated={isLoggedIn ? handleProjectUpdated : null}
      />

      <ServicesSection />
      <ClientsSection />
    </>
  );
}

export default App;
