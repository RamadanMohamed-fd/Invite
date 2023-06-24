import React, { useEffect } from "react";
import "./header.css";
import Typewriter from "typewriter-effect";
import ScrollSection from "../scroll/ScrollSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Bar from "./Bar";
const Header = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleValue = () => {
    props.linkValue("#invite");
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="head"
      className=" w-full h-[110vh] duration-300  text-white header_container relative"
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
        <div className=" text-center  py-2 absolute max-w-[1200px] top-[57%] translate-y-[-50%] min-h-[400px]  px-20 max-sm:px-8  ">
          <p
            data-aos="fade-up"
            className="header_text xl:text-9xl text-8xl max-[840px]:text-[82px]
           max-[530px]:text-[70px] max-[450px]:text-[65px]  max-[400px]:text-[60px]
            max-[313px]:text-[54px] font-thin "
          >
            Invest in a priceless culture and your worthy future
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
