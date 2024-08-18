"use client";

import React from "react";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

// Dummy project data
const projects = [
  {
    title: "Bahar Jeddah Food Company",
    description:
      "Supplying premium wholesale food products with unmatched quality and reliability to fuel your business success.",
    imageUrl: "/bahar.png",
    link: "https://www.baharjeddahfoodco.com/",
  },

  {
    title: "Fabric Studio",
    description:
      "Fabric is a digital product studio dedicated to crafting exceptional apps and experiences with focused, hands-on expertise.",
    imageUrl: "/fabric.png",
    link: "https://www.fabric.studio/",
  },
  {
    title: "Relphacare Technology",
    description:
      "Capturing the power of artificial intelligence to reduce healthcare errors.",
    imageUrl: "/relpha.gif",
    link: "https://www.relphacare.com/",
  },

  {
    title: "Arzag Food Stuff",
    description:
      "Arzag delivers top-quality wholesale food products with a commitment to excellence and customer satisfaction.",
    imageUrl: "/arzag.png",
    link: "https://catalog.arzagplus.com/",
  },
];

const Project = () => {
  return (
    <>
      <div className="w-full relative flex flex-col items-center justify-center py-10">
        <div className="text-center text-3xl font-bold text-white mb-10">
          <span className="text-white text-4xl">
            <Cover>Projects</Cover>
          </span>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10">
          {projects.map((project, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-black hover:shadow-2xl hover:shadow-[#EB5E28]/40 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.imageUrl}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl shadow-xl transition-transform duration-300 transform group-hover:scale-105"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                  >
                    Visit Now →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
