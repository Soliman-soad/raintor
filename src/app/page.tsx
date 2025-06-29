"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Processes from "@/components/Processes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
        <div>
          <Image src="/bg.png" alt="hero-bg" fill className="absolute -z-10" />
        </div>
        <Navbar />
        <Hero />
      </>
      <Skills />
      <div className="relative">
      <div>
          <Image
            src="/bg-about.png"
            alt="contact-bg"
            fill
            className="object-cover -z-10"
          />
        </div>
        <About />
      </div>
      <Processes />
      <div className="relative">
        <div>
          <Image
            src="/bg-contact.png"
            alt="contact-bg"
            fill
            className="object-cover -z-10"
          />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
