"use client";
import Link from "next/link";
import React from "react";
import SwapButton from "./common/SwapButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-[1314px] h-[114px] mx-auto rounded-b-[30px] bg-white/10 backdrop-blur-md border border-white/20">
      <div className="flex items-center gap-2 uppercase font-bold text-[34px] text-black">
        devlop.me
      </div>
      <div className="flex items-center gap-8 text-black">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Portfolio</Link>
        <Link href="/contact">Blog</Link>
        <div className="ml-10">
          <SwapButton padding={4} text="Start Project" icon="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
