import { motion } from "motion/react";
import { Phone, MapPin, MessageSquare, Compass, Clock, HardDrive, Shield } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function ContactSection() {
  const directionsURL = `https://www.google.com/maps/search/?api=1&query=Suva+Dental+Care+Birshibpur+Uluberia+Howrah+West+Bengal+711302`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-900 scroll-mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Locate Our Specialist Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Contact & Directions
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans mt-3">
            Drop in physically at Birshibpur or dial our medical support line for instant assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Clinic information details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Brand card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                <span className="text-[10px] tracking-widest uppercase font-manrope font-bold text-light-teal select-none">Multi Speciality Clinic</span>
                <h3 className="text-2xl font-poppins font-black text-slate-900 dark:text-white mt-1 leading-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mt-1">
                  Founder: {CLINIC_INFO.doctor.name} ({CLINIC_INFO.doctor.qualification})
                </p>
              </div>

              {/* Detail list items */}
              <div className="space-y-5 px-1">
                
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-dental-blue/10 text-dental-blue dark:text-sky-blue shrink-0 h-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">Address Location:</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-dental-blue/10 text-dental-blue dark:text-sky-blue shrink-0 h-fit">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">Mobile & Diagnostics Support:</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Phone Call: <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-dental-blue hover:underline">{CLINIC_INFO.phone}</a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      WhatsApp: <a href={`https://wa.me/919433307652`} target="_blank" rel="noreferrer" className="font-bold text-emerald-600 hover:underline">+91 9433307652</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-dental-blue/10 text-dental-blue dark:text-sky-blue shrink-0 h-fit">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">Clinical Hours:</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Monday – Saturday: 10:00 AM – 8:30 PM IST
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Sunday: Emergency Callout Mode
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Action buttons panel */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <a
                id="contact-call-now"
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-dental-blue hover:bg-dental-blue/95 text-white font-poppins font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm shadow-md shadow-dental-blue/15 transition-all text-center focus:outline-none"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 9433307652</span>
              </a>

              <a
                id="contact-directions-link"
                href={directionsURL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-poppins font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition-all text-center focus:outline-none"
              >
                <Compass className="w-4 h-4" />
                <span>Get GPS Directions</span>
              </a>

              <a
                id="contact-whatsapp-chat"
                href={`https://wa.me/919433307652?text=Hello%20Suva%20Dental%20Care%20representative%2C%20I%3Fneed%20to%20query%20about%20visiting.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm sm:col-span-2 transition-all shadow-md shadow-emerald-600/10"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Messaging Chat</span>
              </a>

            </div>

          </div>

          {/* Right Column: Google Maps Location frame */}
          <div className="lg:col-span-7 h-[300px] sm:h-full min-h-[350px] relative">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-700/50">
              {/* Actual Google map iframe pointing to his city Birshibpur, Uluberia, West Bengal */}
              <iframe
                title="Suva Dental Care Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.166661448866!2d88.08183204999999!3d22.45564885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0280ebdbd5df8f%3A0xcb13eefba6297ad!2sBirshibpur%2C%20Uluberia%2C%20Howrah%2C%20West%20Bengal%20711316!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale dark:invert-[0.9] dark:hue-rotate-180"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
