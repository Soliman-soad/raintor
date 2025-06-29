"use client";
import Link from "next/link";
import React from "react";
import Arrow from "./common/Arrow";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-[1314px] max-h-[58px] mx-auto rounded-b-xl pt-14">
      <div className="flex items-center gap-2 uppercase font-bold text-[34px]">devlop.me</div>
      <div className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Portfolio</Link>
        <Link href="/contact">Blog</Link>
        <button className="pr-4 py-2 flex items-center gap-2 border rounded-full ml-10">
          <Arrow className="rounded-full border w-9.5 h-9.5 flex items-center justify-center" />
          Start Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
