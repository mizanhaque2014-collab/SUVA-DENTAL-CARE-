import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { REASON_TO_CHOOSE } from "../data";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      {/* Subtle styling lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Setup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Our Dental Excellence Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Why Choose Suva Dental Care?
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Constructing stellar surgical smiles in Birshibpur, Uluberia with elite hygiene and reasonable rates.
          </p>
        </div>

        {/* Bento Grid layout of reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASON_TO_CHOOSE.map((reason, index) => {
            // Dynamically lookup the Lucide icon safely
            const IconComponent = (Icons as any)[reason.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-slate-900/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon wrapper badge */}
                  <div className="p-3 w-fit rounded-xl bg-dental-blue/5 dark:bg-sky-blue/5 text-dental-blue dark:text-sky-blue group-hover:bg-dental-blue group-hover:text-white transition-all shadow-xs mb-5">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-poppins font-bold text-slate-800 dark:text-white text-base tracking-wide mb-2 group-hover:text-dental-blue dark:group-hover:text-sky-blue transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                
                {/* Visual subtle micro design helper in card */}
                <div className="w-full h-1 bg-slate-50 dark:bg-slate-700/50 rounded-full group-hover:bg-gradient-to-r group-hover:from-dental-blue group-hover:to-light-teal mt-6 transition-all" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
