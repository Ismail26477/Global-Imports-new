import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechMart Electronics",
    content:
      "Global Imports transformed our supply chain. Their quality inspection ensures we receive only the best products.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Founder, HomeStyle Decor",
    content: "They handle everything from sourcing to delivery seamlessly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Amit Patel",
    role: "Director, Industrial Solutions Ltd",
    content:
      "Customs expertise saved us countless hours and potential penalties.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Amazon FBA Seller",
    content:
      "Perfect partner for FBA sourcing. Quality and speed both impressive.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Importer",
    content: "Professional team with deep knowledge of global trade.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ Detect screen size
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // ✅ Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < testimonials.length - itemsPerView ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const next = () => {
    setCurrentIndex((prev) =>
      prev < testimonials.length - itemsPerView ? prev + 1 : 0
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - itemsPerView
    );
  };

  return (
    <section className="section-padding bg-navy-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl mt-2 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by importers, e-commerce sellers, and brands worldwide
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsPerView
              }%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />

                  <p className="text-white/90 mb-6 leading-relaxed">
                    “{t.content}”
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    />
                    <div>
                      <h4 className="font-heading font-bold">{t.name}</h4>
                      <p className="text-white/60 text-sm">{t.role}</p>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-gold fill-gold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
