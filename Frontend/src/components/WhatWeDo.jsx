import React from "react";

function WhatWeDo() {
  return (
    <section className="px-10 py-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left: Title & Description */}
      <div className="space-y-8">
        <h2 className="text-5xl font-extrabold tracking-tight text-black">
          WHAT WE DO
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Experience seamless project management and innovative structural
          engineering with Hirani Constructions. We expertly handle every aspect
          of your construction project, ensuring exceptional quality and results
          that exceed expectations.
        </p>
        <button className="flex items-center gap-2 bg-[#1c1c5a] text-white px-6 py-3 rounded-full border-2 border-[#1c1c5a] hover:bg-white hover:text-[#1c1c5a] transition font-medium">
          OUR SERVICES ↘
        </button>
      </div>

      {/* Right: Services List */}
      <div className="space-y-8 text-gray-800">
        {[
          {
            title: "Dreaming of a custom-built masterpiece?",
            desc: "Our design/build services transform your vision into reality, and our expertise in new construction unlocks exciting new possibilities.",
          },
          {
            title: "Want to breathe new life into your space?",
            desc: "Our renovation services add flair and functionality to any structure. And when it’s time to clear the way for something new, our demolition services ensure a smooth transition.",
          },
          {
            title: "Underground utilities?",
            desc: "We manage every project with precision and specialize in crafting captivating spaces that make your business stand out. Trust us to elevate your commercial presence!",
          },
        ].map((item, index) => (
          <div key={index} className="pb-4 border-b last:border-none">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
