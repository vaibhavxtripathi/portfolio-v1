import React from "react";
import { FaCode } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Projects = ({ img, name, desc, href1, href2 }) => {
  return (
    <div className="text-center p-6 mt-10">
      {/* Image */}
      <div className="flex justify-center">
        <motion.img
          src={`${img}`}
          className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto object-contain rounded-lg"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        ></motion.img>
      </div>

      {/* Project Name & Description */}
      <div className="mt-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">{name}</h1>
        <h1
          className={`text-md mt-3 ${
            name === "Picker Wheel" ? "text-black" : "text-gray-300"
          }`}
        >
          {desc}
        </h1>

        <div className="flex lg:gap-5 xs:gap-4 justify-center p-4 mt-3">
          <h1
            className={`xs:p-2 xs:text-sm lg:p-3 border-[1.8px] rounded ${
              name === "Picker Wheel" ? "border-gray-900" : "border-gray-300"
            }
        text-semibold ${
          name === "Picker Wheel" ? "text-black" : "text-gray-100"
        }
        `}
          >
            HTML
          </h1>

          <h1
            className={`xs:p-2 xs:text-sm lg:p-3 border-[1.8px] rounded ${
              name === "Picker Wheel" ? "border-gray-900" : "border-gray-300"
            }
        text-semibold ${
          name === "Picker Wheel" ? "text-black" : "text-gray-100"
        }
        `}
          >
            CSS
          </h1>

          <h1
            className={`xs:p-2 xs:text-sm lg:p-3 border-[1.8px] rounded ${
              name === "Picker Wheel" ? "border-gray-900" : "border-gray-300"
            }
        text-semibold ${
          name === "Picker Wheel" ? "text-black" : "text-gray-100"
        }
        `}
          >
            JavaScript
          </h1>

          <h1
            className={`xs:p-2 xs:text-sm lg:p-3 border-[1.8px] rounded ${
              name === "Picker Wheel" ? "border-gray-900" : "border-gray-300"
            }
        text-semibold ${
          name === "Picker Wheel" ? "text-black" : "text-gray-100"
        }
        `}
          >
            UI/UX
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-7 justify-center mt-4 mb-10">
          <a href={href1} target="_blank">
            <Button variant="default" size="xl">
              <SlGlobe />
            </Button>
          </a>
          <a href={href2} target="_blank">
            <Button variant="secondary" size="xl">
              <FaCode />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
