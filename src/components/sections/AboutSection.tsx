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

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/services/end-to-end-procurement.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glass Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
            
            {/* LEFT CONTENT */}
            <div>
              <span className="text-gold uppercase tracking-wider text-sm">
                About Us
              </span>

              <h2 className="font-heading text-3xl md:text-5xl mt-3 mb-6">
                Your Trusted Global Trade Partner
              </h2>

              <p className="text-lg font-semibold mb-3">
                Hassle-free Import & Global E-Commerce Sourcing
              </p>

              <p className="text-gray-200 mb-6">
                We bridge the gap between Indian businesses and global manufacturers,
                making international trade simple and profitable. With over 16 years
                of experience, we've helped hundreds of businesses source quality
                products from trusted suppliers worldwide.
              </p>

              <div className="space-y-3 mb-6">
                {highlights.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Evolution Box */}
              <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md mb-6">
                <h4 className="font-bold mb-4">Our Evolution</h4>
                {evolution.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center mb-2">
                    <span className="bg-gold text-black px-3 py-1 text-xs rounded-full">
                      {item.label}
                    </span>
                    <span className="text-gray-200 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button onClick={scrollToContact} className="btn-gold">
                Start Your Trade Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                className="rounded-2xl h-40 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
                className="rounded-2xl h-60 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec"
                className="rounded-2xl h-60 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c"
                className="rounded-2xl h-40 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
