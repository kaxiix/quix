"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.3, // Adjust the scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up the Lenis instance on unmount
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <div className=" bg-black bg-grid-white/10 bg-fixed">
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
