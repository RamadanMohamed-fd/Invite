import React, { useEffect } from "react";
import M1 from "../svgs/M1";
import M2 from "../svgs/M2";
import M3 from "../svgs/M3";
import M4 from "../svgs/M4";

const ProblemContain = () => {
  const data = [
    {
      title: "Artisans",
      sup: "A Community that is starving to death due to lack of  Product Market reach, Inadequate Compensation, Zero Research Input, and Insufficient access to credit facilities.",
      svg: <M3 color="#c5a56f" />,
    },
    {
      title: "Customers",
      sup: "Global Handicraft lovers that confront buying challenges like Lack of handicraft eStores, Authentic Handicrafts, Unreliable Logistics, Excessive Import Documentation and Zero Post Sales Support",
      svg: <M2 color="#c5a56f" />,
    },
    {
      title: "Technology",
      sup: "An Industry that is grappling with survival due to lack of implementing technology in Product onboarding and effective market reach,  resulting high cost, interrupted supply chain and authentication problems. ",
      svg: <M4 color="#c5a56f" />,
    },
    {
      title: "Art & Culture",
      sup: "The diverse tapestry of world art and handicrafts, honed over generations, are vanishing, leaving an irreplaceable void in our global heritage",
      svg: <M1 color="#c5a56f" />,
    },
  ];
  return (
    <>
      {data.map((d, i) => (
        <div
          key={i}
          className="flex flex-col   h-[300px]  mt-16 gap-y-1 items-center max-w-[500px] "
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
