import React from "react";
import type { ReactNode } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  threshold = 0.3,
  once = true,
  direction = "up",
}) => {
  const { ref, visible } = useScrollAnimation({ threshold, once });

  // ✅ Determine motion direction (translate offset)
  const directionStyles: Record<string, string> = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1200ms] ease-out transform
        ${visible ? "opacity-100 scale-100 translate-x-0 translate-y-0" : `opacity-0 scale-95 ${directionStyles[direction]}`}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
