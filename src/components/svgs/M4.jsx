import React from "react";

const M4 = (props) => {
  return (
    <div>
      <svg
        width="70"
        height="70"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_332_5931"
          className="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="96"
          height="96"
        >
          <path d="M0 7.62939e-06H96V96H0V7.62939e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_332_5931)">
          <path
            d="M87.5625 53.2245V87.5625H8.4375V53.2245"
            stroke={props.color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M70.5937 43.4531C70.5937 49.6922 75.6516 54.75 81.8906 54.75C88.1297 54.75 93.1875 49.6922 93.1875 43.4531V40.6406L81.9375 8.4375H14.0625L2.8125 40.6406V43.4531C2.8125 49.6922 7.87031 54.75 14.1094 54.75C20.3484 54.75 25.4062 49.6922 25.4062 43.4531"
            stroke={props.color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M48 8.4375V43.4531C48 49.6922 53.0578 54.75 59.2969 54.75C65.5359 54.75 70.5937 49.6922 70.5937 43.4531V40.6406L64.9687 8.4375"
            stroke={props.color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M31.0312 8.4375L25.4062 40.6406V43.4531C25.4062 49.6922 30.4641 54.75 36.7031 54.75C42.9422 54.75 48 49.6922 48 43.4531"
            stroke={props.color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M2.8125 40.6406H93.1875"
            stroke={props.color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default M4;
