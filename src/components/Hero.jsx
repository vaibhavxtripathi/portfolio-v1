import React from "react";
import { Button } from "./ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex gap-16 mt-20 w-fit m-auto">
      <div>
        <h1 className="text-lg m-2">Hi, I'm</h1>
        <h1 className="text-7xl font-[630]">
          Vaibhav <br></br>Tripathi
        </h1>
        <h1 className="mt-6 mx-2 text-xl">An Engineering Undergraduate </h1>
        <div className="flex gap-5 mx-2 mt-6">
          <Button variant="default" size="lg">
            My Resume <MdOutlineArrowOutward />
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/144479603?s=400&u=90f5b200e86857e9112c50c6786ba7a37c620429&v=4"
          width={250}
          height={250}
          className="my-14"
        />
      </div>
    </div>
  );
};

export default Hero;
