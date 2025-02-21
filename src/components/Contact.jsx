import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-fit mx-auto mt-[200px]">
      <div>
        <h1 className="text-7xl font-[600] text-left absolute -mt-[55px]">
          Say hi.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-[#E9C3B8] w-[50rem] h-[280px]">
          <h1 className="pl-5 text-white font-medium text-2xl mt-16">
            Contact Me
          </h1>
          <h1 className="pl-5 text-white font-semibold text-4xl mt-1">
            vaibhavxtripathi@email.com
          </h1>
          <div className="flex align-middle gap-36 mt-24">
            <div className="flex gap-2 px-5">
              <div className="mt-1">
                <FaLocationDot color="white" size="17" />
              </div>
              <h1 className=" text-white font-light text-lg ">
                Based in India
              </h1>
            </div>
            <div className="flex gap-5 justify-center">
              <a href="https://github.com/vaibhavxtripathi" target="_blank">
                <IoLogoGithub color="white" size="35" />
              </a>
              <a href="https://instagram.com/vaibhavxtripathi" target="_blank">
                <FaInstagram color="white" size="35" />
              </a>
              <a href="https://www.linkedin.com/in/vaibhavxtripathi/" target="_blank">
                <FaLinkedin color="white" size="35" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
