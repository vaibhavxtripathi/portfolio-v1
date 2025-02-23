import React from "react";
import { FaCode } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { Button } from "../ui/button";

const Projects = ({ img, name, desc }) => {
  return (
    <div className="text-center p-6">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={`src/assets/${img}.png`}
          className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto object-contain rounded-lg"
        />
      </div>

      {/* Project Name & Description */}
      <h1 className="text-xl md:text-2xl font-semibold mt-4">{name}</h1>
      <h1
        className={`text-md mt-2 ${
          name === "Picker Wheel" ? "text-black" : "text-gray-300"
        }`}
      >
        {desc}
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-4">
        <Button variant="default" size="lg">
          <SlGlobe />
        </Button>
        <Button variant="secondary" size="lg">
          <FaCode />
        </Button>
      </div>
    </div>
  );
};

export default Projects;
