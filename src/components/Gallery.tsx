import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Eye, ZoomIn, X, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "clinic" | "before-after" | "treatment">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY.filter((item) => filter === "all" || item.category === filter);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/55 scroll-mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Before & After Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Transformed Oral Healthcare
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Inspect real results achieved by Dr. Suva Salim Lee. Toggle categories below to view either clinical setup safety standards or patient smile results.
          </p>
        </div>

        {/* Filter Navigation Rail */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          {[
            { value: "all", label: "All Cases" },
            { value: "clinic", label: "Clinic Interiors" },
            { value: "before-after", label: "Before & After Results" },
            { value: "treatment", label: "Clinical Treatments" }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === btn.value
                  ? "bg-dental-blue text-white shadow-md shadow-dental-blue/15"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isComparison = item.category === "before-after";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-3 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all cursor-zoom-in group relative"
                >
                  
                  {/* Photo area container */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                    {isComparison ? (
                      /* Side-By-Side Before/After card visual */
                      <div className="grid grid-cols-2 h-full gap-1">
                        <div className="relative h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item.beforeImage}
                            alt="Before Case"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-[9px] text-white font-bold tracking-widest uppercase">
                            Before
                          </span>
                        </div>
                        <div className="relative h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item.afterImage}
                            alt="After Case"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-dental-blue/90 text-[9px] text-white font-bold tracking-widest uppercase">
                            After
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Single Clinic/Restoration image */
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.singleImage}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                      />
                    )}

                    {/* Hover Inspect overlay */}
                    <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <div className="p-3 bg-white/95 text-slate-800 rounded-full shadow-md scale-95 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5 text-dental-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Caption metadata */}
                  <div className="p-3 text-center sm:text-left">
                    <p className="text-[10px] uppercase font-manrope font-bold text-dental-blue dark:text-sky-blue tracking-widest mb-1.5">
                      {item.category === "before-after" ? "Smile Alignment Case" : "Clinical Practice"}
                    </p>
                    <h3 className="font-poppins font-bold text-sm sm:text-base text-slate-800 dark:text-white line-clamp-1 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox full overlay dialogue box */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 select-none"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Navigation bar */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-white cursor-pointer hidden sm:block"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central Visual Showcase */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center bg-slate-900/40 p-4 rounded-3xl border border-white/5"
              >
                {filteredItems[lightboxIndex].category === "before-after" ? (
                  /* Custom slider before-after comparison showcase in lightbox */
                  <div className="w-full flex flex-col sm:flex-row gap-6 items-center">
                    <div className="flex-1 w-full text-center space-y-2">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Uncorrected (Before)</p>
                      <img
                        className="rounded-xl max-h-[480px] w-full object-cover shadow-2xl border border-white/10"
                        src={filteredItems[lightboxIndex].beforeImage}
                        alt="Uncorrected tooth alignment"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 w-full text-center space-y-2">
                      <p className="text-xs uppercase tracking-widest text-sky-blue font-bold">Completed (After)</p>
                      <img
                        className="rounded-xl max-h-[480px] w-full object-cover shadow-2xl border border-white/10"
                        src={filteredItems[lightboxIndex].afterImage}
                        alt="Corrected tooth alignment output"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    className="max-h-[500px] rounded-2xl object-contain shadow-2xl border border-white/10 w-auto"
                    src={filteredItems[lightboxIndex].singleImage}
                    alt={filteredItems[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Lightbox Caption */}
                <div className="mt-6 text-center text-white px-6">
                  <span className="text-xs uppercase tracking-widest font-bold text-dental-blue dark:text-sky-blue">
                    Case #{lightboxIndex + 1} • {filteredItems[lightboxIndex].category.toUpperCase()}
                  </span>
                  <p className="text-lg font-poppins font-medium mt-1">
                    {filteredItems[lightboxIndex].title}
                  </p>
                </div>
              </div>

              {/* Next Navigation bar */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-white cursor-pointer hidden sm:block"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Help swipe hint indicator */}
              <p className="absolute bottom-6 text-xs text-slate-500 font-sans">
                Press Left/Right/Close shortcuts to navigate easily
              </p>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
