"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Carousel slides with images and text content
const carouselSlides = [
  {
    image: "/WhatsApp Image 2025-11-20 at 14.57.54.jpeg",
    subtitle: "Study",
    title: "ABROAD",
    description:
      "Unlock your future with international education opportunities.",
    buttonText: "Explore Programs",
    link: "/study-abroad",
    external: false,
  },
  {
    image: "/Frame101.webpcc6veg.webp-de83099a08f9977179f76cbc5eb0e37e-doc.webp",
    subtitle: "Flight",
    title: "BOOKING",
    description: "Best deals on flights worldwide. Book your journey today.",
    buttonText: "Book Flight",
    link: "https://www.tbils.com/",
    external: true,
  },
  {
    image: "/Frame 1686562769 (5).webp",
    subtitle: "Visa",
    title: "SUPPORT",
    description: "Expert assistance with visa applications and documentation.",
    buttonText: "Get Visa Help",
    link: "https://www.tbils.com/visa-application",
    external: true,
  },
  {
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (1).jpeg",
    subtitle: "Travel",
    title: "PACKAGES",
    description: "Curated travel experiences tailored to your dreams.",
    buttonText: "View Packages",
    link: "/contact",
    external: false,
  },
  {
    image: "/10-Things-Not-to-Wear-on-a-Plane-_-Airfarewatchdog.jpeg",
    subtitle: "Your Journey",
    title: "STARTS HERE",
    description: "Complete travel solutions for all your needs.",
    buttonText: "Contact Us",
    link: "/contact",
    external: false,
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Image Carousel with sliding effect */}
      <div className="relative w-full h-full flex">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={slide.image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative z-10 flex flex-col justify-center h-full">
            {/* Text Content - changes with each slide */}
            <div className="mb-6 transition-opacity duration-500">
              <h2
                className="text-white/90 text-4xl md:text-5xl lg:text-6xl italic mb-2 drop-shadow-lg"
                style={{ fontFamily: "cursive" }}
              >
                {carouselSlides[currentIndex].subtitle}
              </h2>
              <h1 className="text-white/90 text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight drop-shadow-md leading-none">
                {carouselSlides[currentIndex].title}
              </h1>
              <p className="text-white/90 text-xl md:text-2xl font-semibold mt-2 drop-shadow-md">
                {carouselSlides[currentIndex].description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              {carouselSlides[currentIndex].external ? (
                <a
                  href={carouselSlides[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-gradient hover:bg-primary-gradient-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group inline-block"
                >
                  {carouselSlides[currentIndex].buttonText}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ) : (
                <Link
                  href={carouselSlides[currentIndex].link}
                  className="bg-primary-gradient hover:bg-primary-gradient-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group inline-block"
                >
                  {carouselSlides[currentIndex].buttonText}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
