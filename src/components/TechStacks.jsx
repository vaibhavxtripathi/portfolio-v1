import React from "react";
import Stacks from "./helper/Stacks";

const TechStacks = () => {
  return (
    <div data-cursor="stacks" className="w-full max-w-6xl mx-auto mt-72 px-5 md:px-10 lg:px-16 relative">
      {/* Title  */}
      <div>
        <h1
          id="stacks"
          className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20"
        >
          Stacks.
        </h1>
      </div>

      {/* Stacks  */}
      <div className="p-6 bg-[#102A43] w-full min-h-[32rem] xs:py-10 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-8 xs:gap-6  w-full mx-5">
          {/* Left Column */}
          <div className="flex flex-col lg:gap-8 xs:gap-6 justify-center">
            <Stacks
              name="React"
              desc="A JavaScript library for building fast and scalable user interfaces."
              svg="reactjs"
            />

            <Stacks
              name="Tailwind"
              desc="A utility-first CSS framework for rapid and responsive UI design."
              svg="tailwindcss"
            />
            <Stacks
              name="Figma"
              desc="A cloud-based design tool for UI/UX prototyping and real-time collaboration."
              svg="figma"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:gap-8 xs:gap-6 justify-center">
            <Stacks
              name="JavaScript"
              desc="A dynamic programming language for interactive web development."
              svg="js"
            />

            <Stacks
              name="Git"
              desc="A distributed version control system for efficient code management."
              svg="git"
            />
            <Stacks
              name="Java"
              desc="A versatile language used for web, mobile, and enterprise applications."
              svg="java"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
