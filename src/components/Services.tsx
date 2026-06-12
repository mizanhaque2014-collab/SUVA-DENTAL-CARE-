import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Search, Info, HelpCircle } from "lucide-react";

interface ServicesProps {
  openAppointmentModalWithService: (serviceName: string) => void;
}

export default function Services({ openAppointmentModalWithService }: ServicesProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "preventive" | "restorative" | "cosmetic">("all");

  // Helper categorization tags for search refinement
  const getCategory = (id: string): string => {
    if (["checkup", "cleaning", "pediatric"].includes(id)) return "preventive";
    if (["extraction", "rct", "fillings", "crowns", "bridge", "dentures", "gum", "emergency"].includes(id)) return "restorative";
    if (["whitening", "braces", "cosmetic", "smile_design"].includes(id)) return "cosmetic";
    return "preventive";
  };

  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || getCategory(service.id) === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: "all", label: "All Services" },
    { value: "preventive", label: "Preventive Care" },
    { value: "restorative", label: "Restorations & Pain Care" },
    { value: "cosmetic", label: "Aesthetic & Orthodontics" }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/45 scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Our Dental Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Advanced Multi Speciality Treatments
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Explore 15 distinct treatments targeting standard preventive dentistry, cosmetic aesthetics, and high-precision restorative surgeries.
          </p>
        </div>

        {/* Search Bar & Categories Navigation */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          
          {/* Quick-Filter categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  activeCategory === cat.value
                    ? "bg-dental-blue text-white shadow-md shadow-dental-blue/15"
                    : "bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar widget */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all"
            />
          </div>

        </div>

        {/* Dynamic Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              // Ensure proper icons mapping with dynamic lookup
              const IconComponent = (Icons as any)[service.iconName] || Icons.Square;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    {/* Header: Service icon with category badge */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 w-fit rounded-xl bg-dental-blue/10 dark:bg-sky-blue/10 text-dental-blue dark:text-sky-blue group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-poppins px-2 py-1 bg-slate-50 dark:bg-slate-700 rounded-md">
                        {getCategory(service.id)}
                      </span>
                    </div>

                    {/* Service copy */}
                    <div className="space-y-1.5">
                      <h3 className="font-poppins font-bold text-slate-800 dark:text-white text-base sm:text-lg">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Booking CTA trigger buttons */}
                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <button
                      onClick={() => openAppointmentModalWithService(service.title)}
                      className="text-xs sm:text-sm font-bold text-dental-blue dark:text-sky-blue hover:text-dental-blue/80 dark:hover:text-sky-blue/80 flex items-center gap-1 group/btn focus:outline-none"
                    >
                      <span>Book Slot</span>
                      <Icons.ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      Safe Clinic Care
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State handler */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="font-poppins font-bold text-lg text-slate-700 dark:text-slate-300">
              No matching clinical services found
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 max-w-md mx-auto">
              Please enter another keyword or select a different category to explore Suva Dental Care's specialities.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-4 text-xs font-bold bg-dental-blue text-white px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
