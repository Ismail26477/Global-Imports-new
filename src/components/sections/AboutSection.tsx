'use client';

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Direct partnerships with verified manufacturers",
  "Access to competitive pricing & exclusive products",
  "Fast sourcing & production timelines",
];

const evolution = [
  { label: "Before", text: "Limited product categories" },
  { label: "Now", text: "Multi-category sourcing expertise" },
  { label: "Focus", text: "E-commerce & global marketplace sellers" },
];

const stats = [
  { value: "16+", label: "Years in Global Trade" },
  { value: "Expert", label: "Professional Management" },
  { value: "Global", label: "China & 50+ Countries" },
  { value: "Multi", label: "Diverse Solutions" },
];

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="section-padding relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/services/end-to-end-procurement.png')",
      }}
    >
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/45"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-gold font-bold uppercase tracking-wider text-xs sm:text-sm px-3 sm:px-4 py-1.5 bg-gold/15 rounded-full mb-4 sm:mb-6">
              About Us
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black mt-2 mb-4 sm:mb-6 leading-tight">
              Your Trusted{" "}
              <span className="text-gradient-gold block">Global Trade Partner</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-yellow-100 font-semibold mb-3 sm:mb-4">
              Hassle-free Import & Global E-Commerce Sourcing
            </p>
            
            <p className="text-base sm:text-lg text-gray-100 mb-8 sm:mb-10 leading-relaxed">
              We bridge the gap between Indian businesses and global manufacturers, 
              making international trade simple and profitable. With over 16 years 
              of experience, we've helped hundreds of businesses source quality 
              products from trusted suppliers worldwide.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-gray-100 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="glass-dark rounded-xl p-5 sm:p-8 mb-8 sm:mb-10 border border-gold/30">
              <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Our Evolution
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {evolution.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-gold to-gold/80 text-navy-dark text-xs sm:text-sm font-bold rounded-full whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base text-gray-100 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={scrollToContact} className="btn-gold text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 font-bold">
              Start Your Trade Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                  alt="Warehouse operations"
                  className="w-full h-32 sm:h-48 object-cover"
                />
              </div>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  alt="Global shipping"
                  className="w-full h-40 sm:h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                  alt="Container shipping"
                  className="w-full h-40 sm:h-64 object-cover"
                />
              </div>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                  alt="Quality inspection"
                  className="w-full h-32 sm:h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-8 bg-gradient-to-br from-gold/20 to-gold/10 rounded-lg sm:rounded-2xl shadow-lg card-hover border border-gold/40 backdrop-blur-sm"
            >
              <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gold mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-100 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
