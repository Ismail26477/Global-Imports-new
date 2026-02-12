import { ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({
  children,
  speed = 0.5,
  className = '',
}: ParallaxSectionProps) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${offset}px)`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
