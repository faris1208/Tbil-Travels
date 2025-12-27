import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

// const services: Service[] = [
//   {
//     icon: (
//       <svg
//         className="w-12 h-12"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//         />
//       </svg>
//     ),
//     title: "Study Abroad",
//     description:
//       "Tbil Travels and Tours is an official representative of a wide range of universities and colleges worldwide. We have study abroad packages for countries like Turkey, UK, Cyprus, Canada, Scotland, etc. Our Study Abroad packages include admission processing, visa support, fees payment, scholarship abroad, etc. We have a track record of successful admission processings. When you buy any of our study abroad package, with the right document and our assistance, your admission is guaranteed.",
//     link: "/study-abroad",
//   },
//   {
//     icon: (
//       <svg
//         className="w-12 h-12"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//         />
//       </svg>
//     ),
//     title: "Flight Booking",
//     description:
//       "We have a robust online flight booking system which gives us an edge at booking local and international flights at competitive prices. We provide travel advisory services and a structured travel itinerary for clients to suit their interests. We also handle changes and other issues that may pop up before or during the trip.",
//     link: "https://www.tbils.com/",
//   },
//   {
//     icon: (
//       <svg
//         className="w-12 h-12"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//     title: "Visa Consultation",
//     description:
//       "We offer professional advice and guidance for your visa processing. Our visa support and assistance package include helping clients to travel to most countries worldwide with legal documents & invitation letters to make the process smooth and increase the chances of visa approval, be it study, visit, tour or business purposes.",
//     link: "https://www.tbils.com/visa-application",
//   },
//   {
//     icon: (
//       <svg
//         className="w-12 h-12"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//         />
//       </svg>
//     ),
//     title: "Proof Of Funds",
//     description:
//       "We provide reliable Proof of Funds documentation to support your visa and travel applications. Our service is designed to meet embassy and institutional requirements, helping applicants clearly demonstrate their financial capacity for study, travel, or relocation abroad. With accuracy, confidentiality, and timely delivery assured, we make the Proof of Funds process smooth and stress-free for individuals and families.",
//     link: "",
//   },
//   {
//     icon: (
//       <svg
//         className="w-12 h-12"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M8 21l4-7 4 7M8 21H4l4-7M16 21h4l-4-7"
//         />
//       </svg>
//     ),
//     title: "Tourism Packages",
//     description:
//       "Our tourism packages are filled with exploring exotic places and trying out adventurous activities. Our all inclusive package mostly includes visa, return flight tickets, city tours, (amusement parks, cruise e.t.c) for both individuals, groups and couples whichever the plan may be. We also provide excursions abroad and educational tours for students.",
//     link: "/services/tour-packages",
//   },
// ];

const services = [
  {
    title: "Study Abroad",
    description:
      "Tbil Travels and Tours is an official representative of a wide range of universities and colleges worldwide. We have study abroad packages for countries like Turkey, UK, Cyprus, Canada, Scotland, etc. Our Study Abroad packages include admission processing, visa support, fees payment, scholarship abroad, etc. We have a track record of successful admission processings. When you buy any of our study abroad package, with the right document and our assistance, your admission is guaranteed.",
    link: "/study-abroad",
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (1).jpeg",
  },
  {
    title: "Flight Booking",
    description:
      "We have a robust online flight booking system which gives us an edge at booking local and international flights at competitive prices. We provide travel advisory services and a structured travel itinerary for clients to suit their interests. We also handle changes and other issues that may pop up before or during the trip.",
    link: "https://www.tbils.com/",
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (2).jpeg",
  },
  {
    title: "Visa Consultation",
    description:
      "We offer professional advice and guidance for your visa processing. Our visa support and assistance package include helping clients to travel to most countries worldwide with legal documents & invitation letters to make the process smooth and increase the chances of visa approval, be it study, visit, tour or business purposes.",
    link: "https://www.tbils.com/visa-application",
    image: "/WhatsApp Image 2025-11-20 at 14.57.54.jpeg",
  },
  {
    title: "Proof Of Funds",
    description:
      "We provide reliable Proof of Funds documentation to support your visa and travel applications. Our service is designed to meet embassy and institutional requirements, helping applicants clearly demonstrate their financial capacity for study, travel, or relocation abroad. With accuracy, confidentiality, and timely delivery assured, we make the Proof of Funds process smooth and stress-free for individuals and families.",
    link: "https://wa.me/2348012345678?text=Hello%20I%20would%20like%20to%20inquire%20about%20Proof%20of%20Funds",
    image: "/Top-attractions-itinerary.jpeg",
  },
  {
    title: "Tourism Packages",
    description:
      "Our tourism packages are filled with exploring exotic places and trying out adventurous activities. Our all inclusive package mostly includes visa, return flight tickets, city tours, (amusement parks, cruise e.t.c) for both individuals, groups and couples whichever the plan may be. We also provide excursions abroad and educational tours for students.",
    link: "/services/tour-packages",
    image: "/Tbil-Travel-H-3.jpg",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-3">
            Our Services Include
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="cursor-pointer group relative h-[420px] rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
