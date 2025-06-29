import React from "react";
import Arrow from "./common/Arrow";
import Image from "next/image";
import FeatureHeader from "./common/FeatureHeader";

const Skills = () => {
  const skills = [
    {
      name: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: "/icons/react.svg",
    },
    {
      name: "Javascript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: "/icons/react.svg",
    },
    {
      name: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: "/icons/react.svg",
    },
  ];
  return (
    <div className="max-w-[1440px] mt-20 md:mt-44 mx-auto text-white bg-black py-20 px-10 md:rounded-[40px]">
      {/* component feature name */}
      <FeatureHeader variant="white" title="Why Choose me" position="start" />

      {/* header */}
      <div className="md:flex gap-16 items-center mt-10">
        <div className="md:w-1/2">
          <div>
            <h1 className="text-4xl md:text-[58px] font-bold">
              My Extensive List of Skills
            </h1>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <p className="text-right">
            Building the worlds best marketing Your trusted partner for
            strategy, design, and dev.
          </p>
          <div className="flex gap-4 mt-20 justify-end">
            <Arrow
              variant="white-arrow"
              className=" border rounded-full inline-flex w-[50px] h-[50px] items-center justify-center"
              width={24}
              height={24}
            />
            <Arrow
              variant="white-arrow"
              className="rotate-180 border rounded-full inline-flex w-[50px] h-[50px] items-center justify-center"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col md:flex-row gap-10 mt-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-block hover:rotate-12 transition-all duration-300 cursor-pointer m-8"
          >
            <div>
              <Image src={skill.icon} alt={skill.name} width={97} height={99} />
            </div>
            <h1 className="text-[24px] font-bold mt-10">{skill.name}</h1>
            <p className="text-[16px] mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
