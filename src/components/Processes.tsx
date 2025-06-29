import React from "react";
import FeatureHeader from "./common/FeatureHeader";
import Arrow from "./common/Arrow";

const Processes = () => {
  const processes = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];
  return (
    <div className="max-w-[1440px] mt-44 mx-auto text-white bg-black py-20 px-10 rounded-[40px]">
      {/* header */}
      <div className="flex items-center text-center">
        <FeatureHeader variant="white" title="Work Process" position="start" />
        <h1 className="text-[58px] font-bold text-center w-3/4">
          My Work Process
        </h1>
      </div>

      {/* card */}
      <div className="grid grid-cols-2 gap-10 mt-20">
        {processes.map((process, index) => (
          <div key={index} className=" group p-10 rounded-[40px] hover:rotate-12 transition-all duration-300 cursor-pointer hover:bg-[#C5FF41] hover:text-black">
            <div className="flex items-center justify-between">
            <h2 className="text-xl bg-[#C5FFEE] text-black px-4 py-2 rounded-full inline-block group-hover:bg-black group-hover:text-white">{process.title}</h2>
            <h4 className="flex gap-1">
                <Arrow variant="arrow" width={22} height={15} className="mt-0.5"/>
                <span className="text-base underline">Read More</span>
            </h4>
            </div>
            <p className="text-lg mt-4">{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Processes;
