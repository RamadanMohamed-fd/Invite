import React from "react";
import "../problem/problem.css";
const M2 = (props) => {
  return (
    <div className=" relative ">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" "
      >
        <path
          d="M30.4414 22.5322C30.4414 26.6563 33.7845 29.9994 37.9086 29.9994C42.0327 29.9994 45.3758 26.6563 45.3758 22.5322"
          stroke={props.color}
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute top-0 right-0   "
      >
        <path
          d="M52.2677 36.0476C55.5912 32.5179 57.6278 27.7627 57.6278 22.5321C57.6278 11.6413 48.799 2.8125 37.9082 2.8125C27.0175 2.8125 18.1885 11.6413 18.1885 22.5321C18.1885 33.4228 27.0173 42.2516 37.908 42.2516C38.8975 42.2516 39.8699 42.1787 40.8201 42.0381"
          stroke={props.color}
          stroke-width="2"
          stroke-miterlimit="10"
          className=""
        />
      </svg>
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -mt-24 "
      >
        <path
          d="M68.3155 51.1254H52.8961V38.7298C52.8961 35.3953 50.1929 32.6919 46.8582 32.6919C43.5235 32.6919 40.8203 35.3951 40.8203 38.7298V74.2822L44.5225 80.3951H74.0614L77.8118 74.0925V60.6219C77.812 55.3771 73.5603 51.1254 68.3155 51.1254Z"
          stroke={props.color}
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M44.5225 80.3951V93.1875H74.0614V80.3951H44.5225Z"
          stroke={props.color}
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};

export default M2;
