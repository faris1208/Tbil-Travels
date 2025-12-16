import React from "react";
import HeroSection from "./components/hero";
import WhyChooseUs from "./components/why-choose-us";
import OurServices from "./components/our-services";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <Faq />
    </div>
  );
}
