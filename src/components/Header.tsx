import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, Phone, Calendar, Moon, Sun, Shield } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  openAppointmentModal: () => void;
}

export default function Header({ darkMode, setDarkMode, openAppointmentModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Doctor", href: "#about-doctor" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Services", href: "#services" },
    { name: "Treatments", href: "#treatments" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-md py-3 dark:shadow-slate-900/40" : "bg-transparent py-5"
      }`}
    >
      {/* Premium Slim Scroll Progress Bar */}
      <motion.div
        id="header-scroll-progress"
        className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-dental-blue via-sky-blue to-light-teal origin-left z-50 pointer-events-none shadow-[0_1px_8px_rgba(112,195,252,0.4)]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            id="logo-brand-anchor"
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="p-2 rounded-xl bg-dental-blue text-white shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-slate-800 dark:text-white leading-none">
                SUVA
              </span>
              <span className="font-manrope text-xs tracking-widest text-dental-blue font-bold leading-none mt-1">
                DENTAL CARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-menubar" className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-sans font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-dental-blue dark:hover:text-sky-blue transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-dental-blue dark:after:bg-sky-blue hover:after:w-full after:transition-all focus:outline-none"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions panel */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Icon */}
            <button
              id="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
            </button>

            {/* Emergency Hotline */}
            <a
              id="header-urgency-phone"
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm font-semibold border border-slate-200/50 dark:border-slate-700/50"
            >
              <Phone className="w-4 h-4 text-dental-blue animate-bounce" />
              <span>+91 9433307652</span>
            </a>

            {/* Appointment Trigger */}
            <button
              id="header-cta-appointment"
              onClick={openAppointmentModal}
              className="flex items-center gap-2 bg-dental-blue text-white px-5 py-2.5 rounded-lg hover:bg-dental-blue/90 shadow-md shadow-dental-blue/20 transition-all text-sm font-bold active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Tablet/Mobile Action Panel bar */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Dark Mode Icon */}
            <button
              id="theme-toggle-mobile-trigger"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              id="mobile-menu-burger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-b border-slate-200/50 dark:border-slate-800/50 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-dental-blue/10 hover:text-dental-blue dark:hover:bg-sky-blue/10 dark:hover:text-sky-blue transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-col sm:flex-row gap-3">
                <a
                  id="mobile-drawer-tel"
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-bold w-full"
                >
                  <Phone className="w-4 h-4 text-dental-blue" />
                  <span>Call: +91 9433307652</span>
                </a>
                <button
                  id="mobile-drawer-book"
                  onClick={() => {
                    setIsOpen(false);
                    openAppointmentModal();
                  }}
                  className="flex items-center justify-center gap-2 bg-dental-blue text-white py-3 rounded-xl font-bold w-full shadow-lg shadow-dental-blue/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
