import React from "react";
import { Button } from "./ui/button";
import { PiShootingStar } from "react-icons/pi";

const About = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-48 px-5 md:px-10 lg:px-16 relative">
      {/* Title (Absolute Positioning) */}
      <h1
        id="about"
        className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20"
      >
        About.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row bg-[#bdc7b5] w-full min-h-[25rem] text-white mt-16 p-6">
        {/* Text Section (Now Below Image on Small Screens) */}
        <div className="flex-1 p-6 text-black">
          <h1 className="text-xl">Hi</h1>
          <h1 className="text-2xl font-semibold">I am VXTR.</h1>
          <p className="text-lg text-gray-700 mt-3">
            I like building{" "}
            <span className="text-black font-medium bg-[#C7B5C0] p-1 rounded-md">
              Interactive Websites
            </span>{" "}
            that keep users engaged.
            <br /> Currently pursuing my{" "}
            <span className="text-black font-medium bg-[#C7B5C0] p-1 rounded-md">
              B.Tech in IT
            </span>{" "}
            at ABES Engineering College (2nd year).
            <br />
            Passionate about building dynamic web applications using the power
            of{" "}
            <span className="text-black font-medium bg-[#C7B5C0] p-1 rounded-md">
              MERN stack.
            </span>
          </p>
          <h1 className="text-lg mt-3 font-semibold">
            Looking for a Frontend/Full Stack Developer?
          </h1>
          <div className="mt-3 xs:mt-5 xs:flex xs:justify-center lg:block">
            <Button>
              Hire Me <PiShootingStar />
            </Button>
          </div>
        </div>

        {/* Image Section (Moves to Top on Mobile) */}
        <div className="flex justify-center items-center p-4">
          <img
            src="https://avatars.githubusercontent.com/u/144479603?s=400&u=90f5b200e86857e9112c50c6786ba7a37c620429&v=4"
            className="w-48 h-48 xs:w-56 xs:h-56  sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
