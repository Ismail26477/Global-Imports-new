import { Shield, Award, Globe, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
  },
];

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                <badge.icon className="w-5 h-5 text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-[15px] text-navy-dark mb-1">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] leading-tight text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
