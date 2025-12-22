"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VisaGuidance() {
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
            <span>VISA GUIDANCE</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
            VISA GUIDANCE
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: Visa Guidance Introduction */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visa Guidance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Visa requirements - As an international student you will need to
                make sure you successfully apply for a visa before you move
                abroad to study. Each study destination will have its own
                requirements and each visa will carry its own rules and
                restrictions.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Role of PIS in Visa Guidance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>PIS</strong> has expert staff to guide you through the
                whole process, whether you choose to study in the UK, Canada,
                U.S, Australia, or the UAE. The process can be complicated and
                universities often encourage international students to seek
                professional guidance before and during the visa application
                stage. <strong>Contact us</strong> at our office today.
              </p>
            </div>

            {/* Right: Visa/Passport Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/visa-guidance-visa.jpg"
                alt="Visa document"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Give Yourself Plenty of Time */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Text Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Give yourself plenty of time
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Applying for a visa is a lengthy process and requires sufficient
                time for submission and documentation. You will not be able to
                start your course unless you have secured your visa beforehand.{" "}
                <Link
                  href="/study-abroad/enquire"
                  className="text-[#0290de] hover:text-[#014e78] font-semibold"
                >
                  Contact us
                </Link>{" "}
                today to discuss the requirements in more detail.
              </p>

              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Supporting documents includes
              </h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Bank statements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>University Acceptance Letter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Education documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Your International Passport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Proof of English Language proficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Visa application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                  <span>Medical results (for certain countries)</span>
                </li>
              </ul>
            </div>

            {/* Right: Visa Guidance Graphic */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    VISA
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    GUIDANCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: PIS Visa Guidance Services */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            PIS Visa Guidance Services includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>Help with collecting your official documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>Visa interview preparations</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>Updates you on any changes in visa regulations</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>Guide on all other aspects of the student visa process</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>Assist with booking English and medical tests</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
                <span>
                  In the unfortunate event that your visa application is
                  rejected, <strong>PIS</strong> will examine the reasons
                  provided and advise you on how you may be able to appeal Visa
                  Guidance
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Interviews */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interviews
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Many immigration offices will also invite you for an interview.{" "}
            <strong>PIS</strong> provide full support in preparing you for the
            interview, advising on the likely format and examples of questions
            you may be asked.
          </p>
        </section>

        {/* Section 5: Visa Restrictions */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Visa Restrictions
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Highly experienced <strong>PIS</strong> staff will also be able to
            advise you on the restrictions of your study visa, for example,
            whether you can:
          </p>
          <ul className="space-y-2 text-gray-700 max-w-3xl">
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
              <span>Work part-time during your course</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
              <span>Stay for full time employment after your course to work</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 mt-1 text-xl font-bold">■</span>
              <span>Bring your family</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Contact PIS */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Contact PIS
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Applying for your visa is not an easy task. Let our trained staff
            support you throughout your application.{" "}
            <Link
              href="/study-abroad/enquire"
              className="text-[#0290de] hover:text-[#014e78] font-semibold"
            >
              Contact us
            </Link>{" "}
            today at our office to discuss more.
          </p>
        </section>
      </div>
    </div>
  );
}

