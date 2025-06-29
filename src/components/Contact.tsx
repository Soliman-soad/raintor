import React from "react";
import FeatureHeader from "./common/FeatureHeader";
import SwapButton from "./common/SwapButton";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-20 md:py-44 md:flex justify-between items-center gap-6 px-2 md:px-0">
      <div className="md:w-7/12">
        <FeatureHeader variant="black" title="Contact" position="start" />
        <div>
          <div className="text-3xl md:text-[78px] font-bold">
            <h1 className="mt-8">
              Interested in{" "}
              <span className="bg-black text-white px-2 rounded-xl">work</span>{" "}
              together?
            </h1>
          </div>
          <p className="text-lg leading-8 mt-10">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <div className="mt-10">
            <SwapButton padding={4} text="Schedule a Call" icon="call" />
          </div>
        </div>
      </div>
      <form className="bg-black text-white p-10 rounded-3xl md:rounded-[40px] w-11/12 md:w-5/12 mx-auto mt-5 md:mt-0">
        <div className="flex flex-col gap-8 mb-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-b  border-b-gray-700 focus:opacity-100 focus:border-b-[#C5FF41] outline-none pb-3 placeholder:text-white placeholder:opacity-50 focus:placeholder:opacity-100"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="border-b  border-b-gray-700 focus:opacity-100 focus:border-b-[#C5FF41] outline-none pb-3 placeholder:text-white placeholder:opacity-50 focus:placeholder:opacity-100"
          />
          <input
            type="text"
            placeholder="Describe your project"
            className="border-b  border-b-gray-700 focus:opacity-100 focus:border-b-[#C5FF41] outline-none pb-3 placeholder:text-white placeholder:opacity-50 focus:placeholder:opacity-100"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <SwapButton padding={4} text="Send" icon="send" />
          <span>or</span>
          <SwapButton padding={4} text="Contact me" icon="mail" />
        </div>
        <div className="flex flex-col md:flex-row mt-12">
          <h5 className="text-xl opacity-70 text-center md:text-left">@williamrey</h5>
          <Image src="/icons/social-white.svg" alt="social-media" width={150} height={182} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
