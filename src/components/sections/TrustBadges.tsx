import { Shield, Award, Globe, Truck } from "lucide-react";
import "./TrustBadges.css";

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
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                <badge.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-[15px] text-navy-dark mb-1">
                {badge.title}
              </h3>
              <p className="text-[12px] leading-tight text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View with Connecting Lines and Lightning Effect */}
        <div className="md:hidden">
          <div className="trust-bridge-container">
            {/* SVG Lines and Lightning Effect */}
            <svg
              className="trust-bridge-svg"
              viewBox="0 0 300 400"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Horizontal connecting lines */}
              <line x1="75" y1="80" x2="225" y2="80" stroke="url(#lightningGradient)" strokeWidth="2" className="connecting-line" />
              <line x1="75" y1="320" x2="225" y2="320" stroke="url(#lightningGradient)" strokeWidth="2" className="connecting-line" />

              {/* Vertical connecting lines */}
              <line x1="75" y1="80" x2="75" y2="320" stroke="url(#lightningGradient)" strokeWidth="2" className="connecting-line" />
              <line x1="225" y1="80" x2="225" y2="320" stroke="url(#lightningGradient)" strokeWidth="2" className="connecting-line" />

              {/* Diagonal cross lines */}
              <line x1="75" y1="80" x2="225" y2="320" stroke="url(#lightningGradient)" strokeWidth="1.5" className="connecting-line diagonal" opacity="0.6" />
              <line x1="225" y1="80" x2="75" y2="320" stroke="url(#lightningGradient)" strokeWidth="1.5" className="connecting-line diagonal" opacity="0.6" />

              {/* Lightning effect lines */}
              <line x1="150" y1="60" x2="155" y2="110" stroke="url(#lightningGradient)" strokeWidth="1.5" className="lightning-bolt" />
              <line x1="155" y1="110" x2="148" y2="150" stroke="url(#lightningGradient)" strokeWidth="1.5" className="lightning-bolt" />
              <line x1="148" y1="150" x2="158" y2="200" stroke="url(#lightningGradient)" strokeWidth="1.5" className="lightning-bolt" />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#d4a574", stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: "#f5d76e", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#d4a574", stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
            </svg>

            {/* Badge Cards Grid */}
            <div className="trust-bridge-grid">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="trust-badge-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="badge-icon-wrapper">
                    <badge.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="badge-title">{badge.title}</h3>
                  <p className="badge-description">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
