"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Carousel slides with videos and image
const carouselSlides = [
  {
    type: "image",
    src: "/student-walking.jpg",
    title: "The Biggest Study",
    titleLine2: "& Work Festival",
    subtitle: "Register To Speak With Top Institutions Across",
    subtitleLine2: "The World For Free!",
    buttonText: "Reserve Your Space Now!",
  },
  {
    type: "image",
    src: "/student-walking-2.jpg",
    title: "Study & Work",
    titleLine2: "Abroad With Ease",
    subtitle: "Register To Speak With Top Institutions Across",
    subtitleLine2: "The World For Free!",
    buttonText: "Reserve Your Seat Now!",
  },
  {
    type: "image",
    src: "/Admission-2026.jpg",
    title: "May 2026 Admission",
    titleLine2: "Now Open!",
    subtitle: "Register To Speak With Top Institutions Across",
    subtitleLine2: "The World For Free!",
    buttonText: "Book Free Consultation",
  },
];

export default function StudyAbroadHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Hero Carousel Section */}
      <div className="relative w-full h-[500px] md:h-[1000px] overflow-hidden">
        {/* Media Carousel */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={`Study abroad slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* Content Overlay - Changes with each slide */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="transition-opacity duration-500">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                {carouselSlides[currentIndex].title}
                {carouselSlides[currentIndex].titleLine2 && (
                  <>
                    <br />
                    {carouselSlides[currentIndex].titleLine2}
                  </>
                )}
              </h1>
              <div className="relative mb-6 md:mb-8">
                <p className="text-lg md:text-xl lg:text-[16px] text-white/90 mb-2 font-semibold">
                  {carouselSlides[currentIndex].subtitle}
                </p>
                {/* Green curved line decoration */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-green-400 rounded-full"></div>
                <p className="text-lg md:text-xl lg:text-[16px] text-white/90 mt-2 font-semibold">
                  {carouselSlides[currentIndex].subtitleLine2}
                </p>
              </div>
              <Link
                href="/study-abroad/enquire"
                className="inline-block bg-[#0290de] hover:bg-[#014e78] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {carouselSlides[currentIndex].buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Blue CTA Banner */}
      <div className="bg-[#0290de] text-white py-8 md:py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-3">
              Ready to Apply? Discover Global Programs, Schools or Universities
            </h2>
            <p className="text-base md:text-[15px] text-[ffffffb3]">
              Please speak with our experienced student Counselor, who is
              available 24/7.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0 relative">
            {/* Decorative Arrow */}
            <svg
              className="absolute -top-8 -right-4 w-16 h-16 text-gray-800 hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <Link
              href="/study-abroad/enquire"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
