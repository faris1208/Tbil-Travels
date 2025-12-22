"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesAndCommitments() {
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
            <span>SERVICES & COMMITMENTS</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            OUR SERVICES & COMMITMENTS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: PIS Services */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left: Text Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                PIS Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide overseas students with higher education opportunities
                across the world. We share details of suitable courses available
                at a wide range of quality universities and study institutions. We
                believe in delivering a service that crafts you a straightforward,
                customized and a detailed action plan to make it through university
                abroad.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Our services are:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 text-xl">■</span>
                  <span>Independent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 text-xl">■</span>
                  <span>Sensitive to the requirements of the universities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 text-xl">■</span>
                  <span>Designed to match your own needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 text-xl">■</span>
                  <span>The best expert advice on courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1 text-xl">■</span>
                  <span>
                    Study destinations including the UK and Europe, Australia,
                    New Zealand, Canada, USA and the UAE.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Globe Graphic */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Globe base */}
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-80"></div>
                    {/* Landmarks and airplanes - simplified representation */}
                    <div className="absolute top-1/4 left-1/4 text-3xl">🗼</div>
                    <div className="absolute top-1/3 right-1/4 text-3xl">🕰️</div>
                    <div className="absolute bottom-1/4 left-1/3 text-3xl">🗽</div>
                    <div className="absolute bottom-1/3 right-1/3 text-3xl">🏛️</div>
                    <div className="absolute top-1/2 left-1/6 text-3xl">🏯</div>
                    <div className="absolute top-1/2 right-1/6 text-3xl">🎭</div>
                    <div className="absolute top-1/6 left-1/2 text-2xl">✈️</div>
                    <div className="absolute bottom-1/6 right-1/2 text-2xl">✈️</div>
                    {/* STUDY ABROAD Text */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                          STUDY ABROAD
                        </h3>
                        <div className="mt-2 w-16 h-16 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Commitments */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: 100% Commitment Circle */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                      100%
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      commitment
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 text-4xl">❤️</div>
                <div className="absolute -bottom-4 -left-4 text-4xl">✈️</div>
              </div>
            </div>

            {/* Right: Commitments Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Commitments are tailored:
              </h2>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    To obtain the best possible course offers for you
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    To advise and guide you at every stage of the process
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    To consider your educational interests first at all times
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    We have always been committed to making sure that our
                    students receive the best value for what they have paid for.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    From applying for a visa, to completing a college
                    application and finally adjusting in the country of your
                    choice, we remain by your side and make sure to walk through
                    the process, effortlessly.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Our main focus is optimizing the whole process and making it
                    convenient for our clients. At{" "}
                    <strong>Prime International Study</strong>, we always strive
                    to be of exquisite value to our clients and make a
                    difference in their lives.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: How Is This Achieved? */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How Is This Achieved?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Qualified International Student Counsellors provide initial
                contact and local advice. Consulting with an educational advisor
                increases your chances of university acceptance. We have helped
                many students succeed.
              </p>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  You should bring the following to this meeting:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                    <span>
                      Education certificates, including any English language test
                      results
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                    <span>
                      Details of two referees, one of which must be from an
                      academic background
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                    <span>
                      For postgraduate course, a CV containing details of all
                      responsibilities held
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                    <span>Your sponsor, if possible</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Interview Sessions and Presentations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our partners regularly run interview sessions and seminars at
                  our offices. Please contact us for the latest information.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Education Fairs and Exhibitions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We also run education fairs in various markets, offering you a
                  chance to meet university representatives face-to-face.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/Tbil-Travel-H-3.jpg"
                alt="Students studying together"
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

