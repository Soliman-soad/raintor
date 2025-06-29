import React, { useEffect, useState } from "react";
import SwapButton from "./common/SwapButton";
import Image from "next/image";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="max-w-[1314px] mx-auto mt-28 px-2 md:px-0">
      <div className="text-[40px] md:text-[58px] lg:text-[78px] font-bold">
        <h1 className="md:w-11/12 md:leading-36">
          Trusted{" "}
          <span className="bg-black text-white px-3 rounded-xl">
            <span
              className={`${
                show ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-20"
              } inline-block transition-all duration-700 ease-in-out`}
            >
              Partner
            </span>
          </span>{" "}
          for Your Website{" "}
          <span className="bg-black text-white px-3 rounded-xl">
            <span
              className={`${
                show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-20"
              } transition-all duration-700 ease-in-out inline-block`}
            >
              Develop.
            </span>
          </span>
        </h1>
      </div>

      <div className="flex gap-[220px] items-center mt-20">
        <div
          className={`${
            show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }  gap-16 transition-all duration-700 ease-in-out hidden md:inline-flex`}
        >
          <h1 className="rotate-90 inline-block -ml-[90px]">@williamrey</h1>
          <div className="flex justify-start items-center gap-4 flex-col-reverse">
            <div className="ml-4 border-l border-2 h-[45px] inline" />
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
