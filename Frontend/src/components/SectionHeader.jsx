import React from "react";

function SectionHeader() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-black gap-4 md:gap-0">
        {/* Left Side */}
        <div className="text-left md:w-1/3">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold">
            Featured Projects
          </p>
          <p className="text-lg mt-1">
            We build long-lasting projects
          </p>
        </div>

        {/* Center Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center md:w-1/3">
          What We've Done
        </h2>

        {/* Right Button */}
        <div className="flex justify-end md:w-1/3">
          <button className="bg-[#1e1e5a] text-white text-[10px] uppercase tracking-wider px-6 py-2 rounded-full hover:bg-[#2c2c6e] transition flex items-center gap-1">
            All Projects
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;
