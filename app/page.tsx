"use client";
import { useEffect } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <Hero />
        <About />
        <div className=" bg-black   bg-grid-white/10 bg-fixed ">
          <Services />
          <Project />
          <Testimonials />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
