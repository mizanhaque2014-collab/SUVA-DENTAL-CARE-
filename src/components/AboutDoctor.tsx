import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle, Heart, Phone, Shield } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function AboutDoctor() {
  const { doctor } = CLINIC_INFO;

  return (
    <section id="about-doctor" className="py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Setup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-dental-blue/10 dark:bg-sky-blue/15 rounded-full text-xs font-bold text-dental-blue dark:text-sky-blue uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Chief Dental Surgeon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white tracking-tight">
            Meet Our Founder & Specialist
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Highly experienced treatment provider using modern clinical workflows in West Bengal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Elegant Photo Column */}
          <div className="lg:col-span-5 relative block">
            <div className="relative mx-auto max-w-sm">
              
              {/* Glow Accents */}
              <div className="absolute top-10 -left-10 w-44 h-44 rounded-full bg-dental-blue/15 dark:bg-dental-blue/10 blur-2xl animate-pulse-slow" />
              <div className="absolute bottom-10 -right-10 w-44 h-44 rounded-full bg-light-teal/15 dark:bg-light-teal/10 blur-2xl animate-pulse-slow" />

              {/* Doctor Headshot Frame with Gold/Cyan premium border effect */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-xl"
              >
                {/* Replaceable slot wrapper */}
                <div className="relative bg-slate-200 dark:bg-slate-700 aspect-square rounded-xl overflow-hidden shadow-inner">
                  <img
                    className="w-full h-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
                    alt="Dr. Suva Salim Lee, B.D.S"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gentle shadow overlay with qualification */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sky-blue leading-none">Qualification</span>
                    <h4 className="font-poppins font-bold text-lg leading-none mt-1">B.D.S (W.B.U.H.S)</h4>
                    <p className="text-[11px] text-slate-300 mt-1">West Bengal University of Health Sciences</p>
                  </div>
                </div>

                {/* Micro badges on Photo */}
                <div className="absolute top-6 right-6 bg-amber-500 text-white p-2.5 rounded-xl shadow-md flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
              </motion.div>

              <div className="mt-3 text-center">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                  [Easy Replace: Drag and drop replacement photo for dr_suva.jpg here]
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Information Bio Block */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Title Card */}
            <div>
              <span className="text-sm font-manrope font-bold text-light-teal dark:text-sky-blue uppercase tracking-widest">
                {doctor.role}
              </span>
              <h3 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white mt-1 leading-tight">
                {doctor.name}
              </h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-dental-blue" />
                <span>Bachelor of Dental Surgery — BDS (W.B.U.H.S)</span>
              </p>
            </div>

            {/* Main Long Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {doctor.description}
            </p>

            {/* Highlights Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-poppins font-bold uppercase tracking-widest text-slate-400 mb-3">
                Signature Clinical Qualities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doctor.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-2.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle className="w-5 h-5 text-light-teal shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Signature Quote and Contact Action Footer inside bio */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-rose-500/10 text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">Compassionate Care</p>
                  <p className="text-sm font-poppins font-bold text-slate-800 dark:text-slate-200">Patient-First Philosophy</p>
                </div>
              </div>

              <a
                id="doctor-contact-shortcut"
                href="tel:+919433307652"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold rounded-lg transition-all"
              >
                <Phone className="w-4 h-4 text-dental-blue" />
                <span>Contact Dr. Lee directly</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
