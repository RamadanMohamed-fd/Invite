import React, { useEffect } from "react";
import "./header.css";

import Bar from "./Bar";
const Header = (props) => {
  const handleValue = () => {
    props.linkValue("#invite");
  };

  return (
    <div
      id="head"
      className=" w-full h-[125vh]  duration-300  text-white header_container relative"
      onMouseEnter={handleValue}
    >
      <nav className="h-[100px] w-[88%] m-auto  flex  items-center">
        <div
          data-aos="fade-right"
          className=" duration-500 cursor-pointer  text-2xl w-[58%] logo hover:text-[#c5a56f]"
        >
          CRAFTINDIKA©
        </div>
        <ul
          data-aos="fade-left"
          className="menu  w-fit   hidden   lg:flex justify-between items-center"
        >
          <li className="hover:text-[#c5a56f] px-4  duration-300">
            <a href="#">Company</a>
          </li>
          <li className="hover:text-[#c5a56f] px-4 duration-300">
            <a href="#">Collections</a>
          </li>
          <li className="hover:text-[#c5a56f] px-4 duration-300">
            <a href="#">Curations</a>
          </li>
          <li className="hover:text-[#c5a56f] px-4 duration-300">
            <a href="#">CraftPartner</a>
          </li>
          <li className="hover:text-[#c5a56f]">
            <a href="#">Connect</a>
          </li>
        </ul>
        <div className=" hidden max-lg:flex justify-end  w-[40%]  items-center">
          <Bar />
        </div>
      </nav>
      <div className=" flex justify-center  ">
        <div className=" text-center  py-2 absolute  top-[60%] max-sm:top-[55%] translate-y-[-50%] min-h-[400px]  px-16 max-sm:px-10  ">
          <p
            data-aos="fade-up"
            className="header_text  text-8xl max-[1040px]:text-[80px] max-[840px]:text-[70px]
           max-[570px]:text-[60px] max-[450px]:text-[55px]  max-[400px]:text-[50px]
            max-[313px]:text-[44px] font-thin "
          >
            Invest in World’s first Tech based Handicraft enabler, bringing
            revolution in the $680 Billion Untapped Market.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
