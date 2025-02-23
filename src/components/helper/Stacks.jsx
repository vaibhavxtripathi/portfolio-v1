import React from "react";
import StackIcon from "tech-stack-icons";

const Stacks = ({name,desc,svg}) => {
  return (
    <div className="bg-[#1E3A5F] w-full p-4 flex items-center gap-3 rounded-lg shadow-md">
      <div className="w-10 h-10">
        <StackIcon name={svg} />
      </div>
      <div className="flex-1">
        <h1 className="text-lg text-white font-semibold">{name}</h1>
        <h1 className="text-sm text-gray-300">
          {desc}
        </h1>
      </div>
    </div>
  );
};

export default Stacks;
