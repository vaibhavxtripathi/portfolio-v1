import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id = "contact" className="w-full max-w-[90rem] mx-auto mt-48 px-5 sm:px-12 lg:px-[135px] relative">
      <h1 className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20">
        Say hi.
      </h1>
      <div className="flex flex-col items-center  sm:flex-row bg-[#0E647A] w-full mx-auto max-w-[75rem] h-auto sm:h-[280px] p-8 xs:p-12 sm:p-12">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-white text-2xl xs:text-xl sm:text-xl">
            Contact Me
          </h1>
          <h1 className="text-white font-semibold text-2xl xs:text-xl sm:text-xl lg:text-4xl xs:mt-3 ">
            vaibhavxtripathi@email.com
          </h1>
          <hr className="w-[50%] sm:w-[20%] xs:w-[30%] border-[1.5px] lg:mx-0 xs:mx-auto my-4" />
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-10 mt-5 sm:mt-10">
            <div className="flex items-center gap-2">
              <FaLocationDot color="white" size="17" />
              <h1 className="text-white font-light text-lg">Based in India</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-6 sm:mt-0">
          <a href="https://github.com/vaibhavxtripathi" target="_blank">
            <IoLogoGithub color="white" size="35" />
          </a>
          <a href="https://instagram.com/vaibhavxtripathi" target="_blank">
            <FaInstagram color="white" size="35" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavxtripathi/"
            target="_blank"
          >
            <FaLinkedin color="white" size="35" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
