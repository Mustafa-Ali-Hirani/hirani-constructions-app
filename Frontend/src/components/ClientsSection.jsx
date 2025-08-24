import React from 'react';

// The data array is correct. The structure with lg:row-span-2 is what creates the layout.
const clients = [
  { src: '/Logos/dreamset.png',    alt: 'DreamSeat',           className: '' },
  { src: '/Logos/nealelectric.png', alt: 'Neal Electric',       className: '' },
  { src: '/Logos/redy.png',         alt: 'Redy Castle Logo',    className: 'lg:row-span-2' },
  { src: '/Logos/skanska.png',      alt: 'Skanska',             className: 'lg:row-span-2' },
  { src: '/Logos/hensel.png',       alt: 'Hensel Phelps',       className: 'lg:row-span-2' },
  { src: '/Logos/shimmick.png',     alt: 'Shimmick',            className: '' },
  { src: '/Logos/clark.png',        alt: 'Clark Construction',  className: '' },
];

function ClientsSection() {
  return (
    <section className="bg-[#283061] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Header Text */}
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-300 tracking-widest">
            OUR CLIENTS
          </p>
          <h2 className="mt-4 font-medium text-white">
            We believe that every customer is a valuable ally
          </h2>
        </div>

        {/* 
          THE FIX IS HERE: I've added `lg:items-start`.
          This class tells the grid to align items to the top on large screens,
          preventing the shorter boxes from stretching vertically to match the tall ones.
        */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-4 lg:gap-6 lg:items-start">
          {clients.map((client) => (
            <div 
              key={client.alt} 
              className={`bg-white rounded-xl p-6 flex items-center justify-center transition hover:shadow-xl hover:-translate-y-1 ${client.className}`}
            >
              <img 
                src={client.src} 
                alt={client.alt} 
                className="max-h-full max-w-full w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;