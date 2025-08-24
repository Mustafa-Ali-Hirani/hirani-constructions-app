import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CopyrightBar from './CopyrightBar';

// This component defines the shared structure for all pages.
function Layout() {
  return (
    <div>
      <Navbar />
      
      {/* The <Outlet> component is a placeholder. */}
      {/* React Router will render the specific page content (like the homepage or privacy policy) here. */}
      <main>
        <Outlet />
      </main>
      
      <Footer />
      <CopyrightBar />
    </div>
  );
}

export default Layout;