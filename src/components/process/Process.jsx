import React, { useState, useEffect } from "react";

import ProcessLogo from "../svgs/ProcessLogo";
import M1 from "../svgs/M1";
import M2 from "../svgs/M2";
import M3 from "../svgs/M3";
import M4 from "../svgs/M4";
const Process = (props) => {
  const handleValue = () => {
    props.linkValue("#supported");
  };
  const text = [
    "Procure handmade Crafts using Virtual Clusters straight from Artisans",
    "Put in the IIMS and List the Products in our B2B Marketplace and enable Bulk Buy",
    "Have a faster reach worldwide with CaftPartners and get location specific data for AI Demand forecasting",
  ];
  return (
    <div
      id="process"
      className=" bg-white w-full py-20   border-t-2"
      onMouseEnter={handleValue}
    >
      <div className="lg:w-[79%] max-lg:w-[90%] m-auto text-center">
        <p
          data-aos="fade-down"
          className="text1 uppercase tracking-[.2em] font-thin text-[#C5A56F] text-[1.1rem]"
        >
          Process
        </p>
        <p
          data-aos="fade-up"
          className=" text text-[#343935] font-medium pb-9 leading-tight text-5xl "
        >
          Transparent Model
        </p>
      </div>
      <div className="text1  flex flex-wrap justify-between max-xl:justify-center max-sm:justify-center  items-start  lg:w-[73%] max-lg:w-[90%] h-max  m-auto  ">
        <div className="w-[550px]  flex flex-col sm:justify-start max-sm:justify-center max-sm:items-center ">
          <div className="w-[180px]  text-center flex flex-col justify-center items-center">
            <ProcessLogo size="25" />
            <p
              data-aos="fade-up"
              className=" text-[#8D3C37] opacity-90 text-[.9rem] pt-2 pb-[41px]"
            >
              {text[0]}
            </p>
            <span
              data-aos="fade-up"
              className=" max-sm:hidden bg-[#8D3C37] w-[1px] h-[70px]"
            ></span>
            <h4
              data-aos="fade-up"
              className=" text-[#343935] text-4xl font-semibold py-4 max-sm:py-0 text"
            >
              Artisans
            </h4>
          </div>
          <div className="  flex flex-col justify-center ">
            <div className="w-full flex max-sm:flex-col justify-start items-center sm:ml-5 sm:mt-[-80px]">
              <div
                data-aos="fade-up"
                className=" w-32 h-32 bg-[#343935] flex justify-center items-center"
              >
                <M3 color="white" />
              </div>
              <span
                data-aos="fade-up"
                className=" sm:w-10 max-sm:h-10 sm:h-[2px] max-sm:w-[2px] bg-[#343935] opacity-50 sm:mx-5 max-sm:my-3"
              ></span>
              <p
                data-aos="fade-up"
                className="sm:hidden  w-[150px] text-sm text-center text1 bg-white  text-[#343935] opacity-80"
              >
                Caters with Fair Wages, Welfare, Credit Support, Research Input
                and Many More
              </p>
              <span
                data-aos="fade-up"
                className="sm:hidden sm:w-10 max-sm:h-10 sm:h-[2px] max-sm:w-[2px] bg-[#343935] opacity-50 sm:mx-3 max-sm:my-3"
              ></span>
              <div
                data-aos="fade-up"
                className=" text text-3xl max-sm:text-2xl sm:w-72 max-sm:w-64 max-sm:h-64 sm:h-72 font-semibold tracking-wider bg-[#8D3C37] rounded-full text-white flex justify-center items-center"
              >
                CRAFTINDIKA©
              </div>
            </div>
            <div
              data-aos="fade-up"
              className=" ml-20 max-sm:hidden  mt-[-100px] flex flex-col justify-center "
            >
              <svg
                width="285"
                height="228"
                viewBox="0 0 403 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-sm:hidden"
              >
                <path
                  d="M402 116V227.5H0.5V0.5"
                  stroke="#0B3B3A"
                  stroke-dasharray="12 12"
                />
              </svg>
              <p
                data-aos="fade-up"
                className="  w-[200px] text-[14px] mb-10 text1 bg-white ml-14 mt-[-65px] text-[#343935] opacity-90"
              >
                CraftIndika gives fair wage, welfare and credit support as
                needed by artisans
              </p>
            </div>
          </div>
        </div>

        <div className="w-[210px] max-sm:full  flex justify-center items-end max-lg:items-center flex-col max-sm:flex-col-reverse ">
          <div className="  flex flex-col justify-center items-center  ">
            <div className="w-[150px]  text-center flex flex-col justify-center items-center">
              <ProcessLogo size="25" />
              <p
                data-aos="fade-up"
                className=" text-[#8D3C37] opacity-90 text-[.9rem] pt-2 pb-5"
              >
                {text[1]}
              </p>
              <span
                data-aos="fade-up"
                className=" bg-[#8D3C37] w-[1px] h-[70px] "
              ></span>
              <h4
                data-aos="fade-up"
                className=" text-[#343935] text-4xl font-semibold py-4 max-sm:py-0 text"
              >
                Business
              </h4>
            </div>
            <div className="   flex flex-col items-center justify-center ">
              <div className="w-full  sm:mt-[-10px] max-sm:mt-2 flex flex-col justify-center sm:mr-2 items-center ">
                <div
                  data-aos="fade-up"
                  className="  triangle-element bg-[#343935] opacity-80 flex justify-center items-end pb-3"
                >
                  <M4 color="white" />
                </div>
              </div>
              <div data-aos="fade-up">
                <svg
                  width="2"
                  height="150"
                  viewBox="0 0 2 228"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" max-sm:hidden my-4"
                >
                  <path
                    d="M1 227.5V0.5"
                    stroke="#0B3B3A"
                    stroke-dasharray="12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span
            data-aos="fade-up"
            className="sm:hidden h-12 my-5  w-[2px] bg-[#343935] opacity-50 "
          ></span>
          <p
            data-aos="fade-up"
            className="  w-[150px] text-[14px]   text-center text1 bg-white  text-[#343935] opacity-90"
          >
            Customers can buy authentic handicraft directly through our eCom or
            CraftPartners
          </p>
          <span
            data-aos="fade-up"
            className="sm:hidden h-12 my-5 w-[2px] bg-[#343935] opacity-50 "
          ></span>
        </div>

        <div className="w-[220px] max-sm:w-full  flex justify-center items-end max-xl:items-center flex-col max-sm:flex-col-reverse ">
          <div className="  flex flex-col justify-center items-center  ">
            <div className="w-[150px]  text-center flex flex-col justify-center items-center">
              <ProcessLogo size="25" />
              <p
                data-aos="fade-up"
                className=" text-[#8D3C37] opacity-90 text-[.9rem] pt-2 pb-5"
              >
                {text[2]}
              </p>
              <span
                data-aos="fade-up"
                className=" bg-[#8D3C37] w-[1px] h-[70px] "
              ></span>
              <h4
                data-aos="fade-up"
                className=" text-[#343935] text-4xl font-semibold py-4 max-sm:py-0 text"
              >
                Customer
              </h4>
            </div>
            <div className="   flex flex-col items-center justify-center ">
              <div className="w-full   flex flex-col justify-center sm:mr-2 items-center ">
                <div
                  data-aos="fade-up"
                  className="  w-32 h-32 bg-[#0B3B3A] flex justify-center items-center"
                >
                  <M2 color="white" />
                </div>
              </div>

              <div data-aos="fade-up">
                {" "}
                <svg
                  width="2"
                  height="150"
                  viewBox="0 0 2 228"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" max-sm:hidden my-4"
                >
                  <path
                    d="M1 227.5V0.5"
                    stroke="#0B3B3A"
                    stroke-dasharray="12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span
            data-aos="fade-up"
            className="sm:hidden h-12 my-5  w-[2px] bg-[#343935] opacity-50 "
          ></span>
          <p
            data-aos="fade-up"
            className="  w-[150px] text-[14px]   text-center text1 bg-white  text-[#343935] opacity-90"
          >
            Have a reach of Customers preferring eCommerce and get global data
            for AI demand forecasting
          </p>
          <span
            data-aos="fade-up"
            className="sm:hidden h-12 my-5 w-[2px] bg-[#343935] opacity-50 "
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Process;
