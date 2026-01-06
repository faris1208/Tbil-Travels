"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceFee() {
  const serviceFees = [
    { country: "UK/Europe", fee: "N80,000" },
    { country: "USA", fee: "N500,000" },
    { country: "Canada", fee: "N500,000" },
    { country: "Australia", fee: "N200,000" },
    { country: "UAE", fee: "N80,000" },
    { country: "New Zealand", fee: "N200,000" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/study-abroad0services.jpg"
          alt="Services and commitments background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#014e78]/80"></div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Abstract glow overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            <span>SERVICE FEE</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            FEES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: Service Fee Introduction */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Fee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The service fee covers a range of study placement services for
                different countries that includes but is not limited to:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Providing dedicated expert advice on most suitable course
                    and career options for you.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Guidance with application documents required and then
                    applying to your chosen institutions on your behalf.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    We prepare and expertly guide applicants in visa application.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Ensuring that all available scholarships are pursued on your
                    behalf.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Guidance with regard to work opportunities in your chosen
                    study country.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Advising on international summer schools in world renown
                    universities specially designed for students and working
                    professionals.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>
                    Providing a IELTS coaching centre to help prepare you for
                    your IELTS test.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You will be able to make up to 3 applications in total.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may defer your entry once before an additional Service fee
                will be required.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/service-fee.jpg"
                alt="Service fee representation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Service Fee Table */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Tbil Travels International Study Service Fee
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
              <thead>
                <tr className="bg-[#014e78] text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold uppercase text-sm md:text-base">
                    STUDY COUNTRY
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold uppercase text-sm md:text-base">
                    SERVICE FEE (NAIRA)
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceFees.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-semibold">
                      {item.country}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-semibold">
                      {item.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

