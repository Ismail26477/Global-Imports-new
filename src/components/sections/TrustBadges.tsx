import { Shield, Award, Globe, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
  },
];

export function TrustBadges() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base font-semibold text-blue-600 mb-2 tracking-wide uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-navy-dark via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Industry-Leading Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by businesses worldwide with proven reliability and exceptional service standards
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group relative h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

              {/* Card Content */}
              <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 relative`}>
                  {/* Animated Ring Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-50 animate-pulse"></div>
                  <badge.icon className={`w-8 h-8 bg-gradient-to-br ${badge.gradient} bg-clip-text text-transparent`} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-navy-dark mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {badge.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${badge.gradient} rounded-full transition-all duration-500`}></div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-1 h-12 bg-gradient-to-b ${badge.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
            Learn More About Us
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
