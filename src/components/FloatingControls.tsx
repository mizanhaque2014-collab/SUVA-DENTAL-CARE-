import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, ArrowUp, Calendar } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface FloatingControlsProps {
  openAppointmentModal: () => void;
}

export default function FloatingControls({ openAppointmentModal }: FloatingControlsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id="floating-interaction-panel" className="fixed inset-0 pointer-events-none z-45">
      
      {/* 1. Left-Side Call Button (Fixed Bottom-Left) */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative group"
        >
          {/* Animated pulse waves */}
          <div className="absolute -inset-2 bg-rose-500 rounded-full opacity-40 blur-sm animate-ping" />
          
          <a
            id="floating-emergency-tel-btn"
            href={`tel:${CLINIC_INFO.phone}`}
            className="relative flex items-center justify-center w-14 h-14 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/35 hover:bg-rose-600 transition-colors cursor-pointer"
            title="Emergency Call Hotline"
          >
            <Phone className="w-6 h-6 animate-bounce" />
          </a>

          {/* Hover helper text */}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-rose-950 text-white text-[10px] font-bold uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Emergency Call Now
          </span>
        </motion.div>
      </div>

      {/* 2. Right-Side Buttons Column (Fixed Bottom-Right) */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-3.5 pointer-events-auto items-end">
        
        {/* Scroll-to-Top Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-slate-900/90 dark:bg-slate-800 text-white shadow-lg border border-slate-800 dark:border-slate-700 hover:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer transition-all hover:-translate-y-0.5 active:scale-95"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Deep-Link Button */}
        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative flex items-center group"
        >
          {/* Pulsing ring */}
          <div className="absolute -inset-2.5 bg-[#25D366] rounded-full opacity-20 animate-pulse-slow pointer-events-none" />
          <div className="absolute -inset-1 bg-[#25D366] rounded-full opacity-40 blur-xs animate-ping pointer-events-none" style={{ animationDuration: '3.5s' }} />

          {/* Persistent premium soft reminder pill */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute right-18 mr-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-800 backdrop-blur-md border border-emerald-500/30 text-white text-[11px] font-bold tracking-wide shadow-xl flex items-center gap-1.5 pointer-events-none whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </motion.div>

          <a
            id="floating-whatsapp-chat-btn"
            href={`https://wa.me/919433307652?text=Hello%20Suva%20Dental%20Care%2C%20I%20would%20like%20to%20consult%20or%20book%20an%20appointment.`}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center w-15 h-15 bg-[#25D366] hover:bg-[#128C7E] active:scale-95 text-white rounded-full shadow-xl shadow-emerald-600/35 cursor-pointer transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <svg 
              className="w-8 h-8 fill-white text-white" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.419 9.86-9.86.002-2.636-1.02-5.115-2.879-6.978-1.859-1.861-4.338-2.885-6.977-2.886-5.438 0-9.862 4.42-9.865 9.862-.001 1.79.484 3.541 1.405 5.093l-.974 3.565 3.653-.957zm11.93-5.234c-.266-.134-1.58-.78-1.823-.867-.243-.088-.419-.133-.596.134-.176.265-.681.864-.834 1.04-.153.178-.306.198-.573.065-.268-.134-1.129-.417-2.152-1.331-.794-.709-1.332-1.586-1.488-1.854-.157-.267-.017-.411.118-.544.12-.121.267-.312.4-.469.133-.156.177-.267.266-.446.089-.178.044-.334-.022-.468-.066-.134-.596-1.436-.816-1.968-.215-.519-.452-.449-.623-.458-.16-.008-.344-.01-.529-.01-.185 0-.486.07-.741.347-.255.278-.973.952-.973 2.321 0 1.369 1 2.691 1.139 2.878.14.187 1.967 3.003 4.767 4.21 1.32.57 2.072.76 2.825.688.814-.121 2.502-1.023 2.85-2.012.349-.988.349-1.834.244-2.012-.104-.178-.266-.265-.533-.398z" />
            </svg>
          </a>

          {/* Hover helper text */}
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-emerald-950 text-white text-[10px] font-bold uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Direct WhatsApp Chat
          </span>
        </motion.div>

        {/* Book Appointment Floating Action */}
        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
          className="relative flex items-center group"
        >
          {/* Pulsing ring */}
          <div className="absolute -inset-2.5 bg-sky-500 rounded-full opacity-20 animate-pulse-slow pointer-events-none" />
          <div className="absolute -inset-1 bg-sky-400 rounded-full opacity-40 blur-xs animate-ping pointer-events-none" style={{ animationDuration: '3.1s' }} />

          {/* Persistent premium soft reminder pill */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute right-18 mr-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-800 backdrop-blur-md border border-sky-500/30 text-white text-[11px] font-bold tracking-wide shadow-xl flex items-center gap-1.5 pointer-events-none whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Book Appointment</span>
          </motion.div>

          <button
            id="floating-book-appointment-btn"
            onClick={openAppointmentModal}
            className="relative flex items-center justify-center w-15 h-15 bg-gradient-to-tr from-dental-blue to-sky-500 hover:brightness-110 active:scale-95 text-white rounded-full shadow-xl shadow-sky-500/25 border border-white/10 cursor-pointer transition-all duration-300"
            title="Book Online Appointment"
          >
            <Calendar className="w-6.5 h-6.5" />
          </button>

          {/* Hover helper text */}
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-950 text-white text-[10px] font-bold uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Online Appointments
          </span>
        </motion.div>

      </div>

    </div>
  );
}
