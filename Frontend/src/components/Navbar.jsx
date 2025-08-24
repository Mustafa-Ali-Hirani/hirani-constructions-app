import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "About Us", path: "/about-us" },
  ];

  // --- THIS IS THE "SMART" LOGIC THAT WAS MISSING ---
  // We create a state to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This code runs once when the component loads
  useEffect(() => {
    // Check if the "digital ID card" (token) exists in the browser's storage
    const token = localStorage.getItem("token");
    if (token) {
      // If it exists, set our state to true
      setIsLoggedIn(true);
    }
  }, []);

  // This function handles logging out
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the ID card
    window.location.reload(); // Refresh the page
  };
  // --- END OF THE "SMART" LOGIC ---

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-purple-700 tracking-wide">
        HIRANI <span className="text-gray-800">Constructions</span>
      </Link>

      <div className="flex items-center gap-12">
        <ul className="flex gap-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-purple-700 transition-colors ${
                    isActive ? "text-purple-700 font-bold" : ""
                  }`
                }
                end={link.path === "/"}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --- THIS IS THE NEW "SMART" BUTTON/LINK --- */}
        {/* It replaces your old phone number link */}
        {isLoggedIn ? (
          // If isLoggedIn is true, show the Logout button
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        ) : (
          // If isLoggedIn is false, show the Admin Login link
          <Link
            to="/login"
            className="text-white bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-800 transition-colors"
          >
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
