import React from "react";
import Arrow from "./common/Arrow";
import Image from "next/image";
import FeatureHeader from "./common/FeatureHeader";

const About = () => {
  return (
    <div className="max-w-[1314px] pt-20 md:pt-44 mx-auto">
      {/* component feature name */}
      <FeatureHeader variant="black" title="About" position="end" />

      {/* header */}
      <div className="text-3xl md:text-[58px] lg:text-[78px] font-bold text-center mt-20">
        
        <h1>
          I've been
          <span className="bg-black text-white px-3 rounded-xl">
            Developing
          </span>{" "}
        </h1>
        <h1 className="mt-8">
          Websites since
          <span className="bg-black text-white px-3 rounded-xl"> 2013</span>
        </h1>
      </div>
      <p className="text-center w-[70%] mx-auto mt-10 text-lg">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other and recommend the best course of action.
      </p>

      <div className="mt-20 flex flex-col md:flex-row gap-10 items-center">
        <h2 className="text-[26px] font-bold md:w-1/4 text-center md:text-left">
        PREVIOUSLY WORKED ON
        </h2> 
        <div className="mt-10 w-3/4">
            <Image src="/companies.svg" alt="about" width={1060} height={217} />
        </div>
      </div>
    </div>
  );
};

export default About;
