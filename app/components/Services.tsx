import React from "react";
import { Button } from "../../components/ui/moving-border";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Web Development",
      desc: "Crafting responsive and visually stunning websites tailored specifically to your brand's needs",
      thumbnail: "/web.png",
    },
    {
      id: 2,
      title: "Social Media Management (SMM)",
      desc: "Managing and growing your brand's presence across social media platforms",
      thumbnail: "/social.png",
    },
    {
      id: 3,
      title: "Digital Advertising",
      desc: "Creating targeted social platform ad campaigns, including Google and application ads, to maximize online visibility and engagement",
      thumbnail: "/ads.png",
    },
    {
      id: 5,
      title: "SEO Optimization",
      desc: "Enhancing website visibility on search engines through strategic SEO practices",
      thumbnail: "/seo.png",
    },
    {
      id: 6,
      title: "Content Creation",
      desc: "Developing compelling content that resonates with audiences and strengthens brand identity",
      thumbnail: "/cont.png",
    },
    {
      id: 7,
      title: "Consultation Services",
      desc: "Providing expert guidance on digital strategies and project execution",
      thumbnail: "/consult.png",
    },
  ];

  return (
    <>
      <div
        id="services"
        className="w-full relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
        <div className="py-20 w-full flex flex-col items-center justify-center">
          <h1 className="heading">
            <span className="text-white text-4xl">
              <Cover>Services</Cover>
            </span>
          </h1>

          <div className="w-full px-20 mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
            {workExperience.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white dark:border-slate-800"
              >
                <div className="flex flex-col justify-center items-center p-3 py-6 md:p-5 lg:p-10 gap-2 text-center">
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    width={128}
                    height={128}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-xl md:text-2xl font-bold text-white">
                      {card.title}
                    </h1>
                    <p className="mt-3 font-semibold text-gray-300">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
