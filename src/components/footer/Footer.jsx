import React, { useEffect } from "react";
import FooterLogo from "../svgs/FooterLogo";

const Footer = (props) => {
  const data = [
    { title: " Company", url: "#" },
    { title: "Collections", url: "#" },
    { title: "Curations", url: "#" },
    { title: "CraftPartner", url: "#" },
    { title: "Contact", url: "#" },
  ];
  const con_data = [
    { title: "Bhubaneswar, Odisha – India", sup: "Location" },
    { title: "+91 982-789-4737", sup: "Phone" },
  ];
  const d = new Date();
  let year = d.getFullYear();
  const handleValue = () => {
    props.linkValue("#");
  };
  return (
    <div
      onMouseEnter={handleValue}
      id="footer"
      className=" bg-[#343935] tracking-wide "
    >
      <div className=" pt-14 pb-10 w-[80%]   m-auto flex justify-center flex-col border-b-[2px] border-[#3f3f3f] text-white ">
        <div className="   m-auto flex flex-wrap  ">
          {data.map((d, i) => (
            <div
              key={i}
              className=" w-[310px]  max-sm:w-full relative under py-4 m-1"
            >
              <a href={d.url}>
                <p
                  data-aos="fade-right"
                  className=" text-[#C5A56F] text-sm text1 "
                >
                  0{i + 1}.
                </p>
                <h3
                  data-aos="fade-right"
                  className=" text-[45px]  duration-500 text opacity-80 max-sm:text-4xl"
                >
                  {d.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
        <div className=" w-full max-xl:flex-wrap max-xl:justify-start  flex items-start">
          <div className=" flex w-[110%] max-xl:flex-wrap   justify-between">
            {con_data.map((d, i) => (
              <div key={i} className="  relative under h-[100px] m-1 ">
                <p
                  data-aos="fade-right"
                  className=" text-[#C5A56F]  text-sm text1"
                >
                  {d.sup}
                </p>
                <h3
                  data-aos="fade-right"
                  title={d.sup}
                  className=" cursor-pointer text-[38px] text opacity-95 max-sm:text-3xl"
                >
                  {d.title}
                </h3>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            className=" xl:mt-[-105px] max-xl:pl-0  w-[30%] pl-28 "
          >
            <FooterLogo size="120" />
          </div>
        </div>
      </div>
      <div className=" pb-20 flex flex-wrap justify-between text-sm w-[80%] m-auto text1 text-white opacity-50 pt-2 ">
        <p>{year}© CraftIndika. Crafted with precision and engineering. </p>
        <p>Privacy Policy. Terms & Condition.</p>
      </div>
    </div>
  );
};

export default Footer;

// Location
// Phone
// Bhubaneswar, Odisha – India
// +91 982-789-4737
// 2023 © CraftIndika. Crafted with precision and engineering.
// Privacy Policy. Terms & Condition.
