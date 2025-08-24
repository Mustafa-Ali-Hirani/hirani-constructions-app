import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[75vh] flex items-center px-10"
      style={{
        backgroundImage: "url('/building-bg.png')", // ✅ From public folder
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Construction <br /> Service
        </h1>
        <p className="text-xl">
          29 Years of Excellence in Residential and Commercial Construction
        </p>
        <button
          onClick={() => alert("Quote Request Clicked!")}
          className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300"
        >
          Get a Quote <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
