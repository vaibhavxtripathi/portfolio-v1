import React from "react";
import { Button } from "./ui/button";
import { PiShootingStar } from "react-icons/pi";
const About = () => {
  return (
    <div className="w-auto mx-auto mt-[200px] px-48">
      <div>
        <h1 className="text-8xl font-[600] text-left absolute -mt-[75px]">
          About Me.
        </h1>
      </div>
      <div className="flex bg-[#bdc7b5] w-full h-[25rem] text-white">
        <div className="flex-1 p-10 text-black">
          <h1 className="text-xl">Hi</h1>
          <h1 className="text-2xl font-semibold">I am VXTR.</h1>
          <p className="text-lg text-gray-600 mt-3">
            I like building{" "}
            <span className="text-black font-[500] bg-[#C7B5C0]">
              Interactive Websites
            </span>{" "}
            that will keep the users engaging.<br></br> Currently pursuing my{" "}
            <span className="text-black font-[500] bg-[#C7B5C0]">
              B.Tech in IT
            </span>{" "}
            at ABES Engineering College in 2nd year.<br></br>
            Passionate about building dynamic web applications using the power
            of{" "}
            <span className="text-black font-[500] bg-[#C7B5C0]">
              MERN stack.
            </span>
          </p>
          <h1 className="text-lg my-3 font-semibold">
            Looking for a frontend/Full stack Developer ?
          </h1>
          <div className="mt-3">
            <Button>
              Hire Me <PiShootingStar />
            </Button>
          </div>
        </div>
        <div className="">
          <img
            src="https://avatars.githubusercontent.com/u/144479603?s=400&u=90f5b200e86857e9112c50c6786ba7a37c620429&v=4"
            // width={250}
            // height={250}
            // className="my-14"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
