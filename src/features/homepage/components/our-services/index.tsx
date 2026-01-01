import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { ArrowRight, ExternalLink } from "lucide-react";

const services = [
  {
    title: "Study Abroad",
    description: "Official university representative with guaranteed admission & visa support.",
    link: "/study-abroad",
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (1).jpeg",
    isExternal: false,
  },
  {
    title: "Flight Booking",
    description: "Best prices on flights with travel advisory services.",
    link: "https://www.tbils.com/",
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (2).jpeg",
    isExternal: true,
  },
  {
    title: "Visa Consultation",
    description: "Professional guidance to increase visa approval chances.",
    link: "https://www.tbils.com/visa-application",
    image: "/WhatsApp Image 2025-11-20 at 14.57.54.jpeg",
    isExternal: true,
  },
  {
    title: "Proof Of Funds",
    description: "Reliable financial documentation for visa applications.",
    link: "https://wa.me/2348012345678?text=Hello%20I%20would%20like%20to%20inquire%20about%20Proof%20of%20Funds",
    image: "/Top-attractions-itinerary.jpeg",
    isExternal: true,
  },
  {
    title: "Tourism Packages",
    description: "All-inclusive travel packages with visa & flights included.",
    link: "/services/tour-packages",
    image: "/Tbil-Travel-H-3.jpg",
    isExternal: false,
  },
  {
    title: "Hotel Reservation",
    description: "Comfortable & affordable hotel bookings worldwide.",
    link: "https://wa.me/2348012345678?text=Hello%20I%20would%20like%20to%20book%20a%20hotel%20reservation",
    image: "/hotel-reservation.jpg",
    isExternal: true,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[320px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

              {/* Content - positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                
                {/* Description - positioned just above button */}
                <div className="mb-6">
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                
                {/* Learn More Button */}
                {service.isExternal ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:translate-y-0 hover:scale-105 active:scale-95 w-full text-center"
                  >
                    Learn More
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </a>
                ) : (
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:translate-y-0 hover:scale-105 active:scale-95 w-full text-center"
                  >
                    Learn More
                    {/* <ArrowRight className="w-4 h-4" /> */}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}