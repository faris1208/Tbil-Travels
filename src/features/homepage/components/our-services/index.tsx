import React from "react";
import Link from "next/link";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
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
          strokeWidth={1.5}
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 21l4-7 4 7M8 21H4l4-7M16 21h4l-4-7"
        />
      </svg>
    ),
    title: "Tour | Vacation Packages",
    description:
      "Our tour packages are filled with exploring exotic places and trying out adventurous activities. Our all inclusive package mostly includes visa, return flight tickets, city tours, (amusement parks, cruise e.t.c) for both individuals, groups and couples whichever the plan may be. We also provide excursions abroad and educational tours for students.",
    link: "/services/tour-packages",
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
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Study Abroad Packages",
    description:
      "Tbil Travels and Tours is an official representative of a wide range of universities and colleges worldwide. We have study abroad packages for countries like Turkey, UK, Cyprus, Canada, Scotland, etc. Our Study Abroad packages include admission processing, visa support, fees payment, scholarship abroad, etc. We have a track record of successful admission processings. When you buy any of our study abroad package, with the right document and our assistance, your admission is guaranteed.",
    link: "/services/study-abroad",
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
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    title: "Flight Reservation and Booking",
    description:
      "We have a robust online flight booking system which gives us an edge at booking local and international flights at competitive prices. We provide travel advisory services and a structured travel itinerary for clients to suit their interests. We also handle changes and other issues that may pop up before or during the trip.",
    link: "/services/flight-booking",
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
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Visa Support & Assistance",
    description:
      "We offer professional advice and guidance for your visa processing. Our visa support and assistance package include helping clients to travel to most countries worldwide with legal documents & invitation letters to make the process smooth and increase the chances of visa approval, be it study, visit, tour or business purposes.",
    link: "/services/visa-support",
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
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      </svg>
    ),
    title: "Travel Insurance",
    description:
      "Our insurance plans covers medical emergency on trips, cancellation on trips, flights cancellations, loss of passport, delayed medical evacuation, delayed and damaged or stolen luggage that may pop up before or during the trip, depending on what plan is purchased and when purchased. We offer travel insurance plans for both leisure and business purposes",
    link: "/services/travel-insurance",
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
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Hotel Reservations & Airport Pickup Services",
    description:
      "Our Reservations packages are available for individual, couples and groups. We also pre-arrange airport Transfers from and to most airport globally, transportation for travelers between an airport and their destination, whether it be a hotel, cruise port or another local point of interest. With over 200,000 hotels worldwide, our clients are guaranteed to get the best of relaxation",
    link: "/services/hotel-reservations",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-3">
            Our Services Include
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Icon with subtle background */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-auto">
                <Link
                  href={service.link}
                  className="text-[#0290de] hover:text-[#014e78] font-medium text-sm md:text-base underline transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
