import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
const ScrollSection = (props) => {
  return (
    <a
      href={props.href}
      className={` e  text-white top-[65%] ml-4 w-8 h-24 absolute right-4 max-[550px]:hidden flex flex-col items-center justify-center  `}
    >
      <div
        className={`w-4 h-6 mr-1 border-2   rounded-xl  text-[8px] flex justify-center items-center`}
      >
        <span className="  animate-bounce">|</span>
      </div>
      <p className="text-sm ">Explor More</p>
      <span className=" text-xl mt-1 ">
        <BsArrowDownShort />
      </span>
    </a>
  );
};

export default ScrollSection;
