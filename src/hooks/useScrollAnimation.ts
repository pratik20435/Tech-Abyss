import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Returns a ref to attach to the element and whether it's in view
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    ...options
  });

  return { ref, isInView };
};

/**
 * Hook to detect if element is in viewport with custom threshold
 */
export const useInViewport = (threshold = 0.1) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};
