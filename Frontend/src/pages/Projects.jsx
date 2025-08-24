import React from 'react';

// STEP 1: Import each image from the 'src/assets' folder.
// The paths below assume Projects.jsx is in 'src/pages/'.
import projectImg1 from '../assets/Pic-1.png';
import projectImg2 from '../assets/Pic-2.png';
import projectImg3 from '../assets/image-3.png';
import projectImg4 from '../assets/image-4.png';
import projectImg5 from '../assets/image-5.png';
import projectImg6 from '../assets/image-6.png';
import projectImg7 from '../assets/image-7.png';
import projectImg10 from '../assets/image-10.png';
import projectImg12 from '../assets/image-12.png';
import projectImg13 from '../assets/image-13.png';

// STEP 2: Use the imported image variables in your data array.
const projectsData = [
  { id: 1, imageUrl: projectImg1, title: 'Commercial Building Project', category: 'Commercial' },
  { id: 2, imageUrl: projectImg2, title: 'Industrial Site Development', category: 'Industrial' },
  { id: 3, imageUrl: projectImg3, title: 'Urban Infrastructure', category: 'Infrastructure' },
  { id: 4, imageUrl: projectImg4, title: 'Structural Engineering Task', category: 'Engineering' },
  { id: 5, imageUrl: projectImg5, title: 'Highway and Bridge Construction', category: 'Infrastructure' },
  { id: 6, imageUrl: projectImg6, title: 'Foundation and Concrete Work', category: 'Construction' },
  { id: 7, imageUrl: projectImg7, title: 'Institutional Building', category: 'Commercial' },
  { id: 10, imageUrl: projectImg10, title: 'Site Preparation & Excavation', category: 'Site Work' },
  { id: 12, imageUrl: projectImg12, title: 'Retail Center Construction', category: 'Retail' },
  { id: 13, imageUrl: projectImg13, title: 'Specialty Trade Services', category: 'Specialized' },
];

const Projects = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-widest mb-4">
            OUR PORTFOLIO
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-gray-800">
            Showcasing Our Work
          </h1>
        </div>

        {/* Project Gallery Grid - NO CHANGES NEEDED HERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-black"
            >
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-md font-semibold text-purple-300">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;