"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MaskContainerProps {
  children: React.ReactNode;
}

export const MaskContainer = ({ children }: MaskContainerProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen relative bg-black">
      <motion.div
        className="absolute rounded-full"
        animate={{
          left: mousePosition.x - 5, // Center the dot
          top: mousePosition.y - 5, // Center the dot
        }}
        style={{
          width: 10,
          height: 10,
          zIndex: 1000, // Ensure the dot is above all components
          backgroundColor: `rgb(${255 - (mousePosition.x % 255)}, ${
            255 - (mousePosition.y % 255)
          }, 255)`, // Invert color based on position
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
      {children}
    </div>
  );
};
