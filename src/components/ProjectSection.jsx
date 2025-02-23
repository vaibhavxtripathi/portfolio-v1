import React from "react";
import Projects from "./helper/Projects";

const ProjectSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-48 px-5 md:px-10 lg:px-16 relative">
      {/* Title (Absolute for Overlapping Effect) */}
      <h1 id="projects" className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20">
        Projects.
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
        {/* First Row */}
        <div className="bg-[#E9C3B8] flex text-black justify-center items-center p-6 py-24">
          <Projects
            img="picker-wheel"
            name="Picker Wheel"
            desc="A simple clone of the picker wheel website."
          />
        </div>
        <div className="bg-[#224A54] text-white flex justify-center items-center p-6 py-24">
          <Projects
            img="weather-app"
            name="Weather App"
            desc="A simple weather app website using JS."
          />
        </div>

        {/* Second Row */}
        <div className="bg-[#1A1A1A] text-white flex justify-center items-center p-6 col-span-1 md:col-span-2 py-24">
          <Projects
            img="savoney"
            name="Savoney"
            desc="A clone of the Savoney Expense Tracker website."
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
