import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  className?: string;
  children: React.ReactNode;
  speed?: number; // 0 = static, 1 = normal scroll, >1 faster, <1 slower
  direction?: 'up' | 'down' | 'left' | 'right';
  startOffset?: number; // Starting offset in percentage (0-100)
  endOffset?: number; // Ending offset in percentage (0-100)
}

export function ParallaxLayer({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  startOffset = 0,
  endOffset = 100,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Convert offset percentages to values between 0 and 1
  const start = startOffset / 100;
  const end = endOffset / 100;
  
  // Calculate the distance based on direction and speed
  let x = 0;
  let y = 0;
  const distance = 100 * speed; // Pixels to move
  
  if (direction === 'up') {
    y = useTransform(scrollYProgress, [start, end], [distance, 0]);
  } else if (direction === 'down') {
    y = useTransform(scrollYProgress, [start, end], [-distance, 0]);
  } else if (direction === 'left') {
    x = useTransform(scrollYProgress, [start, end], [distance, 0]);
  } else if (direction === 'right') {
    x = useTransform(scrollYProgress, [start, end], [-distance, 0]);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}