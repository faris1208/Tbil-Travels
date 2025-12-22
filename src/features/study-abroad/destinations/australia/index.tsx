"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInAustralia() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImages = [
    "/destinations/australia-university-1.jpg",
    "/destinations/australia-university-2.jpg",
    "/destinations/australia-university-3.jpg",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{" > "}</span>
            <span>STUDY IN AUSTRALIA</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDY IN AUSTRALIA
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section: Image and Why Study */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left: Image Carousel */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={carouselImages[currentImage]}
                alt="Australian University Campus"
                fill
                className="object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Why Study in Australia */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Study in Australia?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Australia offers world-class education in a beautiful and diverse
                environment. Australian universities are known for their research
                excellence and innovative teaching methods.
              </p>
              <p>
                <strong>PIS</strong> provides expert guidance for students
                interested in studying in Australia, helping with university
                selection, application processes, and visa requirements.
              </p>
              <p>
                With post-study work visa options and a multicultural society,
                Australia provides excellent opportunities for international students
                to build their careers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Benefits and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left: Benefits Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Studying in Australia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Here are some compelling reasons why you should consider studying in
              Australia:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  INTERNATIONALLY RECOGNIZED QUALIFICATIONS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Australian degrees are recognized worldwide, providing graduates
                  with credentials valued by employers and institutions globally.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  BEAUTIFUL LANDSCAPES AND OUTDOOR LIFESTYLE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Australia's stunning natural beauty and outdoor lifestyle offer
                  students a unique living experience while pursuing their education.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  PART-TIME WORK OPPORTUNITIES
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  International students can work part-time while studying, helping
                  to support their living expenses and gain valuable work experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  POST-STUDY WORK VISA OPTIONS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Australia offers post-study work visas that allow graduates to
                  work in the country after completing their studies, providing
                  pathways to permanent residency.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  MULTICULTURAL AND WELCOMING SOCIETY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Australia's multicultural society welcomes students from all
                  backgrounds, creating an inclusive and diverse learning
                  environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  RESEARCH EXCELLENCE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Australian universities are at the forefront of research and
                  innovation, offering students opportunities to work on
                  cutting-edge projects and contribute to global knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 sticky top-20">
              <p className="text-gray-900 font-bold mb-6 text-lg">
                Send Your Request Via Enquiry Button Below.
              </p>
              <div className="space-y-4">
                <Link
                  href="/study-abroad/enquire"
                  className="w-full bg-[#014e78] hover:bg-[#013a5a] text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-between group"
                >
                  <span>Enquire Now</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/study-abroad/universities"
                  className="w-full bg-[#014e78] hover:bg-[#013a5a] text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-between group"
                >
                  <span>Universities List</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
