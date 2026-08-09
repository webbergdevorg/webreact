import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Team from "./components/Team";
import ContactSection from "./components/ContactSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import WebWindowModal from "./components/WebWindowModal";
import SocialDropdown from "./components/SocialDropdown";
import SuccessModal from "./components/SuccessModal";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [socialDropdownData, setSocialDropdownData] = useState(null);
  const [successModalData, setSuccessModalData] = useState({
    isOpen: false,
    message: "",
  });

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenWebPreview = (projectData) => {
    setActiveProject(projectData);
  };

  const handleCloseWebPreview = () => {
    setActiveProject(null);
  };

  const handleTriggerSocialDropdown = (e, label) => {
    e.preventDefault();
    e.stopPropagation();
    setSocialDropdownData({
      targetEl: e.currentTarget,
      label: label,
    });
  };

  const handleCloseSocialDropdown = () => {
    setSocialDropdownData(null);
  };

  const handleFormSubmitSuccess = (msg) => {
    setSuccessModalData({
      isOpen: true,
      message: msg,
    });
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalData({
      isOpen: false,
      message: "",
    });
  };

  return (
    <div className="app-root">
      {/* Blurred layered background (hero) */}
      <div className="bg-layers" aria-hidden="true">
        <span className="hero-glow"></span>
      </div>

      {/* ===== NAVBAR ===== */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* ===== HERO ===== */}
      <Hero
        onOpenContactModal={handleOpenContactModal}
        onTriggerSocialDropdown={handleTriggerSocialDropdown}
      />

      {/* ===== SERVICES ===== */}
      <Services />

      {/* ===== WHY WEBBERG ===== */}
      <WhyUs />

      {/* ===== TECH STACK ===== */}
      <TechStack />

      {/* ===== HOW DEVELOPMENT WORKS ===== */}
      <Process />

      {/* ===== OUR RECENT PROJECTS ===== */}
      <Projects onOpenWebPreview={handleOpenWebPreview} />

      {/* ===== MEET OUR TEAM ===== */}
      <Team />

      {/* ===== CONTACT ===== */}
      <ContactSection
        onFormSubmitSuccess={handleFormSubmitSuccess}
        onTriggerSocialDropdown={handleTriggerSocialDropdown}
      />

      {/* ===== FAQ ===== */}
      <Faq />

      {/* ===== FOOTER ===== */}
      <Footer onTriggerSocialDropdown={handleTriggerSocialDropdown} />

      {/* ===== CONTACT MODAL ===== */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        onSubmitSuccess={handleFormSubmitSuccess}
      />

      {/* ===== SOCIAL LINK SMALL DROPDOWN TOOLTIP ===== */}
      <SocialDropdown
        dropdownData={socialDropdownData}
        onClose={handleCloseSocialDropdown}
      />

      {/* ===== WEBSITE PREVIEW WINDOW MODAL ===== */}
      <WebWindowModal
        activeProject={activeProject}
        onClose={handleCloseWebPreview}
      />

      {/* ===== SUCCESS TICK MODAL ===== */}
      <SuccessModal
        isOpen={successModalData.isOpen}
        message={successModalData.message}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
}
