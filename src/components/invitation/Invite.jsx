import React, { useEffect } from "react";
import ScrollSection from "../scroll/ScrollSection";
import Aos from "aos";
import "aos/dist/aos.css";
import InviteSvg from "../svgs/InviteSvg";
const Invite = (props) => {
  const handleValue = () => {
    props.linkValue("#problem");
  };

  return (
    <div
      // data-aos="fade-up"
      id="invite"
      onMouseEnter={handleValue}
      className=" relative flex w-full bg-white opacity-100  flex-col justify-start items-center "
    >
      <div data-aos="fade-down" className="p-20  mt-2  text-lg">
        <InviteSvg />
      </div>
      <div
        data-aos="fade-up"
        className=" text-[#343935] px-10 -mt-8 mb-24 max-w-[1100px] text-center"
      >
        <h3 className=" text-[2.9rem] max-sm:text-[2rem] max-sm:font-normal font-medium text leading-[56px]">
          We invite you to invest in a system that streamlines the global
          journey of authentic handicrafts by connecting customers directly with
          products and artisans. Our community-based clusters facilitate organic
          growth for artisans while promoting market-centric creations, ensuring
          a seamless and efficient supply chain worldwide.
        </h3>
      </div>
    </div>
  );
};

export default Invite;
