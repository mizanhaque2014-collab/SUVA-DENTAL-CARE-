import { motion } from "motion/react";
import { Check, Calendar, Clock, Smile } from "lucide-react";
import { TREATMENTS } from "../data";

interface TreatmentsProps {
  openAppointmentModalWithService: (serviceName: string) => void;
}

export default function Treatments({ openAppointmentModalWithService }: TreatmentsProps) {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white dark:bg-slate-900 scroll-mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-manrope font-bold text-light-teal dark:text-sky-blue uppercase tracking-widest bg-light-teal/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Signature Treatments Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Premium Healthcare Specialities
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            A closer look at how we personalize and manage key therapies with high-translucency crown installations and painless RCT workflows.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TREATMENTS.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-slate-50 dark:bg-slate-800/55 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-6 relative group overflow-hidden"
            >
              
              {/* Graphic container with overlay */}
              <div className="w-full lg:w-44 h-44 rounded-2xl overflow-hidden shrink-0 relative shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={treatment.image}
                  alt={treatment.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                {/* Micro Duration badge in image */}
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 shadow-md py-1 px-2.5 rounded-lg flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-dental-blue" />
                  <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">
                    {treatment.duration}
                  </span>
                </div>
              </div>

              {/* Textual column */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-slate-800 dark:text-white leading-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {treatment.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-light-teal shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer buttons of the card */}
                <div className="pt-4 mt-4 border-t border-slate-200/40 dark:border-slate-700/40 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-manrope font-bold text-slate-400">
                    Diagnostic Standard
                  </span>
                  <button
                    onClick={() => openAppointmentModalWithService(treatment.title)}
                    className="flex items-center gap-1.5 text-xs font-bold bg-dental-blue text-white py-2 px-3.5 rounded-xl hover:bg-dental-blue/90 shadow-sm shadow-dental-blue/10 transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire Now</span>
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
