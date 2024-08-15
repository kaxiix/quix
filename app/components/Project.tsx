"use client";

import React from "react";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

// Dummy project data
const projects = [
  {
    title: "Project 1",
    description: "A fascinating project about floating things.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Project 2",
    description: "An amazing project with stunning visuals.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A creative project with a unique approach.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Project 4",
    description: "An innovative project that challenges norms.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
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
