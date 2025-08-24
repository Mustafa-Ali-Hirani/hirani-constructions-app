import React from 'react';

// 1. Import the images from the 'src/assets' folder
import imageOne from '../assets/Pic-1.png';
import imageTwo from '../assets/Pic-2.png';

function WhoWeAre() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Side: Image */}
      <div className="relative h-[300px] lg:h-auto order-1">
        <img
          // 2. Use the imported image variable here
          src={imageOne}
          alt="Construction site or team working"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="relative bg-[#1c1c5a] text-white flex items-center justify-center px-6 py-12 lg:px-10 lg:py-16 order-2">
        <p className="max-w-md text-lg leading-relaxed">
          With a management team possessing over 60 years of combined
          construction expertise, we bring a wealth of knowledge and skill to
          every project.
        </p>
      </div>

      {/* Bottom Left: Text Content */}
      <div className="bg-white p-6 lg:p-10 flex flex-col justify-center gap-4 lg:gap-6 order-3 lg:order-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-black">
          WHO WE ARE
        </h2>
        <p className="text-gray-800 text-base leading-relaxed">
          Established in 1994 by Sharon Coleman, formerly known as Denshaw Inc.,
          Hirani Construction Inc. boasts decades of industry experience.
        </p>
        <button
          className="bg-[#1c1c5a] text-white px-6 py-3 rounded-full w-fit hover:bg-[#2d2d78] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c1c5a] focus:ring-offset-2"
          aria-label="Learn more about us"
        >
          ABOUT US ↘
        </button>
      </div>

      {/* Bottom Right: Image */}
      <div className="flex items-center justify-center order-4 lg:order-3">
        <img
          // 3. Use the imported image variable here
          src={imageTwo}
          alt="Construction worker on site"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;