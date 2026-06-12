import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles } from "lucide-react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // fade out after 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="splash-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-slate-950 flex flex-col items-center justify-center text-white"
        >
          {/* Ambient background blur circles */}
          <div className="absolute top-1/3 left-1/4 w-60 h-60 rounded-full bg-dental-blue/20 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-light-teal/20 blur-3xl" />

          <div className="relative text-center space-y-6 z-10">
            {/* Pulsing Logo ring */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-dental-blue to-light-teal p-0.5 flex items-center justify-center shadow-2xl shadow-dental-blue/30"
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Shield className="w-9 h-9 text-sky-blue" />
              </div>
            </motion.div>

            {/* Typography brand names */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-poppins font-black tracking-widest text-white leading-none"
              >
                SUVA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs uppercase font-manrope font-bold tracking-widest text-sky-blue leading-none mt-2"
              >
                Dental Care Clinic
              </motion.p>
            </div>

            {/* Simulated progress slider line */}
            <div className="w-44 h-1 bg-white/15 rounded-full mx-auto relative overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-sky-blue to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] font-mono tracking-wider uppercase text-slate-400"
            >
              Initializing sterile environments...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
