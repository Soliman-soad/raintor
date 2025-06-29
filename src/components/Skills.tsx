import React from "react";
import Arrow from "./common/Arrow";
import Image from "next/image";

const Skills = () => {
    const skills = [
        {
            name: "HTML & CSS",
            description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: "/icons/react.svg"
        },
        {
            name: "Javascript",
            description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: "/icons/react.svg"
        },
        {
            name: "Webflow",
            description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
            icon: "/icons/react.svg"
        }
    ]
  return (
    <div className="max-w-[1440px] mt-44 mx-auto text-white bg-black py-20 px-10 rounded-[40px]">
      {/* component feature name */}
      <div className="flex items-center">
        <Arrow
          variant="white-arrow"
          className="-rotate-90 border rounded-full inline-flex w-10 h-10 items-center justify-center"
          width={12}
          height={12}
        />
        <h4 className="border rounded-full px-4 py-2 inline-block">
          Why Choose me
        </h4>
      </div>

      {/* header */}
      <div className="flex gap-16 items-center mt-10">
        <div className="w-1/2">
          <div>
            <h1 className="text-[58px] font-bold">
              My Extensive List of Skills
            </h1>
          </div>
        </div>
        <div className="w-1/2">
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
      <div className="flex gap-10 mt-20">
        {
            skills.map((skill, index) => (
                <div key={index} className="inline-block hover:rotate-12 transition-all duration-300 cursor-pointer m-8">
                    <div>
                        <Image src={skill.icon} alt={skill.name} width={97} height={99} />
                    </div>
                    <h1 className="text-[24px] font-bold mt-10">{skill.name}</h1>
                    <p className="text-[16px] mt-2">{skill.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Skills;
