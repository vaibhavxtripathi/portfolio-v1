import React from "react";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const Stacks = ({name,desc,svg}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className="bg-[#1E3A5F] w-full h-28 lg:p-4 xs:p-3 flex items-center gap-5 rounded-lg shadow-md">
      <div className="w-10 h-10">
        <StackIcon name={svg} />
      </div>
      <div className="flex-1">
        <h1 className="text-lg text-white font-semibold mb-1">{name}</h1>
        <h1 className="text-sm text-gray-300">
          {desc}
        </h1>
      </div>
    </motion.div>
  );
};

export default Stacks;
