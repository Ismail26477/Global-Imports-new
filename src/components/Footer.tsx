import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

const servicesLinks = [
  { name: "Global Sourcing", to: "/services/global-sourcing" },
  { name: "Export Management", to: "/services/export-management" },
  { name: "Import Compliance", to: "/services/import-compliance" },
  { name: "Logistics & Freight", to: "/services/logistics-freight" },
  { name: "Quality Inspection", to: "/services/quality-inspection" },
];

const teamContacts = [
  { name: "Vimal Gandhi", phone: "+91 9823050721" },
  { name: "Aakash Gandhi", phone: "+91 9011675477" },
  { name: "Prithvi Gandhi", phone: "+91 8168619911" },
  { name: "Sagar Gandhi", phone: "+91 8830783396" },
];

export function Footer() {
  return (
    <footer className="bg-[#af8f6f] text-[#5A3A22]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo18.png"
              alt="Global Imports Logo"
              className="h-16 md:h-20 w-auto object-contain mb-4 md:mb-6"
            />
            <p className="mb-6 text-sm md:text-base text-[#5A3A22]/90 leading-relaxed">
              Connecting Indian businesses with trusted manufacturers worldwide since 2008.
              Your reliable partner for global trade solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm md:text-base text-[#5A3A22] hover:text-[#E6C79C] transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Our Services</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="text-sm md:text-base text-[#5A3A22] hover:text-[#E6C79C] transition-colors duration-300 cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
            <div className="space-y-3 md:space-y-4">
              <a
                href="mailto:globalimportsworldwide@gmail.com"
                className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5A3A22] hover:text-[#E6C79C] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0" />
                <span className="break-all">globalimportsworldwide@gmail.com</span>
              </a>

              <a
                href="tel:+919270109911"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-[#5A3A22] hover:text-[#E6C79C] transition-colors duration-300"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>+91 9270109911</span>
              </a>

              <div className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5A3A22]/90">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>

             {/* Contact Our Team - Full Width Premium Section */}
<div className="mt-16">
  <div className="bg-[#f5ede4] rounded-2xl px-6 md:px-12 py-10 shadow-inner">
    <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-[#5A3A22] mb-10">
      Contact Our Team
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamContacts.map((contact) => {
        const initials = contact.name
          .split(" ")
          .map((n) => n[0])
          .join("");

        return (
          <a
            key={contact.name}
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="group bg-white rounded-2xl p-6 flex items-center gap-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Initials Circle */}
            <div className="w-14 h-14 rounded-full bg-[#5A3A22] text-white flex items-center justify-center text-lg font-bold group-hover:scale-110 transition">
              {initials}
            </div>

            {/* Text */}
            <div>
              <p className="text-lg font-semibold text-[#5A3A22]">
                {contact.name}
              </p>
              <p className="text-sm text-[#5A3A22]/70">
                {contact.phone}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  </div>
</div>


            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#5A3A22]/30">
        <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center">
          <p className="text-[#5A3A22]/80 text-xs md:text-sm text-center md:text-left">
            © 2026 Global Imports Nagpur. All rights reserved.
          </p>
          <p className="text-[#5A3A22]/80 text-xs md:text-sm text-center">
            16+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
