import { useMemo } from "react";
import { motion } from "motion/react";
import { MessageSquare, Calendar, Star, Award, ShieldCheck, Check, Sparkles, Activity, Shield } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface HeroProps {
  openAppointmentModal: () => void;
}

export default function Hero({ openAppointmentModal }: HeroProps) {
  // Stable particle coordinates to avoid jumping/flickering on component re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5,
      x: Math.random() * 96 + 2,
      y: Math.random() * 90 + 5,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * -12, // Negative delay so particles start distributed across coordinates immediately
      color: i % 3 === 0
        ? "bg-sky-400/25 dark:bg-sky-400/20"
        : i % 3 === 1
        ? "bg-teal-400/20 dark:bg-teal-400/15"
        : "bg-white/30 dark:bg-white/10"
    }));
  }, []);

  // Generate background glass prisms elements
  const prismElements = [
    { size: "hidden sm:block w-24 h-24 lg:w-40 lg:h-40", top: "12%", left: "6%", delay: 0, rotate: 15, duration: 9 },
    { size: "hidden md:block w-32 h-32 lg:w-56 lg:h-56", top: "55%", left: "12%", delay: 1.5, rotate: -20, duration: 12 },
    { size: "hidden sm:block w-24 h-24 lg:w-44 lg:h-44", top: "18%", right: "8%", delay: 0.8, rotate: 35, duration: 10 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 xs:pt-32 pb-12 sm:pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Target element for the CSS selector of the hero section with a blurred orbiting light mesh background */}
      <div id="hero-section" className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Animated Secondary Background Light Mesh */}
        <div className="absolute inset-0 opacity-45 dark:opacity-60 mix-blend-screen pointer-events-none">
          <motion.div
            className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] origin-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Ambient High-End Medical / Dental Glow Nodes */}
            <div className="absolute top-[20%] left-[25%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#0e82ce]/25 via-teal-400/10 to-transparent blur-[140px]" />
            <div className="absolute bottom-[20%] right-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-sky-300/20 via-[#0e82ce]/15 to-transparent blur-[150px]" />
            <div className="absolute top-[40%] right-[15%] w-[42%] h-[42%] rounded-full bg-gradient-to-bl from-teal-300/20 via-sky-300/10 to-transparent blur-[130px]" />
            <div className="absolute bottom-[40%] left-[15%] w-[38%] h-[38%] rounded-full bg-gradient-to-tr from-[#0e82ce]/15 via-emerald-400/10 to-transparent blur-[120px]" />
          </motion.div>
        </div>
      </div>

      {/* 1. LUXURIOUS ULTRA-HD CLINIC BACKGROUND INTERIOR WITH KINETIC DEPTH AND REFRACTION */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full max-w-full select-none pointer-events-none">
        
        {/* Clinically matching Ultra-HD modern private dental hospital interior (High-tech operatory room) */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-[position:65%_center] sm:bg-[position:center_45%] brightness-[0.93] dark:brightness-[0.42] transition-all duration-1000 will-change-transform"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2400')`
          }}
          aria-hidden="true"
        />

        {/* Ambient moving LED surgical operating glow lights */}
        <motion.div 
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0e82ce]/15 dark:bg-[#0e82ce]/20 blur-[130px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            x: [15, -15, 15],
            y: [15, -15, 15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/5 right-1/4 w-[500px] h-[500px] rounded-full bg-light-teal/10 dark:bg-light-teal/15 blur-[110px] mix-blend-screen" 
        />
        
        {/* Dual High-Contrast Protection Gradients (Keeping UHD imagery visible while ensuring perfect text contrast) */}
        {/* Horizontal overlay for desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/72 to-transparent dark:from-slate-950/90 dark:via-slate-950/72 dark:to-transparent hidden lg:block" />
        {/* Vertical overlay for mobile/tablet — slightly stronger backup opacity for supreme text accessibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/94 via-slate-50/80 to-slate-50 dark:from-slate-950/94 dark:via-slate-950/80 dark:to-slate-950 lg:hidden block" />

        {/* Interactive Floating Glass Refraction Lenses & Prism matrices */}
        {prismElements.map((prism, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: prism.delay,
            }}
            className={`absolute ${prism.size} border border-white/25 dark:border-white/10 rounded-[32px] bg-gradient-to-br from-white/15 via-white/5 to-white/0 dark:from-slate-900/15 dark:via-slate-900/5 dark:to-slate-900/0 backdrop-blur-[10px] shadow-2xl pointer-events-none`}
            style={{
              top: prism.top,
              left: prism.left,
              right: prism.right,
              transform: `rotate(${prism.rotate}deg)`,
              willChange: "transform",
            }}
          >
            {/* Spectral Chromatic Aberration / Refraction Glow */}
            <motion.div 
              className="absolute -inset-1 rounded-[33px] bg-gradient-to-tr from-sky-400/10 via-fuchsia-400/5 to-teal-400/10 blur-[4px] mix-blend-overlay"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: prism.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Slow cinematic refractive light shift sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-[31px]"
              animate={{
                backgroundPosition: ["0% 0%", "200% 200%", "0% 0%"],
              }}
              transition={{
                duration: prism.duration * 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Inner glass bevel reflection effect */}
            <div className="absolute inset-px rounded-[31px] border border-white/15" />
          </motion.div>
        ))}

        {/* Cinematic Particles Layer */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -180, 0],
              opacity: [0.15, 0.85, 0.15],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* Rotating Dental Icon Ornaments */}
        <motion.div
          className="absolute top-[22%] right-[12%] text-dental-blue/15 dark:text-sky-blue/5 pointer-events-none hidden xl:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-[18%] left-[7%] text-light-teal/15 dark:text-light-teal/5 pointer-events-none hidden xl:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <Activity className="w-14 h-14" />
        </motion.div>

      </div>

      {/* 2. PERSISTENT FLOATING PREMIUM BADGES (Sway subtly around screen, desktop only) */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        
        {/* ⭐ Trusted Dental Care */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[16%] left-[4%] hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 pointer-events-auto hover:border-dental-blue dark:hover:border-sky-blue hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span className="text-amber-500 font-bold">⭐</span>
          <span>Trusted Dental Care</span>
        </motion.div>

        {/* 🦷 Modern Equipment */}
        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[52%] left-[44%] hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 pointer-events-auto hover:border-dental-blue dark:hover:border-sky-blue hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span>🦷</span>
          <span>Modern Equipment</span>
        </motion.div>

        {/* 🏥 Multi Speciality Clinic */}
        <motion.div
          animate={{ y: [0, -7, 0], x: [0, -7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[22%] left-[38%] hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 pointer-events-auto hover:border-dental-blue dark:hover:border-sky-blue hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span>🏥</span>
          <span>Multi Speciality Clinic</span>
        </motion.div>

        {/* 😊 Happy Smiles */}
        <motion.div
          animate={{ y: [0, 11, 0], x: [0, 7, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[16%] right-[6%] hidden md:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 pointer-events-auto hover:border-dental-blue dark:hover:border-sky-blue hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span>😊</span>
          <span>Happy Smiles</span>
        </motion.div>

      </div>

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center">
          
          {/* ================== CENTERED HERO CONTENT ================== */}
          <div className="w-full max-w-4xl space-y-7 text-center flex flex-col items-center">
            
            {/* Elegant Clinic Label & Top Badge Stack */}
            <div className="flex flex-col items-center gap-4">
              
              {/* BRAND TEXT MARK */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/[0.04] dark:bg-white/[0.04] border border-slate-900/[0.08] dark:border-white/[0.08]"
              >
                <div className="p-1.5 rounded-lg bg-dental-blue text-white shadow-sm">
                  <Shield className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-poppins font-black text-xs tracking-[0.15em] text-[#0e82ce] dark:text-sky-blue leading-none uppercase">
                  SUVA DENTAL CARE
                </span>
              </motion.div>

            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-poppins font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] sm:leading-[1.08]"
            >
              Your Smile, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-blue via-sky-blue to-light-teal dark:from-sky-blue dark:via-light-teal dark:to-teal-400 drop-shadow-xs">
                Our Absolute Priority
              </span>
            </motion.h1>

            {/* Luxurious High-Grade Modern Dental Clinic Picture with Premium Glass Prism Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0],
                x: [0, -2, 0]
              }}
              transition={{ 
                duration: 12, 
                delay: 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/25 dark:border-white/10 shadow-2xl group cursor-pointer"
            >
              {/* Cinematic glass shine sweep on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none z-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                style={{ width: "220%" }}
              />

              {/* Slow cinematic refractive light shift overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-400/5 to-transparent pointer-events-none z-20"
                animate={{
                  backgroundPosition: ["0% 0%", "200% 200%", "0% 0%"],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* High-Resolution Modern Clinic Interior Image */}
              <div className="relative aspect-[16/10] xs:aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-[1800ms] group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Suva Dental state-of-the-art modern clinical dental chair unit with digital tools"
                  referrerPolicy="no-referrer"
                />
                
                {/* Immersive overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none" />

                {/* Glass Prism badging inside the image */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg sm:rounded-xl border border-white/10 flex items-center gap-1.5 shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-blue animate-pulse" />
                  <span className="text-[8px] sm:text-[9.5px] text-sky-200 font-bold uppercase tracking-widest font-mono">
                    STERILE OPERATORY ZONE
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex flex-col xs:flex-row xs:items-end justify-between gap-2.5">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none font-mono mb-1 sm:mb-1.5">
                      Premium Diagnostic Suite
                    </span>
                    <h4 className="font-poppins font-black text-[11px] xs:text-xs sm:text-sm text-white leading-tight tracking-wide text-shadow-sm">
                      State-of-the-Art German Clinical Equipment
                    </h4>
                  </div>

                  <span className="self-start xs:self-auto shrink-0 text-[8px] xs:text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-500/20 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-emerald-500/30 font-bold uppercase tracking-wider font-mono">
                    Active ISO 9001
                  </span>
                </div>
              </div>

              {/* Thin bottom accent reflecting the glass prism effect */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-dental-blue via-sky-blue to-light-teal opacity-60" />
            </motion.div>

            {/* Trust Indicators (2x2 Grid Layout optimized for mobile & desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-lg mx-auto pt-2"
            >
              {[
                { label: "100% Sterile Setup", icon: ShieldCheck },
                { label: "Advanced Tech", icon: Sparkles },
                { label: "Family Dental Care", icon: Award },
                { label: "Cosmetic Service", icon: Star }
              ].map((indicator, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/5 shadow-xs hover:border-dental-blue/30 dark:hover:border-sky-blue/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {indicator.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Primary & Secondary Call To Action Buttons - responsive targets */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 w-full max-w-md mx-auto sm:max-w-none"
            >
              {/* Primary Appointment Button */}
              <button
                id="hero-book-now"
                onClick={openAppointmentModal}
                className="w-full sm:w-auto relative group overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-dental-blue to-sky-blue hover:from-dental-blue/95 hover:to-sky-blue/95 text-white font-poppins font-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-dental-blue/30 hover:scale-[1.02] active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                {/* Frosted Glass reflection transition on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ width: "200%" }}
                />
                
                <Calendar className="w-4.5 h-4.5 shrink-0" />
                <span>Book Appointment</span>
              </button>

              {/* Secondary WhatsApp Button */}
              <a
                id="hero-whatsapp-now"
                href="https://wa.me/919433307652?text=Hello%20Suva%20Dental%20Care%2C%20I%20would%20like%20to%20consult%20or%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                {/* Glow ring backing */}
                <div className="absolute inset-0 rounded-xl bg-emerald-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                
                <MessageSquare className="w-4.5 h-4.5 fill-white text-emerald-600 shrink-0" />
                <span>WhatsApp Now</span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
