import React, { useEffect } from "react";
import "./solutions.css";
import SolutiosCotaint from "./SolutiosCotaint";

const Solutions = (props) => {
  const handleValue = () => {
    props.linkValue("#process");
  };
  return (
    <div
      id="solutions"
      className=" bg-white pt-[4.7rem] pb-[5rem]  "
      onMouseEnter={handleValue}
    >
      <div className="w-[79%] m-auto">
        <p
          // data-aos="fade-up"
          className="text1 tracking-[.2em] font-thin text-[#C5A56F] text-[1.5rem]"
        >
          solutions
        </p>
        <p
          // data-aos="fade-up"
          className=" text text-[#343935] font-medium pb-12 leading-tight text-5xl "
        >
          How does CraftIndika helps?
        </p>
      </div>
      <SolutiosCotaint />
    </div>
  );
};

export default Solutions;
