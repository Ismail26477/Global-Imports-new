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
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/services/end-to-end-procurement.png')",
      }}
    >
      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              About Us
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-6 leading-tight">
              Your Trusted{" "}
              <span className="text-gradient-gold">
                Global Trade Partner
              </span>
            </h2>

            <p className="text-lg text-white font-medium mb-4">
              Hassle-free Import & Global E-Commerce Sourcing
            </p>

            <p className="text-white/80 text-base mb-8 leading-relaxed">
              We bridge the gap between Indian businesses and global manufacturers,
              making international trade simple and profitable. With over 16 years
              of experience, we've helped hundreds of businesses source quality
              products from trusted suppliers worldwide.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-white">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Evolution */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-8">
              <h4 className="font-heading font-bold text-white mb-4">
                Our Evolution
              </h4>

              <div className="space-y-3">
                {evolution.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 flex-wrap">
                    <span className="px-3 py-1 bg-gold text-black text-sm font-medium rounded-full">
                      {item.label}
                    </span>
                    <span className="text-white/80 text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={scrollToContact} className="btn-gold">
              Start Your Trade Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                  alt="Warehouse operations"
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  alt="Global shipping"
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                  alt="Container shipping"
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                  alt="Quality inspection"
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
