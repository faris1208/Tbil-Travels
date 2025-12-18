"use client";

import React from "react";
import Image from "next/image";

const partnerInstitutions = [
  {
    name: "University Canada West",
    abbreviation: "UCW",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "University of Hertfordshire",
    abbreviation: "UH",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "La Trobe College Australia",
    abbreviation: "La Trobe",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "Navitas",
    abbreviation: "Navitas",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "Illinois State University",
    abbreviation: "ISU",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "University of Huddersfield",
    abbreviation: "Huddersfield",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
  {
    name: "Carleton University",
    abbreviation: "Carleton",
    logo: "/Tbil-Travel-H-3.jpg", // Replace with actual logo
  },
];

export default function StudyAbroadSponsors() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Dotted World Map Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #0290de 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We have a list of{" "}
            <span className="bg-[#0290de] text-white px-3 py-1 rounded-lg inline-block">
              excited
            </span>{" "}
            Institutions Working With Us
          </h2>
        </div>

        {/* Sub-headline */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl lg:text-2xl text-[#0290de] font-semibold">
            WE CAN ALSO BOAST OF ENSURING OVER 10,000+ STUDENTS DISCOVERED THEIR
            STUDY ABROAD DREAM GLOBALLY WITH US
          </p>
        </div>

        {/* Partner Logos - Auto Scrolling */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16">
            {/* First set of logos */}
            {partnerInstitutions.map((institution, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center justify-center group hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-2 bg-gray-50 rounded-lg p-4">
                  <Image
                    src={institution.logo}
                    alt={institution.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-600 text-center max-w-[150px]">
                  {institution.name}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerInstitutions.map((institution, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center group hover:opacity-80 transition-opacity flex-shrink-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-2 bg-gray-50 rounded-lg p-4">
                  <Image
                    src={institution.logo}
                    alt={institution.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-600 text-center max-w-[150px]">
                  {institution.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
