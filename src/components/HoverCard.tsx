import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scaleOnHover?: number;
  shadowOnHover?: 'sm' | 'md' | 'lg';
  translateY?: number;
}

export const HoverCard = ({
  children,
  className = '',
  scaleOnHover = 1.05,
  shadowOnHover = 'lg',
  translateY = -10,
}: HoverCardProps) => {
  const shadowMap = {
    sm: 'shadow-md',
    md: 'shadow-lg',
    lg: 'shadow-2xl',
  };

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: scaleOnHover,
        y: translateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
