import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface AnimeTextProps {
  text: string;
  className?: string;
  animation?: 'typewriter' | 'fadeIn' | 'bounce' | 'wave';
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  staggerDelay?: number;
}

export function AnimeText({
  text,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 1000,
  tag: Tag = 'span',
  staggerDelay = 50
}: AnimeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Clear any existing content
    container.innerHTML = '';
    
    if (animation === 'typewriter') {
      // Prepare for typewriter effect
      const textNode = document.createElement(Tag);
      textNode.classList.add(...className.split(' ').filter(c => c));
      textNode.textContent = text;
      container.appendChild(textNode);
      
      const textContent = textNode.textContent || '';
      textNode.textContent = '';
      
      // Create a span for each character
      Array.from(textContent).forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.opacity = '0';
        charSpan.style.display = 'inline-block';
        textNode.appendChild(charSpan);
      });
      
      // Animate each character
      anime({
        targets: Array.from(textNode.children),
        opacity: 1,
        duration: duration / text.length,
        easing: 'easeInOutQuad',
        delay: (_el, i) => delay + (i * staggerDelay)
      });
    } 
    else if (animation === 'wave') {
      // Prepare for wave effect
      const textNode = document.createElement(Tag);
      textNode.classList.add(...className.split(' ').filter(c => c));
      container.appendChild(textNode);
      
      // Create a span for each character
      Array.from(text).forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char === ' ' ? '\u00A0' : char; // Replace spaces with non-breaking spaces
        charSpan.style.display = 'inline-block';
        textNode.appendChild(charSpan);
      });
      
      // Animate each character
      anime({
        targets: Array.from(textNode.children),
        translateY: [0, -10, 0],
        opacity: [0, 1, 1],
        easing: 'easeInOutSine',
        duration: duration,
        delay: (_el, i) => delay + (i * staggerDelay),
        loop: false
      });
    }
    else if (animation === 'bounce') {
      // Prepare for bounce effect
      const textNode = document.createElement(Tag);
      textNode.classList.add(...className.split(' ').filter(c => c));
      container.appendChild(textNode);
      
      // Create a span for each character
      Array.from(text).forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char === ' ' ? '\u00A0' : char; // Replace spaces with non-breaking spaces
        charSpan.style.display = 'inline-block';
        charSpan.style.opacity = '0';
        textNode.appendChild(charSpan);
      });
      
      // Animate each character
      anime({
        targets: Array.from(textNode.children),
        opacity: 1,
        translateY: [50, 0],
        scale: [0.5, 1],
        easing: 'easeOutElastic(1, .6)',
        duration: duration,
        delay: (_el, i) => delay + (i * staggerDelay),
      });
    }
    else {
      // Default fadeIn animation
      const textNode = document.createElement(Tag);
      textNode.textContent = text;
      textNode.classList.add(...className.split(' ').filter(c => c));
      container.appendChild(textNode);
      
      anime({
        targets: textNode,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeInOutQuad',
        duration: duration,
        delay: (_el, i) => delay + (i * staggerDelay)
      });
    }
  }, [text, animation, delay, duration, className, Tag, staggerDelay]);

  return <div ref={containerRef} className="inline-block" />;
}