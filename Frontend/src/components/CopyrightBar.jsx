import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function CopyrightBar() {
  // This function scrolls the window to the very top smoothly.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs sm:text-sm text-gray-500">
        
        {/* FIX #1: Use the <Link> component to navigate to the /privacy page. */}
        {/* This will automatically show the "hand" cursor. */}
        <Link to="/privacy" className="hover:text-black underline">
          Privacy Policy
        </Link>
        
        {/* FIX #2: Add the `cursor-pointer` class to the button to show the "hand" icon. */}
        <button onClick={scrollToTop} className="hover:text-black underline cursor-pointer">
          Back to Top
        </button>
        
        <p>
          © {new Date().getFullYear()} by Hirani Constructions
        </p>
      </div>
    </div>
  );
}

export default CopyrightBar;