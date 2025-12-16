"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "It was an awesome experience And team were very supportive",
    name: "Tope",
    location: "Singapore",
    avatar: "/api/placeholder/80/80", // Replace with actual avatar image
  },
  {
    id: 2,
    quote: "Amazing service and unforgettable memories. Highly recommended!",
    name: "Sarah",
    location: "Dubai",
    avatar: "/api/placeholder/80/80",
  },
  {
    id: 3,
    quote: "The best travel experience we've ever had. Everything was perfect!",
    name: "Michael",
    location: "Bali",
    avatar: "/api/placeholder/80/80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3
            className="text-2xl md:text-3xl text-blue-400 mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Testimonial Cards Container */}
        <div className="relative">
          {/* Stacked Cards Effect - Background Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl">
              {/* Second card (behind) */}
              <div className="absolute top-4 left-4 w-full h-full bg-white rounded-2xl shadow-md opacity-30 transform translate-x-2 translate-y-2"></div>
              {/* Third card (furthest behind) */}
              <div className="absolute top-8 left-8 w-full h-full bg-white rounded-2xl shadow-md opacity-20 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-500">
            {/* Decorative Quotation Marks */}
            <div className="absolute bottom-4 right-8 text-9xl md:text-[12rem] font-serif text-amber-100 opacity-40 leading-none pointer-events-none">
              99
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 relative z-10 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>

            {/* Client Information */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-primary-gradient flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name} for{" "}
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#0290de]"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
