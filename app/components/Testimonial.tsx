"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { Cover } from "@/components/ui/cover";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Quix Studio was simply the best decision I ever made! Exceeded our expectations with their creative solutions and dedication. They approached our project with the same passion and attention to detail as if they owned the business themselves. A truly exceptional partner!",
      name: "Mr. Ali Ammar",
      title: "Ammar Law Firm",
    },
    {
      quote:
        "The team at Quix Studio has been incredibly reliable and innovative, working with the same level of commitment as if our success directly impacted them.",
      name: "Mr. Mohammad Sultan",
      title: "General Manager at Omairi Trading Est",
    },

    {
      quote:
        "Quix Studio has been instrumental in our digital transformation. They don’t just execute tasks—their investment in our goals with the same drive and ownership as if it were their own was fascinating.",
      name: "Mr. Omairi",
      title: "Founder and CEO at Omairi Trading Est.",
    },
    {
      quote:
        "Quix Studio’s professionalism and creative solutions have expanded our reach. They approach our needs with the dedication and passion one would expect if it were their own enterprise.",
      name: "Mr. Arif",
      title: "Supply Management at Crystal Fruits Trading Company",
    },
    {
      quote:
        "A game-changer for us! Their commitment is unparalleled. My business was highly unstable and pretty much lost. Their incredible commitment to our success has made it a piece of cake for my business to regrow.",
      name: "Mr. Monirul",
      title: "Founder and CEO of Bahar Jeddah Food Company",
    },
    {
      quote:
        "Quix Studio’s creativity and detailed approach have made a significant difference in how our brand stands out. They’ve handled our projects with the same care as if it were their personal venture.",
      name: "Mr. Joynal Abdin",
      title: "Middle Eastern Trainee Manager at Rocco Forte Hotels",
    },
  ];
  return (
    <div className=" flex flex-col py-20 antialiased  items-center  relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <h1 className=" z-50 w-full pl-10 text-center text-3xl font-bold text-white mb-10">
        <span className="text-white text-4xl">
          <Cover>Testimonials</Cover>
        </span>
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonial;
