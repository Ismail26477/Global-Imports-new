import { useRef, useEffect, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Only calculate parallax if element is in viewport
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrolled = window.scrollY;
          const elementOffset = ref.current.offsetTop;
          setOffset((scrolled - elementOffset) * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
