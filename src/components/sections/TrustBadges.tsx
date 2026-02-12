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
        <div className="trust-bridge-container">
          {/* SVG Connecting Lines and Lightning Effect */}
          <svg
            className="trust-bridge-svg"
            viewBox="0 0 300 260"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Top left to top right line */}
            <line x1="50" y1="60" x2="250" y2="60" stroke="url(#lightningGradient)" strokeWidth="4" className="connecting-line" />
            
            {/* Bottom left to bottom right line */}
            <line x1="50" y1="200" x2="250" y2="200" stroke="url(#lightningGradient)" strokeWidth="4" className="connecting-line" />

            {/* Left line connecting top and bottom */}
            <line x1="50" y1="60" x2="50" y2="200" stroke="url(#lightningGradient)" strokeWidth="4" className="connecting-line" />
            
            {/* Right line connecting top and bottom */}
            <line x1="250" y1="60" x2="250" y2="200" stroke="url(#lightningGradient)" strokeWidth="4" className="connecting-line" />

            {/* Diagonal cross lines */}
            <line x1="50" y1="60" x2="250" y2="200" stroke="url(#lightningGradient)" strokeWidth="3" className="connecting-line diagonal" opacity="0.6" />
            <line x1="250" y1="60" x2="50" y2="200" stroke="url(#lightningGradient)" strokeWidth="3" className="connecting-line diagonal" opacity="0.6" />

            {/* Lightning bolt effect through center */}
            <polyline points="150,30 155,80 145,120 160,160 155,200" stroke="url(#lightningGradient)" strokeWidth="3" fill="none" className="lightning-bolt" />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#d4a574", stopOpacity: 0.9 }} />
                <stop offset="50%" style={{ stopColor: "#f5d76e", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#d4a574", stopOpacity: 0.9 }} />
              </linearGradient>
            </defs>
          </svg>

          {/* Badge Cards in 2x2 Grid */}
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
    </section>
  );
}
