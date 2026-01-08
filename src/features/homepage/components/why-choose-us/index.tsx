"use client"
import React from "react";

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Trusted & Reliable",
    description:
      "With years of experience in the travel industry, we provide trustworthy and reliable services. Your safety and satisfaction are our top priorities.",
    hoverFrom: "from-[#0290de]",
    hoverTo: "to-[#014e78]",
  },
  // {
  //   icon: (
  //     <svg
  //       className="w-12 h-12"
  //       fill="none"
  //       stroke="currentColor"
  //       viewBox="0 0 24 24"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //       />
  //     </svg>
  //   ),
  //   title: "Best Value for Money",
  //   description:
  //     "We offer competitive prices without compromising on quality. Get the most out of your travel budget with our carefully curated packages and exclusive deals.",
  // },
  // {
  //   icon: (
  //     <svg
  //       className="w-12 h-12"
  //       fill="none"
  //       stroke="currentColor"
  //       viewBox="0 0 24 24"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  //       />
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  //       />
  //     </svg>
  //   ),
  //   title: "Authentic Experiences",
  //   description:
  //     "Discover hidden gems and authentic local experiences. Our carefully designed itineraries take you beyond tourist traps to the heart of each destination.",
  // },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you. From booking to your return, we're here to ensure a smooth journey.",
    hoverFrom: "from-[#10b981]",
    hoverTo: "to-[#047857]",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Flexible Booking",
    description:
      "Life happens, and plans change. Enjoy flexible booking options and easy modifications to accommodate your needs and schedule.",
    hoverFrom: "from-[#f59e0b]",
    hoverTo: "to-[#b45309]",
  },
  // {
  //   icon: (
  //     <svg
  //       className="w-12 h-12"
  //       fill="none"
  //       stroke="currentColor"
  //       viewBox="0 0 24 24"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  //       />
  //     </svg>
  //   ),
  //   title: "Expert Local Guides",
  //   description:
  //     "Travel with confidence alongside our knowledgeable local guides who share insider tips, cultural insights, and ensure you make the most of every moment.",
  // },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to making your travel dreams come true with
            exceptional service, unforgettable experiences, and unbeatable
            value.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group bg-white rounded-xl p-8 shadow-md transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-white/30
                hover:bg-gradient-to-br ${feature.hoverFrom} ${feature.hoverTo}
              `}
            >
              <div className="text-[#0290de] mb-4 group-hover:text-white transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-100 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Join thousands of satisfied travelers who have explored the world
              with us.
            </p>
            <button
              onClick={() => {
                // Find the services component
                const servicesSection = document.getElementById("our-services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-white cursor-pointer text-[#014e78] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Our Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
