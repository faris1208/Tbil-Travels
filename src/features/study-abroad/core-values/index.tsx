"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoreValues() {
  const coreValuesWords = [
    { word: "Core Values", size: "text-6xl", color: "text-red-600" },
    { word: "honesty", size: "text-4xl", color: "text-red-500" },
    { word: "honor", size: "text-4xl", color: "text-orange-500" },
    { word: "skills", size: "text-4xl", color: "text-green-500" },
    { word: "company", size: "text-3xl", color: "text-blue-500" },
    { word: "ethics", size: "text-4xl", color: "text-red-500" },
    { word: "success", size: "text-4xl", color: "text-orange-500" },
    { word: "teamwork", size: "text-4xl", color: "text-green-500" },
    { word: "trust", size: "text-4xl", color: "text-blue-500" },
    { word: "goals", size: "text-3xl", color: "text-red-500" },
    { word: "vision", size: "text-3xl", color: "text-orange-500" },
    { word: "goal", size: "text-3xl", color: "text-green-500" },
    { word: "moral", size: "text-3xl", color: "text-blue-500" },
    { word: "attitude", size: "text-3xl", color: "text-red-500" },
    { word: "integrity", size: "text-4xl", color: "text-orange-500" },
    { word: "management", size: "text-3xl", color: "text-green-500" },
    { word: "commitment", size: "text-3xl", color: "text-blue-500" },
    { word: "happiness", size: "text-3xl", color: "text-red-500" },
    { word: "empowerment", size: "text-2xl", color: "text-orange-500" },
    { word: "importance", size: "text-2xl", color: "text-green-500" },
    { word: "rule", size: "text-3xl", color: "text-blue-500" },
    { word: "health", size: "text-2xl", color: "text-gray-600" },
    { word: "friends", size: "text-2xl", color: "text-gray-600" },
    { word: "consult", size: "text-2xl", color: "text-gray-600" },
    { word: "positive", size: "text-2xl", color: "text-gray-600" },
    { word: "customer", size: "text-2xl", color: "text-gray-600" },
    { word: "connection", size: "text-2xl", color: "text-gray-600" },
    { word: "symbol", size: "text-2xl", color: "text-gray-600" },
    { word: "ideology", size: "text-2xl", color: "text-gray-600" },
    { word: "innovation", size: "text-2xl", color: "text-gray-600" },
    { word: "firm", size: "text-2xl", color: "text-gray-600" },
    { word: "principle", size: "text-2xl", color: "text-gray-600" },
    { word: "guide", size: "text-2xl", color: "text-gray-600" },
    { word: "achievement", size: "text-2xl", color: "text-gray-600" },
    { word: "conduct", size: "text-2xl", color: "text-gray-600" },
    { word: "career", size: "text-2xl", color: "text-gray-600" },
    { word: "culture", size: "text-2xl", color: "text-gray-600" },
    { word: "corporate", size: "text-2xl", color: "text-gray-600" },
    { word: "marketing", size: "text-2xl", color: "text-gray-600" },
    { word: "representation", size: "text-2xl", color: "text-gray-600" },
    { word: "analysis", size: "text-2xl", color: "text-gray-600" },
    { word: "organization", size: "text-2xl", color: "text-gray-600" },
    { word: "employee", size: "text-2xl", color: "text-gray-600" },
    { word: "objective", size: "text-2xl", color: "text-gray-600" },
    { word: "business", size: "text-2xl", color: "text-gray-600" },
    { word: "service", size: "text-2xl", color: "text-gray-600" },
    { word: "mission", size: "text-2xl", color: "text-gray-600" },
    { word: "strategic", size: "text-2xl", color: "text-gray-600" },
    { word: "industry", size: "text-2xl", color: "text-gray-600" },
    { word: "target", size: "text-2xl", color: "text-gray-600" },
    { word: "satisfaction", size: "text-2xl", color: "text-gray-600" },
    { word: "relationship", size: "text-2xl", color: "text-gray-600" },
    { word: "strategy", size: "text-2xl", color: "text-gray-600" },
    { word: "passion", size: "text-2xl", color: "text-gray-600" },
    { word: "responsible", size: "text-2xl", color: "text-gray-600" },
    { word: "set", size: "text-2xl", color: "text-gray-600" },
    { word: "sensitivity", size: "text-2xl", color: "text-gray-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/about-us-tbil-2.jpg"
          alt="Core values background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#014e78]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            <span>CORE VALUES</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            OUR CORE VALUES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: Two Columns - Image with Hexagons and Text */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image with Hexagonal Icons Overlay */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/core-values.jpg"
                alt="Core Values"
                fill
                className="object-cover"
              />
              {/* Hexagonal Icons Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Central Hexagon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0290de] flex items-center justify-center rounded-lg rotate-45">
                    <div className="transform -rotate-45 text-white font-bold text-sm text-center px-2">
                      CORE VALUES
                    </div>
                  </div>
                  {/* Surrounding Hexagons */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👍</span>
                  </div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tbil Travels Core Values
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">INTEGRITY -</strong> The
                  foundation of our approach to the client experience can be
                  found in our core values. These include always acting with
                  honesty and integrity, treating others with respect,
                  relentlessly pursuing improvement, the meticulous management
                  of resources, and fostering a family atmosphere for our
                  employees, clients, and partners.
                </p>
                <p>
                  They might sound simple, but they work. Because these are the
                  values you teach your children. These are the values of good,
                  honest people, and they guide our actions and shape how we
                  treat each other, our partners, and our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Two Columns - Stacked Hands Image and Integrity Text */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Stacked Hands Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/intergrity-tbil.jpg"
                alt="Unity and Teamwork"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Integrity Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                INTEGRITY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The foundation of our approach to the client experience can be
                  found in our core values. These include always acting with
                  honesty and integrity, treating others with respect,
                  relentlessly pursuing improvement, the meticulous management
                  of resources, and fostering a family atmosphere for our
                  employees, clients, and partners.
                </p>
                <p>
                  They might sound simple, but they work. Because these are the
                  values you teach your children. These are the values of good,
                  honest people, and they guide our actions and shape how we
                  treat each other, our partners, and our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Leadership, Trust and Lasting Relationships */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Leadership, Trust and Lasting Relationships
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                PEOPLE DEVELOPMENT
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A big part of our kind of leadership isn't just managing
                clients, but how they affect students study abroad conversion
                rate in terms of admission and student visa approvals.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                POSITIVE ATTITUDE
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Driven by our core values, we do what we say, and we say what we
                do. Every single time. As a result, our clients trust us. What's
                more, we realize this commitment to our values and the client
                experience must permeate our entire organization. Everyone here
                touches the client at some point in the process, and we do not
                let that get out of focus.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                CUSTOMER FOCUS
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our client retention rate is extremely high. Our relationships
                are strong and lasting, and our clients work with us again and
                again. In fact, 80 percent of our business every year comes from
                referrals. Loyalty like that doesn't just happen. It's earned by
                doing the right thing and going the extra mile for our clients
                every single day which is more than an abstract concept but a
                way of life.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Word Cloud */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 min-h-[400px]">
              {coreValuesWords.map((item, index) => (
                <span
                  key={index}
                  className={`${item.size} ${item.color} font-bold hover:scale-110 transition-transform cursor-default`}
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
