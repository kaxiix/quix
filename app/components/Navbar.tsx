"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (isInitialLoad) return;

    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit lg:max-w-[500px] text-white fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-2xl justify-center gap-10 bg-black/10 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 md:py-1 items-center  space-x-2"
        )}
      >
        <div className="flex  lg:hidden space-x-5 items-center">
          <Link
            href="/"
            className="relative  items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Home</span>
          </Link>
          <Link
            href="#about"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">About</span>
          </Link>
        </div>

        <div className="hidden lg:flex space-x-2 items-center">
          <Link
            href="/"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Home</span>
          </Link>
          <Link
            href="#about"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">About</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative flex items-center justify-center w-16 h-16">
            <div className="absolute w-20 h-20 bg-black border-white/20 border-[1px] rounded-full -top-2"></div>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={60}
              height={60}
              className="w-[60px] relative z-10"
            />
          </div>
        </div>

        <div className="hidden lg:flex space-x-2 items-center">
          <Link
            href="#services"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Services</span>
          </Link>
          <Link
            href="#contact"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Contact</span>
          </Link>
        </div>

        <div className="lg:hidden flex space-x-2 items-center">
          <Link
            href="#services"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Services</span>
          </Link>
          <Link
            href="#contact"
            className="relative items-center flex space-x-1 text-white hover:text-[#EB5E28]"
          >
            <span className="font-bold text-sm">Contact</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
