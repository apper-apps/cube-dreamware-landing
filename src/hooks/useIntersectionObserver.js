import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options = {}, sectionIndex = 0) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);
  const [sectionStaggerDelay] = useState(sectionIndex * 200);

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          // Add section-level stagger delay
          setTimeout(() => {
            setHasIntersected(true);
          }, sectionStaggerDelay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
        ...options,
      }
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
  }, [hasIntersected, options, sectionStaggerDelay]);

  return [ref, isIntersecting, hasIntersected, sectionStaggerDelay];
};