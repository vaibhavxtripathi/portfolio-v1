import React from "react";
import Projects from "./helper/Projects";
import MagneticHover from "./ui/useMagneticHover";

const ProjectSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-72 px-5 md:px-10 lg:px-16 relative">
      {/* Title (Absolute for Overlapping Effect) */}
      <h1
        id="projects"
        className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20 z-10"
      >
        Projects.
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
        {/* First Row */}
        <MagneticHover padding={100} disabled={false} magnetStrength={50}>
          <div className="bg-[#E9C3B8] flex text-black justify-center items-center p-6 min-h-[35rem]">
            <Projects
              img="picker-wheel"
              name="Picker Wheel"
              desc="A simple clone of the picker wheel website."
              href1="https://vaibhavxtripathi.github.io/picker-wheel"
              href2="https://github.com/vaibhavxtripathi/picker-wheel"
            />
          </div>
        </MagneticHover>

        <MagneticHover padding={100} disabled={false} magnetStrength={50}>
          <div className="bg-[#224A54] text-white flex justify-center items-center p-6 min-h-[35rem]">
            <Projects
              img="weather-app"
              name="Weather App"
              desc="A simple weather app website using JS."
              href1="https://vaibhavxtripathi.github.io/Weather-App"
              href2="https://github.com/vaibhavxtripathi/Weather-App"
            />
          </div>
        </MagneticHover>

        {/* Second Row */}

        <MagneticHover padding={100} disabled={false} magnetStrength={50}>
          <div className="bg-[#1A1A1A] text-white flex justify-center items-center p-6 col-span-1 md:col-span-2 py-18 lg:w-[200%] xs:w-[100%] min-h-[30rem]">
            <Projects
              img="savoney"
              name="Savoney"
              desc="A clone of the Savoney Expense Tracker website."
              href1="https://vaibhavxtripathi.github.io/savoney"
              href2="https://github.com/vaibhavxtripathi/savoney"
            />
          </div>
        </MagneticHover>
      </div>
    </div>
  );
};

export default ProjectSection;
