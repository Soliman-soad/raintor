"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Processes from "@/components/Processes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Processes />
    </>
  );
}
