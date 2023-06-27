import React, { useEffect } from "react";
import ProblemContain from "./ProblemContain";

const Problem = (props) => {
  const handleValue = () => {
    props.linkValue("#solutions");
  };

  return (
    <div
      id="problem"
      className=" bg-[#8D3C37] w-full relative text-center pt-20 pb-14  "
      onMouseEnter={handleValue}
    >
      <h3
        data-aos="fade-down"
        className=" text-[#C5A56F] text1 text-xl tracking-widest"
      >
        PROBLEMS
      </h3>
      <p data-aos="fade-up" className="text-white text text-[2.85rem]">
        What are the gaps in market?
      </p>
      <div className="  flex w-[80%] pb-40 max-[400px]:gap-y-24  max-sm:w-[90%]   justify-around m-auto items-center flex-wrap ">
        <ProblemContain />
      </div>
      <div className=" pb-[4rem] flex flex-col justify-center items-center ">
        <p data-aos="fade-up" className="text-white text text-[2.85rem] ">
          Untapped Handicrafts Market
        </p>
        <span
          data-aos="fade-up"
          className=" text text-[15px] text-white px-10 "
        >
          We are targeting an untapped market potential in India that has a
          great cultural impact
        </span>
      </div>

      <div className="text flex   justify-evenly flex-wrap w-[87%]  pr-[65px] max-md:pr-0  mb-20 m-auto items-start">
        <div className=" text-white  py-5">
          <span
            data-aos="fade-up"
            className=" text-[7.2rem] sm:block leading-[7.5rem] pr-2  max-sm:text-5xl"
          >
            $680
          </span>
          <span
            data-aos="fade-up"
            className="text-[7.2rem] leading-[7.5rem]  max-sm:text-5xl"
          >
            billion
          </span>
          <p
            data-aos="fade-up"
            className=" text-4xl leading-[5rem] max-sm:text-3xl max-sm:pt-2 "
          >
            Total Market Cap
          </p>
        </div>
        <div data-aos="fade-up" className=" py-5  ">
          <svg
            width="160"
            height="127"
            viewBox="0 0 212 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute max-sm:w-[135px] max-sm:ml-[135px] max-sm:mt-[26.5px]  ml-[141px] mt-[21px]"
          >
            <path
              d="M211.815 173.015C210.66 138.156 200.883 104.127 183.356 73.9723C165.83 43.8176 141.102 18.4777 111.385 0.219816L0.930664 180L211.815 173.015Z"
              fill="#C5A56F"
            />
          </svg>
          <svg
            width="295"
            height="295"
            viewBox="0 0 423 422"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" animate-pulse duration-5000 hover:animate-none max-sm:w-[270px]"
          >
            <mask id="path-1-inside-1_332_5988" fill="white">
              <path d="M322.343 31.1941C282.299 6.60485 235.193 -3.91383 188.494 1.30568C141.794 6.5252 98.1727 27.1842 64.5461 60.0073C30.9194 92.8305 9.21163 135.939 2.86439 182.499C-3.48284 229.059 5.8937 276.406 29.5074 317.032C53.1212 357.658 89.6207 389.24 133.219 406.769C176.818 424.298 225.02 426.772 270.184 413.799C315.349 400.826 354.89 373.147 382.539 335.152C410.188 297.157 424.363 251.02 422.816 204.054L211.931 211L322.343 31.1941Z" />
            </mask>
            <path
              d="M322.343 31.1941C282.299 6.60485 235.193 -3.91383 188.494 1.30568C141.794 6.5252 98.1727 27.1842 64.5461 60.0073C30.9194 92.8305 9.21163 135.939 2.86439 182.499C-3.48284 229.059 5.8937 276.406 29.5074 317.032C53.1212 357.658 89.6207 389.24 133.219 406.769C176.818 424.298 225.02 426.772 270.184 413.799C315.349 400.826 354.89 373.147 382.539 335.152C410.188 297.157 424.363 251.02 422.816 204.054L211.931 211L322.343 31.1941Z"
              stroke="white"
              stroke-width="8"
              mask="url(#path-1-inside-1_332_5988)"
            />
          </svg>
        </div>
        <div className=" ">
          <p data-aos="fade-up" className=" text-[#C5A56F] text-5xl font-bold">
            $4.35 billion
          </p>
          <p
            data-aos="fade-up"
            className="text-white text-4xl leading-loose font-medium"
          >
            India’s Export
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
