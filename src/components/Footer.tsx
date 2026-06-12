import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart, Shield } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "../data";

interface FooterProps {
  openAppointmentModal: () => void;
}

export default function Footer({ openAppointmentModal }: FooterProps) {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Doctor", href: "#about-doctor" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Speciality Services", href: "#services" },
    { name: "Treatments Showcase", href: "#treatments" },
    { name: "Before & After", href: "#gallery" },
    { name: "FAQs", href: "#faq" },
    { name: "Locate Us", href: "#contact" }
  ];

  // Top 5 services for footer links
  const footerServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Upper CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-slate-900">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-10 bg-slate-900/40 rounded-3xl border border-slate-900/60 text-center lg:text-left">
          
          <div className="space-y-2">
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white tracking-tight">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-sm max-w-xl pr-2 text-slate-400">
              Book a personalized diagnostic consultation with Dr. Suva Salim Lee today. Direct WhatsApp appointment slots are waiting for you.
            </p>
          </div>

          <button
            onClick={openAppointmentModal}
            className="px-8 py-4 bg-dental-blue hover:bg-dental-blue/90 text-white font-poppins font-bold rounded-xl shadow-lg shadow-dental-blue/20 hover:scale-[1.02] active:scale-95 transition-all text-base cursor-pointer"
          >
            Schedule Slot Offline
          </button>

        </div>
      </div>

      {/* Main Grid Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-dental-blue text-white shadow-md">
                <Shield className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-white leading-none">
                  SUVA
                </span>
                <span className="font-manrope text-xs tracking-widest text-dental-blue font-bold leading-none mt-1">
                  DENTAL CARE
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Advanced multi speciality clinical setups delivering premium pain-free root canals, teeth whitening, and complete cosmetic smile transformations in Birshibpur, West Bengal.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Linkedin, href: "https://linkedin.com" }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-dental-blue hover:text-white text-slate-400 transition-colors"
                  aria-label="Social media account link"
                >
                  <soc.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-dental-blue hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Key Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-dental-blue transition-colors block truncate"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-dental-blue hover:underline font-bold text-xs">
                  + See all 15 services list
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
              Emergency Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              
              <li className="flex gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-dental-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  {CLINIC_INFO.address}
                </span>
              </li>

              <li className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-dental-blue shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white">
                  +91 9433307652
                </a>
              </li>

              <li className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-dental-blue shrink-0" />
                <a href="mailto:info@suvadentalcare.com" className="hover:text-white">
                  info@suvadentalcare.com
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-500 font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-light-teal" />
          <span>Dental Council Regulatory Verified Setup</span>
        </div>
        <div className="text-slate-500">
          ISO 9001:2015 Infection Control Compliant
        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="bg-slate-950 py-6 border-t border-slate-900/60 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            &copy; 2026 {CLINIC_INFO.name}. All Rights Reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-slate-600">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>by Dr. Suva Salim Lee. Suitable for Github & Hostinger.</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
