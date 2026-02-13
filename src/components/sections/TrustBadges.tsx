import { Shield, Award, Globe, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    borderColor: "border-t-blue-400",
    bgGradient: "from-blue-100 to-blue-50",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    borderColor: "border-t-amber-400",
    bgGradient: "from-amber-100 to-amber-50",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    borderColor: "border-t-emerald-400",
    bgGradient: "from-emerald-100 to-emerald-50",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    borderColor: "border-t-orange-400",
    bgGradient: "from-orange-100 to-orange-50",
  },
];

export function TrustBadges() {
  return (
    <section className="py-8 md:py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center p-6 md:p-4
                rounded-lg shadow-sm transition-all duration-300
                bg-white border-t-4 hover:shadow-lg
                ${badge.borderColor}
              `}
            >
              {/* Icon Container - Larger on mobile */}
              <div 
                className={`
                  flex items-center justify-center mb-4 md:mb-3
                  w-16 h-16 md:w-11 md:h-11 rounded-full
                  bg-gradient-to-br md:bg-gold/10
                  ${badge.bgGradient}
                  transition-transform duration-300 hover:scale-110
                `}
              >
                <badge.icon 
                  className="text-gold w-7 h-7 md:w-5 md:h-5" 
                />
              </div>

              {/* Title - Larger on mobile */}
              <h3 
                className="font-heading font-semibold text-navy-dark mb-2 md:mb-1 text-base md:text-[15px] leading-snug md:leading-tight"
              >
                {badge.title}
              </h3>

              {/* Description - Better readable on mobile */}
              <p 
                className="text-muted-foreground text-sm md:text-[12px] leading-relaxed md:leading-tight line-clamp-3 md:line-clamp-2"
              >
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
