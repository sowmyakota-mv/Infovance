import { useEffect, useState, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.3,
  once = true,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
};
