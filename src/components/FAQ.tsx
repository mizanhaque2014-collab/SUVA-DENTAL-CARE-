import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, HelpCircle, ShieldAlert } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1"); // First one open by default

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 scroll-mt-6 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading Setup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Patients Common Concerns
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Got queries? We have compiled accurate clinical responses regarding root canals, custom aesthetic designs, and appointment integrations.
          </p>
        </div>

        {/* Accordions array */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-xs overflow-hidden transition-all"
              >
                {/* Trigger heading row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-slate-800 dark:text-white hover:text-dental-blue dark:hover:text-sky-blue transition-colors cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-4 flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-dental-blue dark:text-sky-blue shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-dental-blue shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Sliding collapsible answer copy */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed border-t border-slate-50 dark:border-slate-700/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small contact banner */}
        <div className="mt-10 p-4 rounded-2xl bg-dental-blue/5 dark:bg-sky-blue/5 border border-dental-blue/10 dark:border-sky-blue/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-dental-blue dark:text-sky-blue" />
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold font-manrope">
              Have deeper dental complications or need customized tooth extraction advice?
            </p>
          </div>
          <a
            href="tel:+919433307652"
            className="text-xs font-bold text-white bg-dental-blue px-4 py-2 rounded-xl shrink-0"
          >
            Direct Call Support
          </a>
        </div>

      </div>
    </section>
  );
}
