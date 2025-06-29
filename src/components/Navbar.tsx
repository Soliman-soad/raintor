import Link from "next/link";
import React, { useState } from "react";
import SwapButton from "./common/SwapButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex">
      <div className="flex justify-between items-center p-4 max-w-[1314px] h-[114px] mx-auto rounded-b-[30px] bg-white/10 backdrop-blur-md border border-white/20">
        <div className="flex items-center gap-2 uppercase font-bold text-[34px] text-black">
          devlop.me
        </div>
        <div className="hidden md:flex items-center gap-8 text-black">
          <Link
            href="/"
            className="hover:bg-black hover:text-white p-2 rounded-xl duration-200 ease-in-out transition-all"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
          >
            Blog
          </Link>
          <div className="ml-10">
            <SwapButton padding={4} text="Start Project" icon="arrow" />
          </div>
        </div>
      </div>

      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[114px] left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
          <div className="flex flex-col items-center gap-4 p-4 text-black">
            <Link
              href="/"
              className="w-full text-center hover:bg-black hover:text-white p-2 rounded-xl duration-200 ease-in-out transition-all"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/"
              className="w-full text-center hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/"
              className="w-full text-center hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="w-full text-center hover:bg-black hover:text-white p-2 rounded-xl duration-300 ease-in-out transition-all"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="w-full flex justify-center mt-2">
              <SwapButton padding={4} text="Start Project" icon="arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
