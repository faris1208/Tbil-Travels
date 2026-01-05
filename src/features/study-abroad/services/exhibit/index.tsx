"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExhibitWithUs() {
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
        {/* Abstract network overlay */}
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
            <span>EXHIBIT WITH US</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            STUDENTS EXHIBITIONS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: TBILS Education Exhibitions */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Exhibition Booth Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/exhibit-booth.jpg"
                alt="Education exhibition booth"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                TBILS Education Exhibitions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Experienced <strong>TBILS</strong> staff run a number of highly
                  successful education exhibitions every year. The exhibitions
                  provide a safe and focused platform for its partners to meet
                  parents and counsel potential students in Nigeria who desire
                  international education meet with delegates of partner
                  Institutions from the UK, USA, UAE, Australia, Canada, New
                  Zealand and other countries.
                </p>
                <p>
                  The exhibition events are held at strategic venues within key{" "}
                  <strong>TBILS</strong> cities and attract a high number of
                  quality students. <strong>TBILS</strong> brings together
                  exhibitors from all over the world to showcase college,
                  bachelor, master, MBA and PhD study opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Exhibition Promotion */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exhibition Promotion
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  The exhibitions are promoted across <strong>TBILS</strong>'s
                  established networks of schools and universities, along with
                  targeted marketing campaigns in the local media.
                </p>
                <p>
                  <strong>TBILS</strong> Exhibition is a high value, well branded
                  and highly publicised event which is considered as a lifeline
                  for many educational institutions for student recruitment.
                  Besides student recruitment, this fair object is also to
                  create opportunities to form business partnerships with local
                  institutions with a common goal to bring the highest
                  standards in education system.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                TBILS can also offer:
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    The services of a dedicated, trained and experienced
                    education counsellor to run and manage your stand if
                    required.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Follow up of data collected during exhibitions by{" "}
                    <strong>TBILS</strong> dedicated customer services team.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    One to one sessions by designated <strong>TBILS</strong> staff
                    with prospective students on behalf of the partner.
                  </span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Please{" "}
                <Link
                  href="/study-abroad/enquire"
                  className="text-[#0290de] hover:text-[#014e78] font-semibold"
                >
                  Contact us
                </Link>{" "}
                today for more information!
              </p>
            </div>

            {/* Right: University EXPO Illustration */}
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="absolute inset-0 p-8">
                {/* Exhibition booths/walls */}
                <div className="absolute top-1/4 left-0 w-24 h-32 bg-blue-600 rounded"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-40 bg-red-500 rounded"></div>
                <div className="absolute bottom-1/4 left-1/3 w-28 h-36 bg-yellow-400 rounded"></div>
                <div className="absolute bottom-1/3 right-0 w-32 h-28 bg-black rounded"></div>
                
                {/* Banners */}
                <div className="absolute top-8 left-1/4 w-32 h-8 bg-blue-500 rounded"></div>
                <div className="absolute top-12 right-1/3 w-28 h-8 bg-red-500 rounded"></div>
                
                {/* University EXPO Text */}
                <div className="absolute top-8 right-8">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    University EXPO
                  </div>
                </div>
                
                {/* People figures - simplified representation */}
                <div className="absolute bottom-1/4 left-1/4 flex items-end gap-4">
                  {/* Person 1 */}
                  <div className="w-12 h-20 bg-red-500 rounded-t-full"></div>
                  {/* Person 2 */}
                  <div className="w-10 h-18 bg-black rounded-t-full"></div>
                </div>
                
                <div className="absolute bottom-1/3 left-1/2 flex items-end gap-4">
                  {/* Person 3 */}
                  <div className="w-12 h-20 bg-blue-500 rounded-t-full"></div>
                  {/* Person 4 */}
                  <div className="w-10 h-18 bg-black rounded-t-full"></div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 flex items-end gap-4">
                  {/* Person 5 */}
                  <div className="w-12 h-20 bg-red-500 rounded-t-full"></div>
                  {/* Person 6 */}
                  <div className="w-10 h-18 bg-yellow-400 rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

