import React, { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import {
  MdOutlineCancel,
  MdConnectingAirports,
  MdOutlineCollectionsBookmark,
  MdAssuredWorkload,
} from "react-icons/md";
import { GiStoneCrafting } from "react-icons/gi";
import { BiHomeHeart } from "react-icons/bi";

const Bar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-end items-center">
      <span
        className={`  text-4xl cursor-pointer hover:text-[#c5a56f] duration-300 p-1 hover:rotate-45 ${
          show && "rotate-45 text-[#c5a56f]"
        }`}
        onClick={() => setShow(!show)}
      >
        <HiOutlineSquares2X2 />
      </span>
      <div
        className={`${
          show ? " scale-100 opacity-100" : " scale-0 opacity-0"
        }   fixed z-10 flex duration-500 text_header  items-start bg-white py-4 shadow-lg 
        text-[#222] bottom-0  w-full left-0  min-h-[150px] rounded-t-xl`}
      >
        <MdOutlineCancel
          onClick={() => setShow(!show)}
          className=" absolute hover:text-[#c5a56f] duration-300 right-0 m-4 bottom-0
          text-2xl cursor-pointer text-[#444343]"
        />

        <ul
          className={`menu text-xl flex flex-wrap w-full justify-around items-center`}
        >
          <li className="hover:text-[#c5a56f]  duration-300 px-4  m-2">
            <a href="#" className="flex flex-col justify-center items-center">
              <MdAssuredWorkload className=" text-4xl" />
              <span>Company</span>
            </a>
          </li>
          <li className="hover:text-[#c5a56f] duration-300 px-4 py-2 m-2">
            <a href="#" className="flex flex-col justify-center items-center">
              <MdOutlineCollectionsBookmark className=" text-4xl" />
              <span>Collections</span>
            </a>
          </li>
          <li className="hover:text-[#c5a56f] duration-300 px-4 py-2 m-2">
            <a href="#" className="flex flex-col justify-center items-center">
              <BiHomeHeart className=" text-4xl" />
              <span>Curations</span>
            </a>
          </li>
          <li className="hover:text-[#c5a56f] duration-300 px-4 py-2 m-2">
            <a href="#" className="flex flex-col justify-center items-center">
              <GiStoneCrafting className=" text-4xl" />
              <span>CraftPartner</span>
            </a>
          </li>
          <li className="hover:text-[#c5a56f] duration-300 px-4 py-2 m-2">
            <a href="#" className="flex flex-col justify-center items-center">
              <MdConnectingAirports className=" text-4xl" />
              <span>Connect</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bar;
