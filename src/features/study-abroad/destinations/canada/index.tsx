"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInCanada() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselImages = [
    "/destinations/canada-university-1.jpg",
    "/destinations/canada-university-2.jpg",
    "/destinations/canada-university-3.jpg",
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
            <span>STUDY IN CANADA</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDY IN CANADA
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
                alt="Canadian University Campus"
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

          {/* Right: Why Study in Canada */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Study in Canada?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Canada is known for its high-quality education system, safe
                environment, and welcoming multicultural society. Canadian degrees
                are recognized globally and offer excellent value for money.
              </p>
              <p>
                <strong>TBILS</strong> helps students navigate the Canadian education
                system, from application to visa processing, ensuring a smooth
                transition to studying in Canada.
              </p>
              <p>
                Canada offers post-graduation work permit opportunities and
                pathways to permanent residency, making it an attractive destination
                for international students.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Benefits and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Left: Benefits Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Studying in Canada
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Here are some compelling reasons why you should consider studying in
              Canada:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  AFFORDABLE EDUCATION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Affordable tuition fees compared to other countries, combined
                  with high-quality education, make Canada an excellent value for
                  international students.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  SAFE AND PEACEFUL ENVIRONMENT
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Canada is consistently ranked as one of the safest countries in
                  the world, providing a secure environment for students to focus on
                  their studies.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  POST-GRADUATION WORK PERMITS
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  International students can work in Canada after graduation
                  through the Post-Graduation Work Permit Program, gaining valuable
                  work experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  PATHWAY TO PERMANENT RESIDENCY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Canada offers various immigration pathways for international
                  students, making it easier to transition from student to permanent
                  resident.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  HIGH STANDARD OF LIVING
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Canada offers a high standard of living with excellent healthcare,
                  infrastructure, and quality of life, making it an ideal place to
                  study and live.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  MULTICULTURAL SOCIETY
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Canada's diverse and inclusive society welcomes students from all
                  backgrounds, creating a rich cultural experience and global
                  networking opportunities.
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
