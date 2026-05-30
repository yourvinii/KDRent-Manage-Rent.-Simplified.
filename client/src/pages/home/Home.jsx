import React from "react";
import HeroSection from "../../components/home/HeroSection";

import StatsSection from "../../components/home/StatsSection";
import CTASection from "../../components/home/CTASection";
import SearchSection from "../../components/home/SearchSection";
import FeaturedPropertiesSection from "../../components/home/FeaturedPropertiesSection";
import WhyChooseUsSection from "../../components/home/WhyChooseUsSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchSection />

      <FeaturedPropertiesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />

      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
