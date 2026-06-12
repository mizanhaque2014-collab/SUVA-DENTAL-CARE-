import { motion } from "motion/react";
import { MessageSquare, Phone, Laptop, Clock, ShieldCheck, Check } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface ConsultationProps {
  openAppointmentModal: () => void;
}

export default function Consultation({ openAppointmentModal }: ConsultationProps) {
  const points = [
    "No long clinical queues",
    "Direct secure photo assessment",
    "Prescription advice on your smartphone",
    "Safe, confidential dental counsel"
  ];

  return (
    <section id="consultation" className="py-20 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main box */}
        <div className="bg-gradient-to-tr from-cyan-900 to-slate-900 dark:from-slate-800/80 dark:to-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
          
          {/* Backdrop blur nodes */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-light-teal/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-dental-blue/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left detailed col */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-sky-blue uppercase tracking-widest">
                <Laptop className="w-3.5 h-3.5" />
                <span>Virtual Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-white tracking-tight leading-tight">
                Get Dynamic Oral Guidance <br />
                <span className="text-sky-blue">Directly from Your Home</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xlLeading-relaxed">
                Cannot drop in physically today? No problem! Connect with Dr. Suva Salim Lee on WhatsApp to send tooth photographs, previous X-rays, or explain symptoms for quick, reliable clinical advice.
              </p>

              {/* USP Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Working Hours detail */}
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-manrope">
                <Clock className="w-4 h-4 text-sky-blue" />
                <span>Active consultation response: Daily 10:00 AM - 8:30 PM IST</span>
              </div>

            </div>

            {/* Right booking cards buttons */}
            <div className="lg:col-span-5 space-y-4">
              
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                    <MessageSquare className="w-5 h-5 fill-current text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-white">WhatsApp consultation</h3>
                    <p className="text-[11px] text-slate-300">Fast digital tooth evaluation & suggestions</p>
                  </div>
                </div>

                <a
                  id="consultation-wa-direct"
                  href={`https://wa.me/919433307652?text=Hello%20Suva%20Dental%20Care%2C%20I%20would%20like%20to%20consult%20Dr.%20Suva%20Salim%20Lee%20online.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-xl font-bold font-poppins transition-colors text-sm shadow-md"
                >
                  <span>Chat with Specialist</span>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/5 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-dental-blue text-white shadow-lg shadow-dental-blue/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-white">Direct Clinical Call</h3>
                    <p className="text-[11px] text-slate-400">Speak directly to +91 9433307652</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="consultation-call-now"
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-3 text-xs font-bold font-poppins transition-colors"
                  >
                    <span>Call Now</span>
                  </a>
                  <button
                    id="consultation-modal-trigger"
                    onClick={openAppointmentModal}
                    className="inline-flex items-center justify-center gap-1 bg-dental-blue hover:bg-dental-blue/90 text-white rounded-xl py-3 text-xs font-bold font-poppins transition-colors cursor-pointer"
                  >
                    <span>Request Slot</span>
                  </button>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
