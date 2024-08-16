"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

const Hero = () => {
  return (
    <HeroHighlight className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-4xl font-semibold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Converting Your Imaginations Into Reality <br /> One Pixel At A Time{" "}
        <br />
        <Highlight className="text-black text-2xl  dark:text-white">
          Your internet success is OUR mission :)
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
};

export default Hero;
