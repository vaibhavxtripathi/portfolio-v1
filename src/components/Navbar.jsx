import React from "react";

const Navbar = () => {
  return (
    <div className="z-[3000] border-[1px] border-gray-500 w-max mx-auto mt-5 p-3 px-5 rounded-full backdrop-filter backdrop-blur-xl sticky top-5 xs:sticky xs:top-5">
      <ul className="flex gap-7 font-medium">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
