"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInUSA() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImages = [
    "/destinations/usa-university-1.jpg",
    "/destinations/usa-university-2.jpg",
    "/destinations/usa-university-3.jpg",
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
            <span>STUDY IN USA</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDY IN USA
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
                alt="US University Campus"
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
                  THE FLORIDA STATE UNIVERSITY
                </div>
              </div>
            </div>
          </div>

          {/* Right: Why Study in USA */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Study in the USA?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                USA is the largest economy with best facilities for
                international students. Studying in USA universities is a good
                career decision.
              </p>
              <p>
                USA universities are top-ranked globally. The United States is
                the most popular destination for international students.
              </p>
              <p>
                It has thousands of accredited colleges and universities. Offers
                choice, quality, and flexibility in fields of study.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Benefits and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left: Benefits Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Studying in United States
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Are you in doubt why you should study in US, here are some reasons
              why you should study in the US:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  COMMITMENT TO EXCELLENCE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Highlights top students, best professors, latest techniques,
                  and infrastructure. Emphasizes developing Critical Thinking
                  for real-time job scenarios.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  COURSE CURRICULUM
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  USA's education system amalgamating industry needs.
                  Universities often have industry leaders as board
                  members/advisory counsel. Curriculum is in sync with real-time
                  requirements and constantly updated. Aims to produce graduates
                  ready for the workforce.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  RESEARCH FACILITIES & TECHNOLOGY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  80% of Nobel laureates are part of the USA educational system,
                  offering students unique opportunities for research projects,
                  first-hand experience with cutting-edge technology, and
                  preparation for future challenges.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  FLEXIBILITY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Students can select courses across different streams, design
                  their curriculum, and USA offers programs across all streams,
                  aiming to develop well-rounded individuals.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  SAFETY & FACILITIES FOR INTERNATIONAL STUDENTS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The USA is a safe destination, providing amenities for
                  international students, with universities having specialized
                  security for campus entry/exit points.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  FUNDING OPPORTUNITIES
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most universities offer grants, scholarships, assistantships,
                  and fellowships for deserving students, allowing them to work
                  closely with professors and gain research insight.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  WORK PERMITS & JOB OPPORTUNITIES
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Provision of Optional Practical Training (OPT) for skill
                  practice in the USA, often leading to Work visas (H1), and
                  eligibility for Curriculum Practical Training (CPT) after two
                  semesters for full-time internships.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  INTERNATIONAL EXPOSURE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The USA attracts top students globally, providing
                  international exposure and fostering global citizenship.
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
