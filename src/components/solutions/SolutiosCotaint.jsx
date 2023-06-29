import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./solutions.css";
import { Autoplay, Navigation } from "swiper";
import { data } from "./data";
const SolutiosCotaint = () => {
  return (
    <div className="flex   flex-col relative max-sm:w-[95%] overflow-hidden max-h-[100vh]  w-[82%] group m-auto">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              key={item.id}
              className="flex flex-col items-start max-w-[350px]  m-auto "
            >
              <p
                data-aos="fade-up"
                className="text1 text-sm font-bold text-left   text-[#343935]"
              >
                0{item.id}
              </p>
              <p
                data-aos="fade-up"
                className="text font-bold h-[130px] w-full text-start max-[400px]:text-3xl text-4xl py-[1.8rem]  text-[#343935]"
              >
                {item.title}
              </p>
              <div className=" min-h-[7rem] mb-4 border-black border-b-[1px] ">
                <p
                  data-aos="fade-right"
                  className=" text-[#343935] mr-2 mb-1 font-thin leading-[1.32rem] text1 text-left text-[.88rem]"
                >
                  {item.sup}
                </p>
              </div>
              <div className=" h-[350px] cursor-pointer ">
                <img src={item.image} alt="Soluation" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="  z-20 flex absolute top-[65%] max-sm:top-[90%]  duration-500 w-full justify-between max-sm:justify-center items-center">
        <div className=" hover:opacity-100 -translate-x-24  group-hover:sm:translate-x-0 opacity-70 prev pt-4 duration-700 cursor-pointer">
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
        <div className="next pt-4 hover:opacity-100 translate-x-24  group-hover:sm:translate-x-0 opacity-70 duration-700 cursor-pointer">
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
