import React from "react";
import { Button } from "../../components/ui/moving-border";
import { Cover } from "@/components/ui/cover";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Software Engineer",
      desc: "Developed cutting-edge web applications.",
      thumbnail: "picture",
    },
    {
      id: 2,
      title: "Frontend Developer",
      desc: "Specialized in creating responsive user interfaces.",
      thumbnail: "picture",
    },
    {
      id: 3,
      title: "Backend Developer",
      desc: "Worked on server-side logic and databases.",
      thumbnail: "picture",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      desc: "Designed user-friendly and visually appealing interfaces.",
      thumbnail: "picture",
    },
    {
      id: 5,
      title: "Project Manager",
      desc: "Managed multiple projects, ensuring timely delivery.",
      thumbnail: "picture",
    },
    {
      id: 5,
      title: "Project Manager",
      desc: "Managed multiple projects, ensuring timely delivery.",
      thumbnail: "picture",
    },
  ];

  return (
    <>
      <div
        id="services"
        className=" w-full relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
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
                className="  flex-1 text-black dark:text-white  dark:border-slate-800"
              >
                <div className="flex flex-col justify-center items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <div className="lg:w-32 md:w-20 w-16">{card.thumbnail}</div>
                  <div className="lg:ms-5">
                    <h1 className="text-center text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-center text-white-100 mt-3 font-semibold">
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
