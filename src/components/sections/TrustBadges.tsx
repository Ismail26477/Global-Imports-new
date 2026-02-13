import { Shield, Award, Globe, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    borderColor: "md:border-t-transparent border-t-blue-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50 md:bg-gold/10",
    iconColor: "text-blue-600 md:text-gold",
    titleColor: "text-blue-700 md:text-navy-dark",
    descColor: "text-blue-600 md:text-muted-foreground",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    borderColor: "md:border-t-transparent border-t-amber-500",
    iconBg: "bg-gradient-to-br from-amber-100 to-amber-50 md:bg-gold/10",
    iconColor: "text-amber-600 md:text-gold",
    titleColor: "text-amber-700 md:text-navy-dark",
    descColor: "text-amber-600 md:text-muted-foreground",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    borderColor: "md:border-t-transparent border-t-emerald-500",
    iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-50 md:bg-gold/10",
    iconColor: "text-emerald-600 md:text-gold",
    titleColor: "text-emerald-700 md:text-navy-dark",
    descColor: "text-emerald-600 md:text-muted-foreground",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    borderColor: "md:border-t-transparent border-t-orange-500",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-50 md:bg-gold/10",
    iconColor: "text-orange-600 md:text-gold",
    titleColor: "text-orange-700 md:text-navy-dark",
    descColor: "text-orange-600 md:text-muted-foreground",
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
                rounded-xl md:rounded-lg shadow-md md:shadow-sm 
                transition-all duration-300 hover:shadow-xl md:hover:shadow-lg
                bg-white border-t-4 md:border-t-4 md:border-t-transparent
                ${badge.borderColor}
              `}
            >
              {/* Icon Container - Larger & Colored on mobile */}
              <div 
                className={`
                  flex items-center justify-center mb-4 md:mb-3
                  w-16 h-16 md:w-11 md:h-11 rounded-full
                  transition-transform duration-300 hover:scale-110
                  ${badge.iconBg}
                `}
              >
                <badge.icon 
                  className={`w-7 h-7 md:w-5 md:h-5 ${badge.iconColor}`}
                />
              </div>

              {/* Title - Colored on mobile */}
              <h3 
                className={`
                  font-heading font-bold mb-2 md:mb-1 
                  text-base md:text-[15px] leading-snug md:leading-tight
                  ${badge.titleColor}
                `}
              >
                {badge.title}
              </h3>

              {/* Description - Colored on mobile */}
              <p 
                className={`
                  text-sm md:text-[12px] leading-relaxed md:leading-tight 
                  line-clamp-3 md:line-clamp-2 font-medium md:font-normal
                  ${badge.descColor}
                `}
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
