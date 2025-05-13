import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  className?: string;
  decimalPlaces?: number;
}

export function Counter({
  from,
  to,
  duration = 2000,
  delay = 0,
  formatter = (value) => value.toString(),
  className = '',
  decimalPlaces = 0
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(from);
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  
  useEffect(() => {
    if (!counterRef.current) return;
    
    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.pause();
    }
    
    // Create a new object to track the current count
    const obj = { count: from };
    
    // Set up the animation
    animationRef.current = anime({
      targets: obj,
      count: to,
      duration: duration,
      delay: delay,
      easing: 'easeInOutQuad',
      round: decimalPlaces === 0, // Only round if no decimal places
      update: () => {
        // Format the value with the specified decimal places
        const formattedValue = decimalPlaces > 0
          ? Number(obj.count.toFixed(decimalPlaces))
          : Math.round(obj.count);
        
        setDisplayValue(formattedValue);
      }
    });
    
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [from, to, duration, delay, decimalPlaces]);
  
  return (
    <span ref={counterRef} className={className}>
      {formatter(displayValue)}
    </span>
  );
}