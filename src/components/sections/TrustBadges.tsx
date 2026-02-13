'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Shield, Award, Globe, Truck } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    borderGradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    borderGradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(251, 146, 60, 0.3)",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    borderGradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    borderGradient: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// SVG Connecting Lines Component
function ConnectingLines({ isVisible }: { isVisible: boolean }) {
  return (
    <svg
      className="absolute hidden md:block w-full h-full top-0 left-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Horizontal line from Card 1 to Card 2 */}
      <motion.line
        x1="25%"
        y1="50%"
        x2="50%"
        y2="50%"
        stroke="url(#gradientBlue)"
        strokeWidth="2"
        strokeDasharray="100"
        initial={{ strokeDashoffset: 100 }}
        animate={isVisible ? { strokeDashoffset: 0 } : { strokeDashoffset: 100 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Vertical line from Card 2 to Card 4 */}
      <motion.line
        x1="75%"
        y1="50%"
        x2="75%"
        y2="150%"
        stroke="url(#gradientAmber)"
        strokeWidth="2"
        strokeDasharray="100"
        initial={{ strokeDashoffset: 100 }}
        animate={isVisible ? { strokeDashoffset: 0 } : { strokeDashoffset: 100 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />

      {/* Horizontal line from Card 3 to Card 4 */}
      <motion.line
        x1="25%"
        y1="150%"
        x2="75%"
        y2="150%"
        stroke="url(#gradientEmerald)"
        strokeWidth="2"
        strokeDasharray="100"
        initial={{ strokeDashoffset: 100 }}
        animate={isVisible ? { strokeDashoffset: 0 } : { strokeDashoffset: 100 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
        </linearGradient>
        <linearGradient id="gradientAmber" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(251, 146, 60, 0.6)" />
          <stop offset="100%" stopColor="rgba(251, 146, 60, 0.2)" />
        </linearGradient>
        <linearGradient id="gradientEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Trigger animation on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-30" style={{
        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: 2x2 Grid with connecting lines */}
        <div className="hidden md:grid relative h-96">
          <ConnectingLines isVisible={isVisible} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-8 h-full"
          >
            {badges.map((badge, index) => (
              <BadgeCard key={index} badge={badge} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Vertical Stacked with vertical connecting lines */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {badges.map((badge, index) => (
              <div key={index} className="relative">
                <BadgeCard badge={badge} />
                
                {/* Vertical connector line on mobile */}
                {index < badges.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 mt-2"
                    initial={{ scaleY: 0 }}
                    animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      background: `linear-gradient(to bottom, ${badge.glowColor}, transparent)`,
                      transformOrigin: "top",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface BadgeCardProps {
  badge: typeof badges[0];
}

function BadgeCard({ badge }: BadgeCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={isHovering ? { y: -5 } : { y: 0 }}
      className={`
        relative group flex flex-col items-center text-center p-8 md:p-6
        rounded-2xl backdrop-blur-xl transition-all duration-300
        bg-white/80 border-t-4 md:border-transparent
        shadow-lg hover:shadow-2xl
        bg-gradient-to-br from-white/90 via-white/80 to-white/70
        border-l border-r border-b border-white/30
        overflow-hidden
        bg-gradient-to-b from-${badge.borderGradient}
      `}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.7) 100%)`,
        borderTop: `4px solid`,
        borderImage: `linear-gradient(90deg, ${badge.glowColor}, transparent) 1`,
      }}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${badge.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Icon Container with floating animation */}
      <motion.div
        variants={iconVariants}
        animate={isHovering ? "pulse" : "visible"}
        className="relative z-10 flex items-center justify-center mb-6 md:mb-4"
      >
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${badge.glowColor} 0%, transparent 70%)`,
            width: 80,
            height: 80,
          }}
          animate={isHovering ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div
          className="relative w-20 h-20 md:w-16 md:h-16 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${badge.glowColor}, rgba(255,255,255,0.5))`,
            border: `2px solid ${badge.glowColor}`,
          }}
        >
          <badge.icon className="w-10 h-10 md:w-8 md:h-8 text-white drop-shadow-lg" />
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="relative z-10 font-heading font-bold mb-3 md:mb-2 text-lg md:text-[15px] text-navy-dark">
        {badge.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm md:text-[12px] text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-2">
        {badge.description}
      </p>
    </motion.div>
  );
}
