import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import * as Icons from "lucide-react";
import { STATS } from "../data";

function DigitCounter({ target, suffix }: { target: number; suffix: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrentValue(target);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section id="stats-counter" className="py-16 md:py-20 bg-gradient-to-r from-cyan-900 to-slate-900 dark:from-navy-light dark:to-navy text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sky-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-light-teal/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, idx) => {
            const IconComponent = (Icons as any)[stat.icon] || Icons.TrendingUp;
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-3 p-4 bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10"
              >
                {/* Centered Floating Metric Icon */}
                <div className="mx-auto w-11 h-11 rounded-full bg-sky-blue/20 flex items-center justify-center text-sky-blue">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="space-y-1">
                  {/* Dynamic counting trigger */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
                    <DigitCounter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <p className="text-xs sm:text-sm font-manrope font-semibold text-slate-300 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
