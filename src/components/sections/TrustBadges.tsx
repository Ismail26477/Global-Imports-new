import { Shield, Award, Globe, Truck } from "lucide-react";
import { AnimationWrapper } from "../AnimationWrapper";
import { HoverCard } from "../HoverCard";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    mobileColor: "bg-blue-50",
    mobileAccent: "from-blue-100 to-blue-50",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    mobileColor: "bg-amber-50",
    mobileAccent: "from-amber-100 to-amber-50",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    mobileColor: "bg-emerald-50",
    mobileAccent: "from-emerald-100 to-emerald-50",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    mobileColor: "bg-orange-50",
    mobileAccent: "from-orange-100 to-orange-50",
  },
];

export function TrustBadges() {
  return (
    <section className="py-8 md:py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
          {badges.map((badge, index) => (
            <AnimationWrapper
              key={index}
              type="slideUp"
              delay={index * 0.1}
            >
              <HoverCard
                scaleOnHover={1.05}
                shadowOnHover="md"
                translateY={-8}
                className="h-full"
              >
                <div
                  className={`
                    flex flex-col items-center text-center p-6 md:p-4
                    rounded-lg shadow-sm transition-all duration-300
                    md:bg-white md:hover:shadow-sm
                    
                    /* Mobile Styles */
                    bg-white md:bg-white border-t-4
                    ${index === 0 ? 'border-t-blue-400' : 
                      index === 1 ? 'border-t-amber-400' : 
                      index === 2 ? 'border-t-emerald-400' : 
                      'border-t-orange-400'}
                  `}
                >
                  {/* Icon Container - Larger on mobile */}
                  <div 
                    className={`
                      flex items-center justify-center mb-4 md:mb-3
                      w-16 h-16 md:w-11 md:h-11 rounded-full
                      
                      /* Mobile: Unique gradient backgrounds */
                      ${index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-50' : 
                        index === 1 ? 'bg-gradient-to-br from-amber-100 to-amber-50' : 
                        index === 2 ? 'bg-gradient-to-br from-emerald-100 to-emerald-50' : 
                        'bg-gradient-to-br from-orange-100 to-orange-50'}
                      
                      /* Desktop: Keep original gold color */
                      md:bg-gold/10
                    `}
                  >
                    <badge.icon 
                      className={`
                        text-gold
                        w-7 h-7 md:w-5 md:h-5
                      `} 
                    />
                  </div>

                  {/* Title - Larger on mobile */}
                  <h3 
                    className={`
                      font-heading font-semibold text-navy-dark mb-2 md:mb-1
                      text-base md:text-[15px]
                      leading-snug md:leading-tight
                    `}
                  >
                    {badge.title}
                  </h3>

                  {/* Description - Better readable on mobile */}
                  <p 
                    className={`
                      text-muted-foreground
                      text-sm md:text-[12px]
                      leading-relaxed md:leading-tight
                      line-clamp-3 md:line-clamp-2
                    `}
                  >
                    {badge.description}
                  </p>
                </div>
              </HoverCard>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
