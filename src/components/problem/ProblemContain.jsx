import React, { useEffect } from "react";
import M1 from "../svgs/M1";
import M2 from "../svgs/M2";
import M3 from "../svgs/M3";
import M4 from "../svgs/M4";
import AOS from "aos";
import "aos/dist/aos.css";
const ProblemContain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const data = [
    {
      title: "Artisans",
      sup: "Artisans face numerous challenges, including lack of sales support, inadequate compensation, minimal research input, and insufficient access to credit facilities.",
      svg: <M3 color="#c5a56f" />,
    },
    {
      title: "Customers",
      sup: "Artisans face numerous challenges, including lack of sales support, inadequate compensation, minimal research input, and insufficient access to credit facilities.",
      svg: <M2 color="#c5a56f" />,
    },
    {
      title: "Business",
      sup: "Artisans face numerous challenges, including lack of sales support, inadequate compensation, minimal research input, and insufficient access to credit facilities.",
      svg: <M4 color="#c5a56f" />,
    },
    {
      title: "Art and Culture",
      sup: "Artisans face numerous challenges, including lack of sales support, inadequate compensation, minimal research input, and insufficient access to credit facilities.",
      svg: <M1 color="#c5a56f" />,
    },
  ];
  return (
    <>
      {data.map((d, i) => (
        <div
          key={i}
          className="flex flex-col justify-around  mt-16 gap-y-1 items-center max-w-[500px] "
        >
          <div data-aos="fade-up" className="">
            {d.svg}
          </div>
          <h3 data-aos="fade-up" className="text text-white text-4xl p-4">
            {d.title}
          </h3>
          <p
            data-aos="fade-up"
            className="text text-white text-[1.4rem] p-1 leading-7"
          >
            {d.sup}
          </p>
        </div>
      ))}
    </>
  );
};

export default ProblemContain;
