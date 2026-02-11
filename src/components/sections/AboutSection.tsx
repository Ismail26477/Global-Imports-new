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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative bg-fixed bg-center bg-cover section-padding"
      style={{
        backgroundImage: "url('/services/end-to-end-procurement.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-xs sm:text-sm">
              About Us
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 mb-4 sm:mb-6">
              Your Trusted{" "}
              <span className="text-gradient-gold">Global Trade Partner</span>
            </h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              <strong>Hassle-free Import & Global E-Commerce Sourcing</strong>
            </p>

            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-gray-200">
              We bridge the gap between Indian businesses and global manufacturers,
              making international trade simple and profitable. With over 16 years
              of experience, we've helped hundreds of businesses source quality
              products from trusted suppliers worldwide.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h4 className="font-heading font-bold mb-3 sm:mb-4">
                Our Evolution
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {evolution.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-gold text-black text-xs font-medium rounded-full">
                      {item.label}
                    </span>
                    <span className="text-gray-200 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={scrollToContact} className="btn-gold">
              Start Your Trade Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right side removed images — background handles visual */}
          <div></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 bg-white/10 backdrop-blur-md rounded-xl"
            >
              <div className="font-heading text-3xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
