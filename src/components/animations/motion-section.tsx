import * as React from "react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "none";
};

export function MotionSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: MotionSectionProps) {
  const getVariants = (): Variants => {
    // Default is fade in
    if (direction === "none") {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }
    
    // Directional variants
    const directionOffset = 50;
    const offsets = {
      up: { y: directionOffset },
      down: { y: -directionOffset },
      left: { x: directionOffset },
      right: { x: -directionOffset },
    };
    
    return {
      hidden: { 
        opacity: 0, 
        ...(offsets[direction] || {}) 
      },
      visible: { 
        opacity: 1, 
        ...(direction.includes("y") ? { y: 0 } : {}),
        ...(direction.includes("x") ? { x: 0 } : {})
      },
    };
  };

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.section>
  );
}

export function StaggeredChildren({
  children,
  className = "",
  containerDelay = 0,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  containerDelay?: number;
  staggerDelay?: number;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: containerDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}