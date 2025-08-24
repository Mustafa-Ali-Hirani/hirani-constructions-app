import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

import placeholderImage from "../assets/image-12.png";

// Define the base URL for your API, same as in the other files
const API_BASE_URL = "https://hirani-constructions-api.onrender.com";

// The component receives all functions from App.jsx
function ProjectGallery({
  projects,
  isLoading,
  error,
  onProjectDeleted,
  onProjectUpdated,
}) {
  const scrollContainerRef = useRef(null);

  // State for handling the inline editing form
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    location: "",
    budget: "",
  });

  // Your scrolling functions
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  // Functions for handling the editing process
  const handleEditClick = (project) => {
    setEditingProjectId(project._id);
    setEditFormData({
      name: project.name,
      location: project.location,
      budget: project.budget,
    });
  };

  const handleCancelEdit = () => {
    setEditingProjectId(null);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateSubmit = async (projectId) => {
    try {
      const updatedData = {
        name: editFormData.name,
        location: editFormData.location,
        budget: Number(editFormData.budget),
      };
      // Use the full URL to your deployed backend
      const response = await axios.put(
        `${API_BASE_URL}/api/projects/${projectId}`, // <-- CHANGED
        updatedData
      );

      onProjectUpdated(response.data); // Notify App.jsx of the update
      setEditingProjectId(null); // Exit editing mode
    } catch (err) {
      console.error("Failed to update project", err);
      alert("Error: Could not update the project.");
    }
  };

  // This function decides what to render inside the gallery
  const renderGalleryContent = () => {
    if (isLoading) {
      return (
        <p className="text-center text-gray-500 w-full">
          Loading Live Projects...
        </p>
      );
    }
    if (error) {
      return <p className="text-center text-red-500 w-full">{error}</p>;
    }
    if (!Array.isArray(projects) || projects.length === 0) {
      return (
        <p className="text-center text-gray-500 w-full">No Projects Found.</p>
      );
    }

    return projects.map((project) => (
      <div
        key={project._id}
        className="flex-shrink-0 w-80 md:w-96 rounded-lg shadow-xl overflow-hidden bg-gray-50"
      >
        <img
          src={placeholderImage}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          {editingProjectId === project._id ? (
            // If we are in EDIT MODE for this specific project, show the form
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleFormChange}
                className="w-full p-1 border rounded text-sm"
                placeholder="Project Name"
              />
              <input
                type="text"
                name="location"
                value={editFormData.location}
                onChange={handleFormChange}
                className="w-full p-1 border rounded text-sm"
                placeholder="Location"
              />
              <input
                type="number"
                name="budget"
                value={editFormData.budget}
                onChange={handleFormChange}
                className="w-full p-1 border rounded text-sm"
                placeholder="Budget"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleUpdateSubmit(project._id)}
                  className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // Otherwise, show the normal project details
            <div>
              <h3 className="text-xl font-bold text-gray-800 truncate">
                {project.name}
              </h3>
              <p className="text-gray-600 mt-1">{project.location}</p>
              <p className="text-gray-800 mt-2 font-semibold">
                ${project.budget.toLocaleString()}
              </p>

              {/* --- THIS IS THE FINAL SECURITY CHECK --- */}
              {/* Only show the Edit/Delete buttons if the onProjectUpdated function was passed down */}
              {onProjectUpdated && (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEditClick(project)}
                    className="text-xs text-blue-500 hover:text-blue-700 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onProjectDeleted(project._id)}
                    className="text-xs text-red-500 hover:text-red-700 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute inset-0 flex items-center justify-between z-10 px-0 md:px-2 pointer-events-none">
          <button
            onClick={scrollLeft}
            className="bg-.white/80 rounded-full shadow-md p-2 hover:bg-white transition pointer-events-auto"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={28} className="text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-white/80 rounded-full shadow-md p-2 hover:bg-white transition pointer-events-auto"
            aria-label="Scroll Right"
          >
            <ChevronRight size={28} className="text-gray-700" />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 py-4 scrollbar-hide"
        >
          {renderGalleryContent()}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
