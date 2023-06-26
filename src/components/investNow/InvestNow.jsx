import React, { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./Form";
const InvestNow = (props) => {
  const [showForm, setShowForm] = useState(false);
  const showHandler = () => {
    setShowForm(false);
  };
  const handleValue = () => {
    props.linkValue("#footer");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="investNow"
      onMouseEnter={handleValue}
      className=" flex bg-white justify-center items-center flex-col py-24 max-sm:py-12"
    >
      <h2
        //  data-aos="fade-down"
        className="text-[#343935]  inv_title text "
      >
        Invest in better
      </h2>
      <h2 data-aos="fade-up" className="text-[#C5A56F] inv_sup text2  ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("craft than just business").start();
          }}
          options={{
            cursor: "",
            delay: 140,
          }}
        />
      </h2>
      <p
        data-aos="fade-up"
        className="text-[#343935] text mb-10 text-lg max-sm:text-base w-[35%] max-md:w-[70%] max-sm:w-[90%] font-semibold text-center m-auto  "
      >
        “Become an investor for a brighter future for craftsmen and for a
        sustainable Future”
      </p>
      <div
        data-aos="fade-up"
        className=" cursor-pointer hover:bg-black duration-500 relative px-2 w-[135px] py-3  hover:text-white  hover:border-white rounded-3xl border-[1px] flex justify-between items-center border-[#343935] "
      >
        <a className="mx-2 text1 " onClick={() => setShowForm(true)}>
          Invest Now
        </a>
        <BsArrowDownShort className=" rotate-[-135deg] text-lg" />
      </div>
      {showForm && <Form show={showHandler} />}
    </div>
  );
};

export default InvestNow;
