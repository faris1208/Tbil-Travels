"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInEurope() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImages = [
    "/university-4.jpg",
    "/university-3.jpg",
    "/university-in-europe-1.jpg",
    "/univerity-2.jpg",
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
        {/* Abstract hand and network overlay */}
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
            <span>STUDY IN UK & EUROPE</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDY IN UK & EUROPE
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left: Image Carousel */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={carouselImages[currentImage]}
                alt="UK University"
                fill
                className="object-cover"
              />
              {/* Carousel Navigation Arrows */}
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
              {/* University Logo Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg">
                <div className="text-xs font-semibold text-gray-900">
                  LONDON metropolitan university
                </div>
              </div>
            </div>
          </div>

          {/* Right: Why Study in UK */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Study in the UK?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                For many years UK universities have consistently continuously
                ranked as of the highest in global university ranking with good
                reputations for teaching and research.
              </p>
              <p>
                It will interest you to know that many of the world's best
                academics teach at UK universities.
              </p>
              <p>
                So Wherever in the world you go, UK degree is still one of the
                best degrees recognized by employers, universities, and
                governments.
              </p>
              <p>
                If you wish to get a high level of quality education then
                earning a degree from one of the Universities in the UK will aid
                your career path.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left: Benefits Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefit of Studying in UK
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The UK has a long history of welcoming international students to
              study in their universities and colleges.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              These are the reasons why many students preferred to study in UK.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  EXCELLENT ACADEMICS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The UK is a top study destination, with institutions governed
                  by bodies like the Quality Assurance Agency, maintaining
                  world-class teaching standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  SHORTER DURATION PROGRAMS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Master's degrees typically last 12 months, undergraduate
                  programs in England and Wales take 3 years, and in Scotland 4
                  years. It also mentions flexibility to blend academic and
                  vocational courses.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  RESEARCH
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  5% of the world's scientific research is carried out by the
                  UK, producing 14% of the world's most frequently cited papers.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  LOWER COSTS OF EDUCATION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Shorter course durations lead to lower annual tuition fees and
                  the advantage of an early career start.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  IMPROVES ENGLISH LANGUAGE SKILL
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Studying in the UK, the homeland of English, helps students
                  master the language, enhancing career prospects.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  PLACEMENTS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Studying in the UK provides students with a global
                  perspective, is highly sought after by employers, and
                  increases chances of employment and potential salary.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  FINANCIAL AID
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Scholarships, grants, free healthcare via the British National
                  Health Service, and the ability to work while studying. For
                  further information, refer to the UK Council for International
                  Student Affairs (UKCISA).
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  MULTICULTURAL AND AN INTERESTING DESTINATIONS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The diverse student groups from around the world in UK
                  colleges and universities are evidence of the country's
                  religious and cultural acceptance.
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
