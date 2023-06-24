import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollSection from "../scroll/ScrollSection";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./solutions.css";
import { Navigation } from "swiper";
import { data } from "./data";
import useWindowSize from "../useWindowSize";
import Aos from "aos";
import "aos/dist/aos.css";
const SolutiosCotaint = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  });
  const size = useWindowSize();
  let x = 3;
  if (size.width <= 1115 && size.width >= 840) {
    x = 2;
  } else if (size.width < 840) {
    x = 1;
  }
  return (
    <div className="flex sm:mr-16 flex-col max-sm:w-[95%]  w-[85%] group m-auto">
      <Swiper
        slidesPerView={x}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              key={item.id}
              className="flex flex-col items-start max-w-[350px]  m-auto "
            >
              <p
                data-aos="fade-right"
                className="text1 text-sm font-bold text-left   text-[#343935]"
              >
                0{item.id}
              </p>
              <p
                data-aos="fade-left"
                className="text font-bold text-4xl py-[1.8rem] text-[#343935]"
              >
                {item.title}
              </p>
              <div className=" min-h-[11rem] mb-6 border-black border-b-[1px] ">
                <p
                  data-aos="fade-right"
                  className=" text-[#343935] mr-2 mb-1 font-thin leading-[1.32rem] text1 text-left text-[.88rem]"
                >
                  {item.sup}
                </p>
              </div>
              <div className="max-w-[493px] max-h-[556px]">
                <img
                  data-aos="zoom-in"
                  src={item.image}
                  alt="Soluation"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="  z-20 flex  duration-500 w-full justify-between items-center">
        <div className=" hover:opacity-100 opacity-70 prev pt-4 duration-500 cursor-pointer">
          <svg
            width="40"
            height="40"
            viewBox="0 0 69 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="68"
              height="71.9999"
              rx="34"
              transform="matrix(-1 0 0 1 68.5 3.8147e-06)"
              fill="#C5A56F"
            />
            <path
              d="M44.5 16C44.5 16 40.5338 36.0179 24.5 35.8334M44.5 55.9999C44.5 55.9999 40.5338 35.982 24.5 36.1665"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="next pt-4 hover:opacity-100 opacity-70 duration-500 cursor-pointer">
          <svg
            width="40"
            height="40"
            viewBox="0 0 69 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="68"
              height="71.9999"
              rx="34"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0.5 71.9999)"
              fill="#C5A56F"
            />
            <path
              d="M24.5 55.9999C24.5 55.9999 28.4662 35.982 44.5 36.1665M24.5 16C24.5 16 28.4662 36.0179 44.5 35.8334"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SolutiosCotaint;
