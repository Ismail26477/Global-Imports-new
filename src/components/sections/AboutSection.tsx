'use client';

import { ArrowRight, CheckCircle, Globe, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Direct Partnerships",
    text: "Verified manufacturers & trusted suppliers worldwide",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    text: "Exclusive products with optimized sourcing costs",
  },
  {
    icon: Globe,
    title: "Fast Timelines",
    text: "Rapid sourcing & production capabilities",
  },
];

const evolution = [
  {
    year: "2008",
    title: "Before",
    description: "Limited product categories and local reach",
    color: "from-amber-900 to-amber-700",
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Multi-category expertise across industries",
    color: "from-amber-700 to-amber-600",
  },
  {
    year: "2024",
    title: "Today",
    description: "E-commerce & global marketplace leaders",
    color: "from-amber-600 to-amber-500",
  },
];

const stats = [
  { value: "16+", label: "Years in Global Trade", icon: Award },
  { value: "500+", label: "Trusted Manufacturers", icon: Users },
  { value: "50+", label: "Countries & Regions", icon: Globe },
  { value: "10K+", label: "Successful Transactions", icon: Zap },
];

export function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#about");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.clientHeight;
      const progress = Math.max(0, Math.min(1, (sectionHeight - rect.top) / sectionHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2520 50%, #1a1a1a 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-800/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="inline-block text-amber-500/80 font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5">
            About Global Imports
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Your Trusted
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mt-2">
              Global Trade Partner
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between Indian businesses and global manufacturers with 16+ years of expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="space-y-6 mb-8">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                We've transformed international trade for hundreds of businesses by providing seamless access to quality products and trusted suppliers worldwide. Our expertise spans multiple industries with proven success across diverse markets.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-4 mb-10">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-white/5 border border-amber-500/20 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white mt-1">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                        <p className="text-sm text-gray-400">{highlight.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={scrollToContact}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center md:justify-start gap-2"
            >
              Start Your Trade Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 h-48 md:h-64 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                  alt="Warehouse operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 h-56 md:h-72 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  alt="Global shipping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 h-56 md:h-72 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                  alt="Container shipping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 h-48 md:h-64 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                  alt="Quality inspection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="mb-20 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evolution.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative p-8 rounded-2xl bg-white/5 border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                  <div className="text-sm font-semibold text-amber-400 mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-amber-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-amber-500/20 hover:border-amber-500/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 text-center hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
