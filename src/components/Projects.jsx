import React from "react";

const Projects = () => {
  return (
    <div className="border-2 w-fit m-auto mt-[200px]">
      <div>
        <h1 className="text-7xl font-[600] text-left absolute -mt-[55px]">Projects.</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-[#E9C3B8] w-[25rem] h-[25rem] flex-1 min-w-[50%] sm:min-w-[25rem]"></div>
        <div className="bg-[#224A54] w-[25rem] h-[25rem] flex-1 min-w-[50%] sm:min-w-[25rem]"></div>
        <div className="bg-[#1A1A1A] w-full h-[25rem]"></div>
      </div>
    </div>
  );
};

export default Projects;
