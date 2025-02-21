import React from "react";
import Projects from "./projects/Projects";

const ProjectSection = () => {
  return (
    <div className="w-auto mx-auto mt-[200px] px-48">
      <div>
        <h1 className="text-8xl font-[600] text-left absolute -mt-[75px]">
          Projects.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-[#E9C3B8] w-[25rem] h-[25rem] flex-1 min-w-[50%] sm:min-w-[25rem]">
          <Projects img="picker-wheel" name="Picker Wheel" desc= 
          "A simple clone of the picker wheel website."/>
        </div>
        <div className="bg-[#224A54] w-[25rem] h-[25rem] flex-1 min-w-[50%] sm:min-w-[25rem] text-white">
        <Projects img="weather-app" name="Weather App" desc= 
          "A simple weather app website using JS."/>
        </div>
        <div className="bg-[#1A1A1A] w-full h-[25rem] text-white">
        <Projects img="savoney" name="Savoney" desc= 
          "A clone of the Savoney Expense Tracker website."/>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
