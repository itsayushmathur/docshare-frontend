import React from "react";
import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import PricingSection from "../components/Landing/PricingSection";
import TestimonialsSection from "../components/Landing/TestimonialsSection";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Landing/Footer";
import { features, pricingPlans } from "../assets/data.js";

const Landing = () => {
  return (
    <div className="landiang-page bg-gradient-to-b from-gray-200 to-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <FeaturesSection features={features} />
      
      {/* Pricing Section */}
      <PricingSection pricingPlans={pricingPlans}/>
      
      {/* Testiminals Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
