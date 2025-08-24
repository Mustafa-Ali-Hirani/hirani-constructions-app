import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// 1. IMPORT THE MISSING IMAGE
import intuitDomeImage from '../assets/image-13.png';

// Data for the TOP section with green checkmarks
const primaryServiceColumns = [
  // ... (this data is correct and unchanged)
  {
    title: "PROJECT MANAGEMENT AND CONSULTATION SERVICES",
    services: [ { name: "Construction Management Services:", description: "Overseeing the planning, design, and construction phases of a project to ensure efficiency and quality." }, { name: "Structural Engineering:", description: "Providing expertise in designing and analyzing the structural components of buildings and infrastructure." } ]
  },
  {
    title: "CONSTRUCTION AND DEVELOPMENT SERVICES",
    services: [ { name: "Design-Build:", description: "Offering a streamlined approach where a single entity manages both the design and construction aspects of a project." }, { name: "New Construction & Renovations, including Tenant Improvement projects:", description: "Involving the construction of entirely new buildings or the renovation of existing structures to meet specific requirements, including improvements for tenants." } ]
  }
];

// Data for the MIDDLE section with bullet points
const secondaryServiceColumns = [
    // ... (this data is correct and unchanged)
    {
        title: "BUILDING AND INFRASTRUCTURE CONSTRUCTION",
        services: [ { name: "Commercial & Industrial Buildings:", description: "Construction of various types of commercial and industrial structures, such as office buildings, factories, warehouses, etc." }, { name: "Retail Construction:", description: "Specializing in the construction of retail spaces, including stores, malls, and shopping centers." } ]
    },
    {
        title: "SITE PREPARATION AND INFRASTRUCTURE SERVICES",
        services: [ { name: "Demolition:", description: "Removing existing structures and clearing sites for new construction projects." }, { name: "Complete Building & Selective Site Development:", description: "Handling all aspects of site development, including clearing, grading, and preparing the land for construction." }, { name: "Excavation & Site Work Underground Utilities:", description: "Managing excavation and underground utility installations required for building projects." } ]
    }
];

// Reusable component for the top service items with checkmarks
const ServiceItem = ({ name, description }) => ( <div className="flex items-start gap-4"> <CheckCircle2 size={24} className="text-green-500 mt-1 flex-shrink-0" /> <div> <h4 className="font-bold text-gray-800">{name}</h4> <p className="text-gray-600 mt-1">{description}</p> </div> </div> );

// Reusable component for the middle service items with bullet points
const BulletPointServiceItem = ({name, description}) => ( <div className="flex items-start"> <span className="text-2xl font-bold text-gray-800 mr-3 mt-[-4px]">•</span> <p className="text-gray-600"> <strong className="font-bold text-gray-800">{name}</strong> {description} </p> </div> );

function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* === TOP SECTION === */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:pr-12">
            <p className="text-sm font-semibold text-gray-500 tracking-wider">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight"> Our services meet all kinds of needs </h2>
            <button className="mt-8 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"> ALL SERVICES <ArrowRight size={20} /> </button>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {primaryServiceColumns.map((column) => ( <div key={column.title} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"> <h3 className="text-xl font-extrabold text-gray-900 mb-6">{column.title}</h3> <div className="space-y-6"> {column.services.map((service) => ( <ServiceItem key={service.name} name={service.name} description={service.description} /> ))} </div> </div> ))}
          </div>
        </div>

        {/* === MIDDLE SECTION === */}
        <div className="mt-20 border-t border-gray-200 pt-16">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {secondaryServiceColumns.map((column, index) => ( <div key={column.title} className={index === 0 ? 'md:pr-12 md:border-r md:border-gray-200' : ''}> <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight"> {column.title} </h3> <div className="mt-8 space-y-6"> {column.services.map(service => ( <BulletPointServiceItem key={service.name} name={service.name} description={service.description} /> ))} </div> </div> ))}
            </div>
        </div>

        {/* === FINAL BOTTOM STORY SECTION (Corrected Layout) === */}
        <div className="mt-20 border-t border-gray-200 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center">
                
                {/* Left Column */}
                <div className="space-y-4">
                    <p className="text-xs font-semibold text-gray-500 tracking-wider">CONSTRUCTION STORIES</p>
                    <h3 className="text-3xl font-bold text-gray-800">Intuit Dome</h3>
                    <p className="text-md text-gray-600">Subcontractor</p>
                    <div className="text-sm text-gray-500 space-y-2 pt-2">
                        <p><strong className="font-semibold text-gray-700">Project Address:</strong> 3939 W 102nd St Inglewood, CA 90303</p>
                        <p><strong className="font-semibold text-gray-700">Duration:</strong> 10/16/2023 - ongoing</p>
                    </div>
                </div>
                
                {/* Center Column (Image) */}
                <div>
                    <img 
                        // 2. USE THE IMPORTED IMAGE VARIABLE HERE
                        src={intuitDomeImage} 
                        alt="Intuit Dome construction project showing seat installation" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Right Column */}
                <div className="lg:pl-8">
                    <h4 className="text-xl font-bold text-gray-800">Work Performed</h4>
                    <ul className="mt-4 text-gray-600 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2 text-gray-500">•</span>
                            <span>Seat Installation</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;