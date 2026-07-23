import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import SearchSection from "../../components/Home/SearchSection";
import FeaturedPropertiesSection from "../../components/Home/FeaturedPropertiesSection";
import WhyChooseUsSection from "../../components/Home/WhyChooseUsSection";
import HowItWorksSection from "../../components/Home/HowItWorksSection";
import StatsSection from "../../components/Home/StatsSection";
import TestimonialSection from "../../components/Home/TestimonialSection";
import CTASection from "../../components/Home/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <FeaturedPropertiesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default Home;
