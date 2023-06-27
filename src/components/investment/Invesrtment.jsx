import React, { useEffect } from "react";
import "./investment.css";

const Invesrtment = (props) => {
  const handleValue = () => {
    props.linkValue("#logos");
  };

  return (
    <div
      onMouseEnter={handleValue}
      id="invesrtment"
      className=" background   relative flex justify-center pt-[17%] max-sm:pt-[30%] pb-[7%] items-center"
    >
      <div
        data-aos="zoom-in"
        className="  xl:w-[77%] w-[90%]  m-auto background1   p-7 text-center"
      >
        <p className=" text text-[#343935] text-[46px] max-sm:text-[35px] max-[400px]:text-[29px] max-[400px]:px-0  leading-tight uppercase px-10 pt-5">
          “OUR INVESTMENT UPLIFTS THOUSANDS OF SKILLED CRAFTSMEN AND THEIR
          LIFELONG WORK”
        </p>
        <p className="text1 text-sm text-[#343935] px-[10rem] max-lg:px-[4rem] max-sm:px-4 py-5">
          At CraftIndika, we are dedicated to supporting thousands of skilled
          craftsmen and securing their livelihoods. Through our partnership
          initiatives, we empower artisans by providing them with sustainable
          income opportunities and a global platform to showcase their unique
          talents and exceptional handicrafts.
        </p>
      </div>
    </div>
  );
};

export default Invesrtment;
