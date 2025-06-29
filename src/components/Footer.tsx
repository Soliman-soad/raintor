import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-white bg-black py-20 px-10 rounded-[40px]">
        <div className="flex justify-between items-start">
      <h1 className="uppercase text-[#C5FF41] text-[34px] font-bold mb-5 w-1/4">
        devlop.me
      </h1>
      <div className="w-7/12">
        <h1 className="text-[64px] font-bold">As You Can</h1>
        <div className="flex justify-between mt-20 opacity-80">
          <div>
            <div>
              <h1 className="opacity-70 mb-4">Say hello</h1>

              <p>HELLO@DEVLOP.ME.COM</p>
              <p>MAHBUBUL@ME.COM</p>
            </div>
            <div>
              <h4 className="opacity-70 mb-4 mt-16">Call</h4>
              <p>+784549 4981 00</p>
              <p>+8845 0100 211</p>
            </div>
          </div>
          <div>
            <h5 className="opacity-70 mb-4">Menu</h5>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>PORTFOLIO</p>
            <p>BLOG</p>
          </div>
          <div>
            <h5 className="opacity-70 mb-4">Social</h5>
            <p>TWITTER</p>
            <p>INSTAGRAM</p>
            <p>FACEBOOK</p>
            <p>BEHANCE</p>
            <p>DRIBBBLE</p>
          </div>
        </div>
      </div>
        </div>

      <div className="flex justify-between items-center mt-28">
        <h3 className="text-2xl">BESNIK</h3>

        <p className="opacity-70">© devlop.me 2022</p>

        <p className="opacity-70">PRIVACY - TERMS</p>
      </div>
    </div>
  );
};

export default Footer;
