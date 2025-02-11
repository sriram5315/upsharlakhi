"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const controls: AnimationControls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isVisible = scrollY > 100;

    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.div
        className="rounded-full cursor-pointer fixed z-[1000] bg-primary hover:opacity-70 bottom-4 right-2  xl:right-8"
        initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <div onClick={scrollToTop} className="font-bold text-white md:p-4 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
        </svg>
      </div>
    </motion.div>
  );
};

export default ScrollToTop;