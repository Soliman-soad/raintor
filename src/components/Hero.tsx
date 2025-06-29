import React from "react";
import SwapButton from "./common/SwapButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1314px] mx-auto mt-44">
      <div className="text-[78px] font-bold">
        <h1>
          Trusted{" "}
          <span className="bg-black text-white px-3 rounded-xl">Partner</span>{" "}
          for{" "}
        </h1>
        <h1 className="mt-8">
          Your Website{" "}
          <span className="bg-black text-white px-3 rounded-xl"> Develop.</span>
        </h1>
      </div>

      <div className="flex gap-[220px] items-center mt-20">
        <div className="flex gap-16">
          <h1 className="rotate-90 inline-block -ml-[90px]">@williamrey</h1>
          <div className="flex justify-start items-center gap-4 flex-col-reverse">
            <div
            className="ml-4 border-l border-2 h-[45px] inline"
            />
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={19}
              height={19}
            />
            <Image src="/icons/ig.svg" alt="ig" width={19} height={19} />
            <Image
              src="/icons/twitter.svg"
              alt="twitter"
              width={19}
              height={19}
            />
          </div>
        </div>
        <div>
          <p className="text-lg leading-8">
            Building the worlds best marketing websites for over a decade.{" "}
            <br /> Your trusted partner for strategy, design, and dev.
          </p>
          <div className="mt-10">
            <SwapButton padding={4} text="Schedule a Call" icon="call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
