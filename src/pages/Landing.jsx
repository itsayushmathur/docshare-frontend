import React, { useEffect } from "react";
import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import PricingSection from "../components/Landing/PricingSection";
import TestimonialsSection from "../components/Landing/TestimonialsSection";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Landing/Footer";
import { features, pricingPlans, testimonials } from "../assets/data.js";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn,navigate]);

  return (
    <div className="landiang-page bg-gradient-to-b from-gray-200 to-gray-50">
      {/* Hero Section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>

      {/* Features */}
      <FeaturesSection features={features} />

      {/* Pricing Section */}
      <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp} />

      {/* Testiminals Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection openSignUp={openSignUp}/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
