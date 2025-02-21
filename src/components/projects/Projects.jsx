import React from "react";
import { FaCode } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { Button } from "../ui/button";

const Projects = ({img, name, desc}) => {
  return (
    <div className="p-12">
      <img src={`src/assets/${img}.png`} className="w-80 h-auto m-auto" />
      <h1 className="text-2xl font-regular text-center pt-5">{name}</h1>
      <h1 className="text-md font-regular text-center">
        {desc}
      </h1>
      <div className="flex gap-5 justify-center mt-5">
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
