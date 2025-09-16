import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-600 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Building Digital Products <br /> & Brands
          </h1>
          <p className="text-gray-300 text-lg">
            We create modern, responsive, and scalable web applications to help
            your business grow.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow">
            Get Started
          </button>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="http://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"
            alt="Mobile App"
            className="w-3/4 md:w-full h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
