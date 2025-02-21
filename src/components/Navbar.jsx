import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-[2px] border-gray-200 w-max mx-auto mt-5 p-3 px-5 rounded-full backdrop-filter backdrop-blur-sm sticky top-0">
      <ul className="flex gap-7 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
