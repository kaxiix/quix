"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "A Vibrant Vision",
    description:
      "Bold designs, new technologies and a vibrant vision is what Quix Studio is all about. We provide strategic insights to craft experiences that resonate with audiences and drive results This commitment to vibrancy and innovation that sets us apart and allows us to consistently deliver exceptional outcomes for our clients",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/vibrant.webp"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering the highest quality in everything we do. From the initial concept to the final product, our focus is on excellence and attention to detail",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/quality.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Brilliant Content",
    description:
      "Our team of creative minds is dedicated to crafting compelling narratives and innovative designs that resonate with audiences and elevate brands. We believe that content is the cornerstone of any successful digital strategy, and we approach each project with a commitment to brilliance",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/content.webp"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Innovation",
    description:
      "At Quix Studio, we are driven by a passion for innovation. We constantly explore new ideas, technologies, and approaches to ensure our solutions are cutting-edge and effective",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/inovation.webp"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Candour Consultations",
    description:
      "The foundation of brilliant content always lies in a clear understanding of your needs and goals. That’s why we offer free transparent consultations to all our clients, ensuring that we fully grasp your vision before we start creating. During these consultations, we take the time to explain our approach, answer any questions, and align our strategies with your objectives",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/consul.webp"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Creativity",
    description:
      "Creativity fuels our work at Quix Studio. We embrace out-of-the-box thinking and artistic expression to create unique and engaging digital experiences that stand out in a crowded marke",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/creativity.webp"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const About = () => {
  return (
    <div id="about bg-black bg-grid-white/[0.05] ">
      <div className="">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default About;
