import React from "react";
import Link from "next/link";

export default function AboutUs() {
  const values = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Trust & Reliability",
      description:
        "We build lasting relationships with our clients through transparency, honesty, and consistent delivery of exceptional service.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, understand, and go above and beyond to exceed your expectations.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We continuously evolve our services and embrace new technologies to provide you with the best travel solutions.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Global Reach",
      description:
        "With partnerships worldwide, we connect you to destinations across the globe, making international travel seamless.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Tbil Travels
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Your trusted partner in creating unforgettable travel experiences
            around the world.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tbil Travels stands as the holiday division of Tbil Travels,
                  dedicated to curating bespoke and cost-effective vacations for
                  all kinds of travelers. Founded with a passion for exploration
                  and a commitment to excellence, we have been transforming
                  travel dreams into reality for over a decade.
                </p>
                <p>
                  What started as a small travel agency has grown into a
                  comprehensive travel solutions provider, offering everything
                  from tour packages and study abroad programs to flight
                  bookings, visa support, travel insurance, and hotel
                  reservations. Our journey has been marked by thousands of
                  satisfied travelers who have trusted us with their most
                  important journeys.
                </p>
                <p>
                  We believe that travel is not just about reaching a
                  destination but about the experiences, memories, and
                  connections made along the way. This philosophy drives
                  everything we do, from designing unique itineraries to
                  providing 24/7 support during your travels.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#0290de] mb-4">
                  {stats[2].number}
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  Years of Excellence
                </div>
                <p className="text-gray-600">
                  Serving travelers with passion and dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#0290de]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To make world-class travel accessible to everyone by providing
                exceptional service, competitive pricing, and unforgettable
                experiences. We strive to be the most trusted travel partner,
                ensuring every journey is seamless, safe, and memorable.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#0290de]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading travel solutions provider globally,
                recognized for innovation, reliability, and customer
                satisfaction. We envision a world where travel is effortless,
                accessible, and enriching for everyone, regardless of their
                destination or purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape every
              interaction with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#0290de] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Tour & Vacation Packages",
              "Study Abroad Programs",
              "Flight Reservations",
              "Visa Support & Assistance",
              "Travel Insurance",
              "Hotel Reservations & Airport Transfers",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0290de] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Let us help you create unforgettable travel experiences. Get in
            touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-gradient hover:bg-primary-gradient-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="bg-white border-2 border-[#0290de] text-[#0290de] hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
