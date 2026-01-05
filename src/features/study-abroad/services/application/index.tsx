"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationProcess() {
  const formatDescription = (text: string) => {
    // Split by  and bold it, also handle italicized text
    const parts = text.split(
      /(TBILS|In-complete documents will cause delays, and sometimes visa rejections)/g
    );
    return parts.map((part, index) => {
      if (part === "") {
        return <strong key={index}>TBILS</strong>;
      }
      if (part.includes("In-complete")) {
        return (
          <em key={index} className="italic">
            {part}
          </em>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const steps = [
    {
      number: 1,
      title: "Arrange An Appointment With TBILS Expert Staff",
      description:
        "Meeting with an experienced TBILS counsellor will allow you to discuss your options and choose the right fit for you.",
      image: "/application-process-step1.jpg", // Placeholder - man in blue shirt and red tie
    },
    {
      number: 2,
      title: "Apply For Admissions",
      description:
        "Once you have decided on your university choice, your counsellor will ask you to provide the necessary documents to apply for admissions.",
      image: "/application-process-step2.jpg", // Placeholder - students looking at laptop
    },
    {
      number: 3,
      title: "Receive Your Offer Letter",
      description:
        "The university will give you offer letter if you have met the criteria for admissions. TBILS will keep in regular contact with you and with your institution of choice.",
      image: "/application-process-step3.jpg", // Placeholder - Asian man with books
    },
    {
      number: 4,
      title: "Accept Your Offer",
      description:
        "Once you have decided to accept your offer, TBILS staff can help you notify the institution and pay any required deposit in both a secure and timely manner.",
      image: "/application-process-step4.jpg", // Placeholder - hand holding document
    },
    {
      number: 5,
      title: "Apply For Your Visa",
      description:
        "Our counsellors are trained to give you expert advice on the visa process. They will guide you on preparing your file and check your documents before they are submitted. In-complete documents will cause delays, and sometimes visa rejections.",
      image: "/application-process-step5.jpg", // Placeholder - passports with visa stamps
    },
    {
      number: 6,
      title: "Prepare For Your Overseas Studies",
      description:
        "Now your visa's filed you will need to start making preparations for living abroad, including booking accommodation. TBILS staff can assist you throughout and will hold pre-departure briefings for students.",
      image: "/application-process-step6.jpg", // Placeholder - passport and boarding pass
    },
  ];

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
        {/* Abstract hand and network overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{" > "}</span>
            <span>STUDY ABROAD APPLICATION PROCESSES</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            APPLICATION PROCESS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Steps 1-2: First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Circular Image with Pink Border */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {step.number}. {step.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {formatDescription(step.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Steps 3-6: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {steps.slice(2).map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Circular Image with Pink Border */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {step.number}. {step.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {formatDescription(step.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/study-abroad/enquire"
            className="text-[#0290de] hover:text-[#014e78] font-semibold text-lg md:text-xl transition-colors inline-block"
          >
            Contact us today for first class visa support! →
          </Link>
        </div>
      </div>
    </div>
  );
}
