import React, { useState } from "react";
import axios from "axios";

// This component receives a function 'onProjectAdded' from App.jsx
function NewProjectForm({ onProjectAdded }) {
  // Create state "boxes" to hold the form data
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState(null);

  // This function runs when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault(); // Stop the browser from reloading the page
    setError(null); // Clear any old errors

    try {
      // Create a new project object from the form data
      const newProject = {
        name: name,
        location: location,
        budget: Number(budget), // Make sure budget is a number
      };

      // Use axios to send a POST request to our backend
      const response = await axios.post("/api/projects", newProject);

      // Tell the main App component that a new project was added
      onProjectAdded(response.data);

      // Clear the form fields for the next entry
      setName("");
      setLocation("");
      setBudget("");
    } catch (err) {
      // If something went wrong, show an error message
      setError("Failed to create project. Please check the details.");
      console.error("Submit Error:", err);
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a New Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#283061] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Project
          </button>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default NewProjectForm;
