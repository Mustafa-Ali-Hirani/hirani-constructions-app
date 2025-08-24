import React from 'react';

// Import all images needed for the page
import founderImage from '../assets/Hasnain.jpg';
import philosophyImage from '../assets/image-10.png';
import missionImage from '../assets/image-13.png';

// Data for the Core Values list for easier management
const coreValues = [
  'Work Ethic', 'Accountability', 'Dedication', 'Safety', 'Commitment',
  'Optimism', 'Quality', 'Trust', 'Integrity', 'Measured Performance', 'Excellence',
];

const AboutUs = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-8">
        
        {/* ========== SECTION 1: Founder Information ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 items-start">
          {/* ... (Code for Section 1 remains unchanged) ... */}
          <div className="md:pr-8 mb-10 md:mb-0">
            <p className="text-sm font-semibold text-gray-500 tracking-widest mb-4">ABOUT US</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-none">Over 25 years of industry expertise</h1>
          </div>
          <div className="flex justify-center md:px-8 md:border-l border-gray-200 mb-10 md:mb-0">
            <img src={founderImage} alt="Founder of Hirani Constructions" className="w-full max-w-xs object-contain rounded-md" />
          </div>
          <div className="md:pl-8 md:border-l border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed">Established by Hirani in 1994, Hirani Constructions Inc. brings over 25 years of industry expertise to every project...</p>
          </div>
        </div>

        {/* ========== SECTION 2: Our Philosophy ========== */}
        <div className="mt-24 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">
          {/* ... (Code for Section 2 remains unchanged) ... */}
           <div>
            <img src={philosophyImage} alt="Construction work in progress" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="text-gray-700 leading-relaxed space-y-6 mt-8 md:mt-0">
            <p>Hirani Constructions has successfully executed a diverse array of projects...</p>
            <p>We offer a comprehensive suite of services, from initial planning and budgeting to site selection...</p>
            <p className="font-bold text-gray-900">For 25 years, Hirani Construction's philosophy has remained unwavering...</p>
          </div>
        </div>

        {/* ========== SECTION 3: Vision, Mission & Core Values ========== */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          {/* ... (Code for Section 3 remains unchanged) ... */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <div className="bg-indigo-900 text-white p-12 rounded-lg shadow-lg">
                <h3 className="font-extrabold text-2xl tracking-widest mb-4">VISION</h3>
                <p className="text-indigo-200 leading-relaxed">We are a company, committed to becoming the contractor of choice...</p>
              </div>
              <div className="bg-white p-12 rounded-lg shadow-lg border">
                <h3 className="font-extrabold text-2xl tracking-widest mb-6 text-gray-800">CORE VALUES</h3>
                <ul className="space-y-2 text-gray-600 columns-2">
                  {coreValues.map((value) => ( <li key={value} className="flex items-center"><span className="text-purple-700 mr-2">•</span>{value}</li> ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg flex flex-col">
              <div>
                <h3 className="font-extrabold text-2xl tracking-widest mb-4 text-gray-800">MISSION</h3>
                <p className="text-4xl text-gray-700 font-light leading-snug">Our mission is to be a dynamic team, providing the highest quality construction services available.</p>
              </div>
              <div className="mt-8 flex-grow">
                <img src={missionImage} alt="Large construction stadium build" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 4: Reputation and Integrity (NEW) ========== */}
        <div className="mt-24 pt-16 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Text */}
            <div className="text-gray-700">
                <h2 className="text-4xl font-light leading-snug mb-6">
                    The reputation of <span className="font-semibold text-gray-900">Hirani Construction Inc.</span> for integrity and fair dealing is one of our most valuable and protected assets.
                </h2>
                <p className="leading-relaxed">
                    Hirani conducts its business in strict compliance with applicable laws and regulations and maintains a strong commitment to perform to the highest professional and ethical standards. Hirani is a principal member of the Construction Industry Ethics & Compliance Initiative and has a full-time Ethics Officer.
                </p>
                <p className="mt-4 leading-relaxed">
                    Every Hirani employee is expected to perform his or her duties with the highest level of integrity. In an effort to promote honest and ethical conduct for all employees, Hirani has implemented Business Ethics Guidelines that address what is appropriate behavior and serves as a roadmap to help employees make ethical decisions. The Guidelines address such topics as bids, proposals, and claims, as well as providing parameters for effectively managing business relationships with our customers, subcontractors and fellow employees.
                </p>
                <p className="mt-4 leading-relaxed">
                    Hirani's reputation for business integrity is the result of a strong commitment to its core values of Integrity, Excellence, and Quality.
                </p>
            </div>

            {/* Right Column: Image and Quote */}
            <div className="flex flex-col gap-8">
                <img src={philosophyImage} alt="Paving and site work" className="w-full h-auto rounded-lg shadow-md" />
                <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                    <p className="text-2xl font-light text-gray-800 leading-relaxed">
                        We do what we say we will do and what is right
                        <span className="block">—not what is most expedient. At Hirani, ethics matter and compliance counts.</span>
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;