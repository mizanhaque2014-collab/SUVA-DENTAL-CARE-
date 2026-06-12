import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutDoctor from "./components/AboutDoctor";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Treatments from "./components/Treatments";
import StatsCounter from "./components/StatsCounter";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import AppointmentForm from "./components/AppointmentForm";
import Consultation from "./components/Consultation";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingControls from "./components/FloatingControls";
import Loader from "./components/Loader";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("suva_dental_theme");
    return saved === "dark" ? true : false;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  // Sync Dark Mode state to document HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("suva_dental_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("suva_dental_theme", "light");
    }
  }, [darkMode]);

  const openModal = (serviceName = "Dental Check-Up") => {
    setModalService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Splash Loader */}
      <Loader />

      {/* 2. Sticky Glass Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openAppointmentModal={() => openModal()}
      />

      {/* 3. Hero section of Clinic */}
      <Hero openAppointmentModal={() => openModal()} />

      {/* 4. Statistics Panel (Animated count) */}
      <StatsCounter />

      {/* 5. Doctor Profile Section */}
      <AboutDoctor />

      {/* 6. Why Choose Us (Excellence features) */}
      <WhyChooseUs />

      {/* 7. Speciality clinical services (15 listed with Search & Filters) */}
      <Services openAppointmentModalWithService={openModal} />

      {/* 8. Dedicated Treatment cards (benefits, duration showcases) */}
      <Treatments openAppointmentModalWithService={openModal} />

      {/* 9. Interactive Before / After comparisons portfolio */}
      <Gallery />

      {/* 10. Auto sliding testimonials carousel */}
      <Testimonials />

      {/* 11. Custom virtual consulting guide section */}
      <Consultation openAppointmentModal={() => openModal()} />

      {/* 12. Inline Quick appointment booking scheduler form */}
      <AppointmentForm initialService="Dental Check-Up" isModal={false} />

      {/* 13. Dynamic Maps & Contact hours locations */}
      <ContactSection />

      {/* 14. Luxury corporate footer */}
      <Footer openAppointmentModal={() => openModal()} />

      {/* 15. Contextual Action widgets (WhatsApp, Call, Scroll To Top) */}
      <FloatingControls openAppointmentModal={() => openModal()} />

      {/* 16. Backdrop interactive Booking form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <AppointmentForm
            initialService={modalService}
            isModal={true}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
