import React from "react";
import { Button } from "./ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div  className="w-full max-w-[75rem] mx-auto px-6 sm:px-12 lg:px-32 mt-20 flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
      <div className="flex-1 text-center sm:text-left">
        <h1  id = "hero" className="text-lg m-2">Hi, I'm</h1>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[630] leading-tight">
          Vaibhav <br /> Tripathi
        </h1>
        <h1 className="mt-6 mx-2 text-lg sm:text-xl">An Engineering Undergraduate</h1>
        <div className="flex flex-col sm:flex-row gap-5 mx-2 mt-6 justify-center sm:justify-start">
          <Button variant="default" size="lg">
            My Resume <MdOutlineArrowOutward />
          </Button>
          <Button variant="outline" size="lg">Contact Me</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center sm:justify-end">
        <img
          src="https://avatars.githubusercontent.com/u/144479603?s=400&u=90f5b200e86857e9112c50c6786ba7a37c620429&v=4"
          width={250}
          height={250}
          className="w-40 xs:w-52 sm:w-52 lg:w-64 h-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
