"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  const teamMembers = [
    {
      name: "Oyebola Olabode",
      title: "Senior Academic Adviser",
      description:
        "I really enjoy working with students from all over the world helping and guiding them for the best educational pathway.",
      image: "/Tbil-Travel-H-3.jpg", // Replace with actual team member image
    },
    {
      name: "Olabode Mojoyinola",
      title: "Student Recruitment Counselor",
      description:
        "Coordinates students recruitment and serves as their primary point of contact and internal coordination of university participation in outreach activities.",
      image: "/Tbil-Travel-H-3.jpg", // Replace with actual team member image
    },
  ];

  const statistics = [
    { number: "2015", label: "STARTED SINCE", icon: "🔄" },
    { number: "80", label: "ACADEMIC PROGRAMS", icon: "💎" },
    { number: "262", label: "HAPPY STUDENTS", icon: "🎓" },
    { number: "49", label: "PARTNER SCHOOLS", icon: "⭐" },
  ];

  const whyChooseUs = [
    {
      title: "Quality visa guidance and study counseling",
      description:
        "Nigeria's top-rated education consultancy with one of the highest student visa success rates in the industry. We have over 3 years of proven expertise in the overseas education counselling domain.",
      icon: "🔗",
    },
    {
      title: "Competent and experienced team of counsellors",
      description:
        "Competent team of experienced and friendly counsellors who guide students throughout the course admission process and help them successfully bridge the gap between where they are presently and where they aspire to be in future.",
      icon: "📋",
    },
    {
      title: "Trusted Universities Partners",
      description:
        "Trusted partner for many students who rely solely upon our expert counselling and guidance to make informed decisions for a fulfilling professional career in the days to come.",
      icon: "🏛️",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
         src="/abouts-us-hero-1.jpg"
          alt="About background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (optional, for readability) */}
        <div className="absolute inset-0 bg-[#014e78]/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: About Tbil Travels - Two Columns */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/about-us-tbils.jpg"
                alt="Tbil Travels consultation"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                TBIL TRAVELS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tbil Travels is an educational agency based in Lagos, Nigeria,
                that guides and consults students globally, offering resources
                and connections for a seamless transition to universities
                abroad.
              </p>
              <p className="text-gray-700 font-semibold mb-4">
                Our main education services are:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0290de] mr-3 font-bold mt-1">•</span>
                  <span>
                    Counseling services for students who want to study abroad.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0290de] mr-3 font-bold mt-1">•</span>
                  <span>
                    Our experienced consultants will provide you with guidance
                    every step of the way on how to handle your application on
                    the best choice of university and the course you're applying
                    for.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0290de] mr-3 font-bold mt-1">•</span>
                  <span>
                    As an international student you will need to make sure you
                    successfully apply for a visa before you move abroad to
                    study. We give you best guidance in securing your student
                    visa.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0290de] mr-3 font-bold mt-1">•</span>
                  <span>Accommodation and pre-departure briefings.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Mission, Vision, Culture */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#0290de] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Offer a client-friendly services because we are convinced that
                our clients have to be treated like partners who need to be
                cared for and nurtured.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#0290de] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We focus on providing future proof and a new generation of
                educational services in order to help students and learners all
                around the world to achieve their educational objectives.
              </p>
            </div>

            {/* Culture */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#0290de] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Culture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our winning culture is defined by our attitude and behavior in
                Strategy, Professionalism, Service and Solution to industrial
                technicalities that is required to make our vision a reality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Meet Our Team */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              The Tbil Travels team will assist you throughout the complete
              application process answering any questions you may have. Our team
              will support you throughout your application journey providing
              helpful information along the way.
            </p>
            <p className="text-xl font-semibold text-gray-900 mb-2">
              We Are Here To Help!
            </p>
            <div className="w-24 h-1 bg-[#0290de] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full md:w-48 h-64 md:h-80 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Box */}
                <div className="bg-[#014e78] text-white p-6 rounded-lg flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-4">
                      {member.title}
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"
                      aria-label="Facebook"
                    >
                      <span className="text-white text-sm font-bold">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <span className="text-white text-sm">📷</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <span className="text-white text-sm">🐦</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"
                      aria-label="Skype"
                    >
                      <span className="text-white text-sm font-bold">S</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"
                      aria-label="Email"
                    >
                      <span className="text-white text-sm">✉</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Statistics */}
        <section className="bg-[#014e78] text-white py-12 md:py-16 mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="w-16 h-0.5 bg-white/30 mx-auto mb-4"></div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/90 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Why Tbil Travels */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Tbil Travels?
              </h2>
              <div className="space-y-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border-2 border-[#0290de] flex items-center justify-center">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/why-choose-tbils.jpg"
                alt="Student studying"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
