import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      data-cursor="contact"
      id="contact"
      className="w-full max-w-6xl mx-auto mt-72 px-5 md:px-10 lg:px-16 relative"
    >
      <h1 className="text-4xl xs:text-[70px] xs:-top-10 sm:text-6xl md:text-7xl lg:text-8xl font-[650] absolute lg:-top-20">
        Say hi.
      </h1>

      <div
        className="lg:p-10 bg-[#0e647a] w-full min-h-[20rem] flex flex-col
      xs:p-4 xs:pt-7"
      >
        <div className="flex-1 text-center sm:text-left xs:mt-3 lg:mt-12">
          <h1 className="text-white text-2xl xs:mb-4 xs:text-xl sm:text-xl">
            Contact Me
          </h1>
          <h1 className="text-white font-semibold text-2xl lg:text-left xs:text-center xs:text-[22px] sm:text-xl lg:text-4xl xs:mt-3 ">
            vaibhavxtripathi@email.com
          </h1>
          <hr className="w-[50%] sm:w-[20%] xs:w-[30%] border-[1.5px] lg:mx-0 xs:mx-auto my-4 xs:mt-8 lg:mt-6" />
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-10 mt-5 sm:mt-10">
            <div className="flex items-center gap-2 xs:mt-2 lg:-mt-2">
              <FaLocationDot color="white" size="17" />
              <h1 className="text-white font-light text-lg ">Based in India</h1>
            </div>
          </div>
        </div>
        <div className="flex xs: justify-center lg:justify-end  lg:absolute lg:right-28 lg:top-[45%] gap-5 sm:mt-0">
          <a href="https://github.com/vaibhavxtripathi" target="_blank">
            <IoLogoGithub color="white" size="40" />
          </a>
          <a href="https://instagram.com/vaibhavxtripathi" target="_blank">
            <FaInstagram color="white" size="40" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavxtripathi/"
            target="_blank"
          >
            <FaLinkedin color="white" size="40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
