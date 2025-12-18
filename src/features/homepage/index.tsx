import React from "react";
import HeroSection from "./components/hero";
import WhyChooseUs from "./components/why-choose-us";
import OurServices from "./components/our-services";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import StudyAbroad from "./components/study-abroad";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <StudyAbroad />
      <Testimonials />
      <Faq />
    </div>
  );
}
