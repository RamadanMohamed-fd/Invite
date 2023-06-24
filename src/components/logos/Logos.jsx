import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Logos = (props) => {
  const handleValue = () => {
    props.linkValue("#investNow");
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="logos"
      className=" bg-white w-full border-b-2 pt-10 "
      onMouseEnter={handleValue}
    >
      <div className="flex xl:w-[60%] sm:w-[80%] max-sm:w-[80%] m-auto flex-wrap justify-center items-center ">
        <img
          data-aos="fade-right"
          src="/images/logos/1.jpg"
          className="w-[210px]  pb-8 px-14 "
        />
        <div className="flex max-[666px]:flex-col justify-center items-center py-4 ">
          <img
            data-aos="fade-down"
            src="/images/logos/2.jpg"
            className="w-[120px] px-2 max-[666px]:pb-1"
          />
          <img
            data-aos="fade-down"
            src="/images/logos/3.jpg"
            className="w-[200px] "
          />
        </div>
        <img
          data-aos="fade-left"
          src="/images/logos/4.jpg"
          className="w-[250px] p-10"
        />
        <img
          data-aos="fade-right"
          src="/images/logos/5.jpg"
          className="w-[236px] px-5 pt-5"
        />
        <img
          data-aos="fade-left"
          src="/images/logos/6.jpg"
          className="w-[250px] px-5 pt-5 "
        />
      </div>
    </div>
  );
};

export default Logos;
