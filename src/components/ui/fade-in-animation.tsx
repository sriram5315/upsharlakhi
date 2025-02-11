"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 10, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;