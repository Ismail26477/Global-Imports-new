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
    <section className="py-8 bg-amber-50 md:bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Mobile View - Cross Layout */}
        <div className="md:hidden relative w-full max-w-sm mx-auto">
          {/* SVG for connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: "500px" }}
          >
            {/* Horizontal line */}
            <line
              x1="50%"
              y1="45%"
              x2="50%"
              y2="55%"
              stroke="#8B5A3C"
              strokeWidth="4"
            />
            {/* Vertical line */}
            <line
              x1="45%"
              y1="50%"
              x2="55%"
              y2="50%"
              stroke="#8B5A3C"
              strokeWidth="4"
            />
          </svg>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {badges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-bold text-sm text-amber-900 mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs leading-tight text-gray-600">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View - Original Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4">
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
      </div>
    </section>
  );
}
