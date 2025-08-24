import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // A tool to help us change pages

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigation tool

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Send the email and password to our new backend login doorway
      const response = await axios.post("/api/auth/login", { email, password });

      // The backend will send back a "digital ID card" (the token).
      // We will store this card safely in the browser's localStorage.
      localStorage.setItem("token", response.data.token);

      // After successfully logging in, automatically go back to the homepage.
      navigate("/");
      // We will also force a refresh to make sure the whole app knows we are logged in.
      window.location.reload();
    } catch (err) {
      // If the backend sends an error, display it.
      setError("Invalid email or password. Please try again.");
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 font-semibold text-white bg-[#283061] rounded-md hover:bg-opacity-90"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
