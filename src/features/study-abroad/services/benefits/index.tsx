"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyAbroadBenefits() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{" > "}</span>
            <span>STUDY ABROAD BENEFITS FROM NIGERIA</span>
          </div>
          {/* White Box with Title */}
          <div className="bg-white text-gray-900 px-6 py-4 inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              STUDY ABROAD BENEFITS
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: Two Column Layout - Image and Text */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Bridge Image with Graduation Cap */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/study-abroad-benefits-bridge.jpg"
                alt="Bridge with graduation cap and students"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Study Abroad Benefits From Nigeria
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Many believe to study abroad impacts only the student's career
                  path. However, that is fully not the case. The effect branches
                  itself into the student's personal, professional and academic
                  life mainly in a positive manner.
                </p>
                <p>
                  <strong>Prime International Study</strong> offers scholarships
                  and opportunities to students of study abroad benefits from
                  Nigeria.
                </p>
                <p>
                  The advantages and disadvantages for studying abroad might vary
                  but for Nigerian students it benefits to be exposes to a new
                  culture and land.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Benefits List with Landmarks Graphic */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Benefits Text */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>PIS</strong> partners with wide range of Universities
                  specialized in research and technology. There is a reduction of
                  communication & application costs. Contact us today and let's
                  get started with your consultation.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Benefits of Study Abroad
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Short Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Studying abroad can shorten the study period compared to a
                    Nigerian university degree which may take over 5 years.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Improve Career Opportunities
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Studying abroad broadens your skills and qualifications.{" "}
                    <strong>PIS</strong> is affiliated with reputable
                    universities globally offering courses in Engineering,
                    Medical, Interior, and more.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Experience a New Culture
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    It is a privilege to communicate with people of different
                    nationalities and learn foreign languages and traditions.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Earn Money While You Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Studying abroad offers the advantage of working part-time
                    jobs to help with living expenses and comfort.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/study-abroad/enquire"
                  className="text-[#0290de] hover:text-[#014e78] font-semibold text-lg transition-colors"
                >
                  Contact us today and see how we can help you! →
                </Link>
              </div>
            </div>

            {/* Right: Landmarks Graphic */}
            <div className="relative w-full h-[500px] md:h-[600px]">
              <div className="relative w-full h-full bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                {/* Landmarks */}
                <div className="absolute inset-0 flex items-end justify-around px-4 py-8">
                  {/* Leaning Tower of Pisa */}
                  <div className="relative">
                    <div className="w-16 h-32 bg-gray-300 rounded-t-lg transform -rotate-12"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-400 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-24 h-4 bg-green-500 rounded"></div>
                  </div>

                  {/* Statue of Liberty */}
                  <div className="relative">
                    <div className="w-12 h-40 bg-green-400 rounded-t-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-yellow-400"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-20 h-4 bg-green-500 rounded"></div>
                  </div>

                  {/* Eiffel Tower */}
                  <div className="relative">
                    <div className="w-8 h-48 bg-gray-500"></div>
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-600"></div>
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-600"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-16 h-4 bg-green-500 rounded"></div>
                  </div>

                  {/* Big Ben */}
                  <div className="relative">
                    <div className="w-14 h-36 bg-yellow-600 rounded-t-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-18 h-8 bg-yellow-700 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-20 h-4 bg-green-500 rounded"></div>
                  </div>

                  {/* Pagoda */}
                  <div className="relative">
                    <div className="w-12 h-28 bg-yellow-500 rounded-t-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-600 rounded"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-14 h-6 bg-yellow-600 rounded"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-18 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>

                {/* Airplanes */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-8 bg-gray-800 transform rotate-45"></div>
                  <div className="absolute top-2 left-12 w-24 h-0.5 bg-white opacity-50"></div>
                </div>
                <div className="absolute top-12 right-8">
                  <div className="w-16 h-8 bg-gray-800 transform -rotate-45"></div>
                  <div className="absolute top-2 right-12 w-24 h-0.5 bg-white opacity-50"></div>
                </div>

                {/* STUDY ABROAD Text Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-bold text-red-600">
                      STUDY
                    </span>
                    <br />
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      ABROAD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

