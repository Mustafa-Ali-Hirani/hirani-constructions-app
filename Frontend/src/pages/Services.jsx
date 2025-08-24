import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const naicsCodes = [
    { code: '236210', description: 'Industrial Building Construction' },
    { code: '236220', description: 'Commercial / Institutional Building' },
    { code: '237110', description: 'Water and Sewer Line Construction' },
    { code: '237310', description: 'Highway, Street, and Bridge' },
    { code: '238110', description: 'Poured Concrete Foundation / Structure' },
    { code: '238220', description: 'Plumbing/HVAC' },
    { code: '238120', description: 'Structural Steel & Pre-Cast Concrete' },
    { code: '238140', description: 'Masonry' },
    { code: '238190', description: 'Other Foundation, Structure, and Building Exterior' },
    { code: '238210', description: 'Carpentry' },
    { code: '238990', description: 'All other specialty trade contractors' },
  ];

  const specialTrainings = [
    { year: '2000 & 2010', description: 'Turner Construction Management Training Program' },
    { year: '2007', description: 'Los Angeles Unified School District Small Business Boot Camp' },
    { year: '2014', description: 'Southern California Edison Edge Mentorship Program' },
    { year: '2015', description: 'Southern California Gas Company Supplier Diversity Mastering Business Growth Program' },
  ];

  const certifications = [
    'HUBZone Certified',
    'Small Disadvantage Business (SDB)',
    'Woman Owned Small Business (WOSB)',
    '8 (m)EDWOSB',
  ];

  return (
    <div className="container mx-auto px-8 py-16">
      <div>
        <p className="text-sm font-semibold text-gray-600 tracking-widest mb-4">
          OUR SERVICES
        </p>
        <h1
          className={`text-5xl md:text-6xl font-light text-gray-800 transition-opacity duration-1000 ${
            isHeadingVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Our services meet all kinds of needs
        </h1>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">
          <div className="mb-12 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              PROJECT MANAGEMENT AND CONSULTATION SERVICES
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Construction Management Services</li>
            </ul>
          </div>

          <div className="mb-12 md:mb-0 pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              ENGINEERING SERVICES
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Structural Engineering</li>
            </ul>
          </div>

          <div className="pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
            <h3 className="text-sm font-semibold tracking-widest mb-6">
              NAICS CODES:
            </h3>
            <div className="space-y-2 text-sm">
              {naicsCodes.map((item) => (
                <p key={item.code}>
                  <span className="font-bold">{item.code}:</span> {item.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">
          <div className="mb-12 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              BUILDING CONSTRUCTION
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Commercial Buildings</li>
              <li>Industrial Buildings</li>
              <li>Retail Construction</li>
            </ul>
          </div>
          
          <div className="mb-12 md:mb-0 pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              INFRASTRUCTURE CONSTRUCTION
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Demolition</li>
              <li>Complete Building & Selective Site Development</li>
            </ul>
          </div>

          <div className="pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l text-sm">
            <div className="space-y-2 mb-8">
              {certifications.map((cert) => (
                <p key={cert}>{cert}</p>
              ))}
            </div>
            <h3 className="text-sm font-semibold tracking-widest mb-6">
              SPECIAL TRAININGS:
            </h3>
            <div className="space-y-4">
              {specialTrainings.map((training) => (
                <p key={training.year}>
                  <span className="font-bold">{training.year}:</span> {training.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">
          <div className="mb-12 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              SITE PREPARATION SERVICES
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Excavation</li>
              <li>Site Work</li>
              <li>Underground Utilities</li>
            </ul>
          </div>

          <div className="mb-12 md:mb-0 pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
            <h2 className="text-2xl font-extrabold tracking-wider mb-6">
              SPECIALIZED SERVICES
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pending info.. We can include other services</li>
            </ul>
          </div>

          <div className="pt-12 border-t border-gray-300 md:border-t-0 md:pt-0 md:pl-8 md:border-l flex items-center justify-center">
             {/* Logo Placeholder */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Hirani</h2>
                <p className="text-xl text-gray-600">Constructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;