import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Phone, CheckCircle, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { SERVICES } from "../data";
import { AppointmentData } from "../types";

interface AppointmentFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export default function AppointmentForm({ initialService = "", isModal = false, onClose }: AppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    gender: "Male",
    date: "",
    time: "10:00 AM",
    treatment: initialService || "Dental Check-Up",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof AppointmentData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
    const mobilePattern = /^[6-9]\d{9}$/;  // standard Indian mobile check, also general fallback
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.replaceAll(" ", "").replaceAll("-", "").length < 10) {
      newErrors.mobile = "Please enter a valid phone number";
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please specify a valid email address";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Please specify a valid age";
    }

    if (!formData.date) {
      newErrors.date = "Please choose a desired date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generated target WhatsApp message
    const waBase = "919433307652";
    const titleText = "Hello Suva Dental Care, I would like to book an appointment.%0A";
    const bodyText = `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
                     `*Mobile:* ${encodeURIComponent(formData.mobile)}%0A` +
                     `*Age:* ${encodeURIComponent(formData.age)} (${encodeURIComponent(formData.gender)})%0A` +
                     `*Service:* ${encodeURIComponent(formData.treatment)}%0A` +
                     `*Date:* ${encodeURIComponent(formData.date)}%0A` +
                     `*Preferred Time:* ${encodeURIComponent(formData.time)}%0A` +
                     `*Note:* ${encodeURIComponent(formData.message || "No added notes")}`;
    
    const waURL = `https://wa.me/${waBase}?text=${titleText}%0A${bodyText}`;

    setIsSuccess(true);

    // Open WhatsApp link in a secondary tab automatically after a small gap
    setTimeout(() => {
      window.open(waURL, "_blank");
    }, 1200);
  };

  const formContent = (
    <div className="space-y-6">
      
      {/* Visual trust banner */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-dental-blue/5 dark:bg-sky-blue/5 text-dental-blue dark:text-sky-blue text-xs font-semibold">
        <ShieldCheck className="w-5 h-5" />
        <span>Your data is confidential. Real-time direct WhatsApp confirmation is active.</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Input */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
            Patient Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all ${
              errors.fullName ? "border-rose-500 ring-rose-500" : "border-slate-200 dark:border-slate-700"
            }`}
            placeholder="E.g., Amit Kumar"
          />
          {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Row Contact & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              required
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all ${
                errors.mobile ? "border-rose-500 ring-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
              placeholder="E.g., 9433307652"
            />
            {errors.mobile && <p className="text-xs text-rose-500 mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all ${
                errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
              placeholder="amit@gmail.com"
            />
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row Age & Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Age *
            </label>
            <input
              type="number"
              required
              min="1"
              max="120"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all ${
                errors.age ? "border-rose-500 ring-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
              placeholder="Age"
            />
            {errors.age && <p className="text-xs text-rose-500 mt-1">{errors.age}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Gender *
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white rounded-xl text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row Date & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all ${
                errors.date ? "border-rose-500 ring-rose-500" : "border-slate-200 dark:border-slate-700"
              }`}
            />
            {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
              Preferred Session Time *
            </label>
            <select
              value={formData.time}
              onChange={(e) => handleInputChange("time", e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white rounded-xl text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all"
            >
              <option value="10:00 AM">Morning Slot (10:00 AM - 1:00 PM)</option>
              <option value="2:00 PM">Afternoon Slot (2:00 PM - 5:00 PM)</option>
              <option value="6:00 PM">Evening Slot (6:00 PM - 8:30 PM)</option>
            </select>
          </div>
        </div>

        {/* Treatment required selector */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
            Required Treatment Speciality *
          </label>
          <select
            value={formData.treatment}
            onChange={(e) => handleInputChange("treatment", e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white rounded-xl text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Brief Text message */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 font-manrope mb-1">
            Brief Note / Symptoms description
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={2}
            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-dental-blue transition-all"
            placeholder="Specify any painful tooth, swelling, previous history, etc."
          />
        </div>

        {/* Submit action panel */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-dental-blue hover:bg-dental-blue/90 text-white font-poppins font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-dental-blue/20 transition-all hover:scale-[1.01] active:scale-95 text-base cursor-pointer mt-2"
        >
          <MessageSquare className="w-5 h-5 fill-white text-dental-blue" />
          <span>Confirm & Send to WhatsApp</span>
        </button>

      </form>
    </div>
  );

  const successContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-10 px-4 space-y-6"
    >
      <div className="mx-auto w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-500 animate-bounce">
        <CheckCircle className="w-12 h-12" />
      </div>

      <div className="space-y-2">
        <h3 className="font-poppins font-black text-2xl text-slate-900 dark:text-white tracking-tight">
          Appointment Pre-booked!
        </h3>
        <p className="text-sm text-slate-500 dark:text-text-400 font-sans max-w-sm mx-auto">
          Thank you, <strong className="text-slate-800 dark:text-slate-100">{formData.fullName}</strong>. We are now redirecting you to initiate the secure WhatsApp slot confirmation thread!
        </p>
      </div>

      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-xs text-emerald-800 dark:text-emerald-300 max-w-xs mx-auto">
        <p className="font-semibold">Step 2 Automatic Link</p>
        <p className="mt-1">In case the chat doesn't load automatically, click the manual button below.</p>
      </div>

      <button
        onClick={() => {
          const waURL = `https://wa.me/919433307652?text=Hello%20Suva%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Name%3A%20${encodeURIComponent(formData.fullName)}`;
          window.open(waURL, "_blank");
        }}
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-sm"
      >
        <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
        <span>Open Chat Manually</span>
      </button>

    </motion.div>
  );

  // If this belongs to a separate floating Modal view
  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark drop shadow overlay */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Sheet panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="relative bg-white dark:bg-slate-800 p-6 rounded-3xl w-full max-w-2xl shadow-2xl z-10 border border-slate-100 dark:border-slate-700 max-h-[90vh] overflow-y-auto"
        >
          
          {/* Header row */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700 mb-4">
            <div className="flex items-center gap-2.5 text-dental-blue dark:text-sky-blue">
              <Calendar className="w-5 h-5" />
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-slate-800 dark:text-white leading-none">
                Register Appointment Slot
              </h3>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label="Close modal dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSuccess ? formContent : successContent}

        </motion.div>
      </div>
    );
  }

  // Otherwise, inline static module layout (e.g. at bottom section)
  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-tr from-slate-50 via-soft-cyan/20 to-sky-blue/5 dark:from-navy dark:via-navy dark:to-navy-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-manrope font-bold text-dental-blue dark:text-sky-blue uppercase tracking-widest bg-dental-blue/10 dark:bg-sky-blue/20 px-3 py-1 rounded-full">
            Immediate Diagnostics Scheduler
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white mt-3.5 tracking-tight">
            Book Offline Appointment
          </h2>
          <div className="w-16 h-1 bg-dental-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Content Box with glass details */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-700/60 shadow-xl">
          {!isSuccess ? formContent : successContent}
        </div>

      </div>
    </section>
  );
}
