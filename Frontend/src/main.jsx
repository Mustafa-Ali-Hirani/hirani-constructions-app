import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import Layout from "./components/Layout";
import "./index.css";

import Services from "./pages/Services";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";

import LoginPage from "./pages/LoginPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The Layout component wraps all your pages, providing the Navbar */}
        <Route path="/" element={<Layout />}>
          {/* Your pages render inside the Layout */}
          <Route index element={<App />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="login" element={<LoginPage />} />{" "}
          {/* <-- THE LINE WE ADDED */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
