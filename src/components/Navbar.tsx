"use client";
import Link from "next/link";
import React from "react";
import SwapButton from "./common/SwapButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-[1314px] max-h-[58px] mx-auto rounded-b-xl pt-14">
      <div className="flex items-center gap-2 uppercase font-bold text-[34px]">
        devlop.me
      </div>
      <div className="flex items-center gap-8">
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
