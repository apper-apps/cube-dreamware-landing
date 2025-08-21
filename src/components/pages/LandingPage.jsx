import React from "react";
import Navigation from "@/components/organisms/Navigation";
import HeroSection from "@/components/organisms/HeroSection";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import IndustriesSection from "@/components/organisms/IndustriesSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-midnight">
      <Navigation />
      <main>
        <HeroSection />
        <ComparisonSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;