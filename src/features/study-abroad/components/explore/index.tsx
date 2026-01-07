"use client";
import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Get Free Guidance & Choose a Course",
    image: "/WhatsApp Image 2025-11-20 at 14.57.54.jpeg", // Replace with actual image
    description: "Consult with our experts to find the perfect course for you",
  },
  {
    id: 2,
    title: "Apply & Get Admitted",
    image: "/Get-Admission.jpg", // Replace with actual image
    description: "We handle your application process with partner universities",
  },
  {
    id: 3,
    title: "Visa & Travel Preparation",
    image: "/WhatsApp Image 2025-11-20 at 14.57.53 (2).jpeg", // Replace with actual image
    description: "Complete your travel checklist with our support",
    checklist: [
      "Travel Insurance",
      "Passport",
      "Flight Tickets",
      "Hotel Reservation",
    ],
  },
  {
    id: 4,
    title: "Pre-Departure & Arrival",
    image: "/Pre-Departure.jpg", // Replace with actual image
    description: "Get ready for your journey with pre-departure guidance",
  },
];

export default function StudyAbroadExplore() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        {/* <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore{" "}
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block">
              Europe
            </span>{" "}
            Get Scholarships & Relocate With Ease
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get access to over 100 partner universities. Enjoy free visa
            admission support, free one-on-one consultation, and a 98% visa
            success rate - all at no extra cost.
          </p>
        </div> */}


<div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
    Explore{" "}
    <span className="country-rotator-container relative bg-gray-800 text-white px-4 py-2 rounded-lg inline-block align-middle">
      <div className="country-rotator">
      <span className="country-item">Europe</span>
        <span className="country-item">The UK</span>
        <span className="country-item">The US</span>
        <span className="country-item">Poland</span>
      </div>
    </span>{" "}
    Get Scholarships & Relocate With Ease
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
    Get access to over 100 partner universities. Enjoy free visa
    admission support, free one-on-one consultation, and a 98% visa
    success rate - all at no extra cost.
  </p>
</div>

<style jsx>{`
  .country-rotator-container {
    width: 150px;
    height: 3.5rem;
    overflow: hidden;
  }

  .country-rotator {
    animation: slide 8s infinite ease-in-out;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .country-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    font-weight: bold;
    width: 100%;
  }

  @keyframes slide {
    0%, 20% {
      transform: translateY(0);
    }
    25%, 45% {
      transform: translateY(-3.5rem);
    }
    50%, 70% {
      transform: translateY(-7rem);
    }
    75%, 95% {
      transform: translateY(-10.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .country-rotator-container {
      width: 180px;
      height: 4.2rem;
    }
    
    .country-item {
      height: 4.2rem;
    }
    
    @keyframes slide {
      0%, 20% {
        transform: translateY(0);
      }
      25%, 45% {
        transform: translateY(-4.2rem);
      }
      50%, 70% {
        transform: translateY(-8.4rem);
      }
      75%, 95% {
        transform: translateY(-12.6rem);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media (min-width: 1024px) {
    .country-rotator-container {
      width: 200px;
      height: 4.8rem;
    }
    
    .country-item {
      height: 4.8rem;
    }
    
    @keyframes slide {
      0%, 20% {
        transform: translateY(0);
      }
      25%, 45% {
        transform: translateY(-4.8rem);
      }
      50%, 70% {
        transform: translateY(-9.6rem);
      }
      75%, 95% {
        transform: translateY(-14.4rem);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`}</style>

        {/* Step-by-Step Process */}
        <div className="relative mt-16 md:mt-24">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 text-gray-300 hidden md:block">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="absolute top-8 right-1/4 w-12 h-12 text-gray-300 hidden md:block">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Starting Point Icon */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 hidden md:block">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* Curved Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 50 Q 250 20, 500 50 T 1000 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-300"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Image */}
                <div className="relative mb-6">
                  {step.id === 3 ? (
                    // Special styling for the sticky note (Step 3)
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-yellow-300 rounded-lg shadow-lg transform rotate-[-5deg] p-4 relative">
                      <div className="text-sm font-semibold text-gray-800 mb-2">
                        Travel Checklist
                      </div>
                      <div className="space-y-1 text-xs text-gray-700">
                        {step.checklist?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <span className="text-green-600">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      {/* Decorative sticky notes behind */}
                      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-pink-200 rounded-lg transform rotate-12 opacity-60 -z-10"></div>
                      <div className="absolute -top-2 -left-2 w-20 h-20 bg-green-200 rounded-lg transform -rotate-12 opacity-60 -z-10"></div>
                    </div>
                  ) : (
                    // Circular image for other steps
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Step Caption */}
                <div className="text-center">
                  <h3
                    className="text-lg md:text-xl font-semibold text-[#0290de] mb-2"
                    style={{
                      fontFamily: "cursive, sans-serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 hidden md:block">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
