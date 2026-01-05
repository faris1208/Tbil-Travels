"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInUAE() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImages = [
    "/destinations/uae-university-1.jpg",
    "/destinations/uae-university-2.jpg",
    "/destinations/uae-university-3.jpg",
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
            <span>STUDY IN UAE</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDY IN UAE
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
                alt="UAE University Campus"
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

          {/* Right: Why Study in UAE */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Study in UAE?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                The United Arab Emirates is a rapidly growing education hub with
                world-class universities and a strategic location bridging East and
                West. UAE offers modern facilities and a multicultural learning
                environment.
              </p>
              <p>
                <strong>TBILS</strong> assists students in finding the right programs
                in UAE universities, helping with applications and understanding the
                local education system.
              </p>
              <p>
                With its growing economy and excellent career opportunities, UAE
                provides a dynamic environment for international students to thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Benefits and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left: Benefits Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Studying in UAE
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Here are some compelling reasons why you should consider studying in
              the UAE:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  MODERN INFRASTRUCTURE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE universities feature state-of-the-art facilities and modern
                  infrastructure, providing students with the best learning
                  environment and resources.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  STRATEGIC LOCATION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE's strategic location provides easy access to global markets,
                  making it an ideal base for students interested in international
                  business and career opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  SAFE AND SECURE ENVIRONMENT
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE is known for its safety and security, providing a peaceful
                  environment where students can focus on their studies without
                  concerns.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  MULTICULTURAL ENVIRONMENT
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE's diverse student body and multicultural environment offer
                  students the opportunity to learn from different cultures and
                  perspectives, enhancing their global outlook.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  GROWING ECONOMY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE's rapidly growing economy provides excellent career
                  opportunities for graduates, with many multinational companies
                  establishing their presence in the region.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  WORLD-CLASS UNIVERSITIES
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UAE hosts branch campuses of renowned international universities,
                  offering students access to world-class education without leaving
                  the region.
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
