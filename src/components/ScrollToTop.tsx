"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion";

const ScrollToTop: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!buttonRef.current) return;

    const scrollY = window.scrollY;
    const isVisible = scrollY > 100;

    if (isVisible) {
      animate(
        buttonRef.current.style,
        { 
          opacity: "1",
          transform: "translateY(0px)"
        },
        { 
          duration: 0.3,
        }
      );
    } else {
      animate(
        buttonRef.current.style,
        { 
          opacity: "0",
          transform: "translateY(20px)"
        },
        { 
          duration: 0.3,
        }
      );
    }
  };

  useEffect(() => {
    // Set initial state
    if (buttonRef.current) {
      buttonRef.current.style.opacity = "0";
      buttonRef.current.style.transform = "translateY(20px)";
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      className="rounded-full cursor-pointer fixed z-[1000] bg-primary hover:opacity-70 
                 bottom-4 right-2 xl:right-8 transition-opacity duration-300"
    >
      <div 
        onClick={scrollToTop} 
        className="font-bold text-white md:p-4 p-3"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="currentColor" 
          className="bi bi-chevron-up" 
          viewBox="0 0 16 16"
        >
          <path 
            fillRule="evenodd" 
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTop;