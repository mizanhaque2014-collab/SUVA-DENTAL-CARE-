import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // changes every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handlePrev = () => {
    resetTimeout();
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Decorative quotes graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 dark:text-slate-800/10 font-bold select-none pointer-events-none text-[200px] leading-none z-0">
        “
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Patient Satisfaction Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Loved By Our Patients
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Slot Box */}
        <div className="relative p-6 sm:p-10 md:p-12 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-md">
          
          {/* Quote top emblem */}
          <div className="absolute -top-6 left-12 w-12 h-12 rounded-2xl bg-dental-blue text-white shadow-lg shadow-dental-blue/20 flex items-center justify-center">
            <Quote className="w-5 h-5 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: -15, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              
              {/* Star rating output */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl font-poppins font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">
                "{current.text}"
              </blockquote>

              {/* Person bio row */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/60">
                {/* Simulated professional avatar based on sex */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dental-blue/10 dark:bg-sky-blue/10 flex items-center justify-center text-dental-blue dark:text-sky-blue shrink-0 border border-slate-200 dark:border-slate-700">
                  {current.gender === "female" ? (
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="patient profile image" referrerPolicy="no-referrer" />
                  ) : (
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="patient profile image" referrerPolicy="no-referrer" />
                  )}
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-slate-900 dark:text-white text-base">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold font-manrope">
                    Patient from {current.location} • <span className="text-dental-blue dark:text-sky-blue">{current.treatment} Case</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav arrows right bottom */}
          <div className="absolute right-6 bottom-6 flex items-center gap-2 z-10">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-600 shadow-xs cursor-pointer transition-colors"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-600 shadow-xs cursor-pointer transition-colors"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Small Slider Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                resetTimeout();
                setIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === idx ? "w-6 bg-dental-blue" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
