"use client";

import React, { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is included in your tour packages?",
    answer:
      "Our all-inclusive tour packages typically include visa processing, return flight tickets, city tours, visits to amusement parks and cruises, accommodation, and guided tours. Packages are available for individuals, groups, and couples. We also provide excursions abroad and educational tours for students.",
  },
  {
    question: "Which countries do you offer study abroad packages for?",
    answer:
      "We offer study abroad packages for countries including Turkey, UK, Cyprus, Canada, Scotland, and many more. Our packages include admission processing, visa support, fees payment assistance, and scholarship opportunities. We have a proven track record of successful admission processings.",
  },
  {
    question: "How do I book a flight through your service?",
    answer:
      "You can book flights through our robust online flight booking system, which offers competitive prices for both local and international flights. We also provide travel advisory services and structured travel itineraries tailored to your interests. Our team handles changes and any issues that may arise before or during your trip.",
  },
  {
    question: "Do you provide visa support and assistance?",
    answer:
      "Yes, we offer professional visa processing advice and guidance. Our visa support package includes helping clients travel to most countries worldwide with legal documents and invitation letters to make the process smooth and increase visa approval chances. We assist with study, visit, tour, and business visas.",
  },
  {
    question: "What does your travel insurance cover?",
    answer:
      "Our travel insurance plans cover medical emergencies on trips, trip cancellations, flight cancellations, loss of passport, delayed medical evacuation, and delayed, damaged, or stolen luggage. Coverage depends on the plan purchased and when it's purchased. We offer travel insurance plans for both leisure and business purposes.",
  },
  {
    question: "Can you help with hotel reservations and airport transfers?",
    answer:
      "Absolutely! Our hotel reservation packages are available for individuals, couples, and groups. We have access to over 200,000 hotels worldwide. We also pre-arrange airport transfers from and to most airports globally, providing transportation between airports and destinations such as hotels, cruise ports, or other local points of interest.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation policies vary depending on the service and package you've booked. We offer flexible booking options and easy modifications to accommodate your needs. Please contact our support team for specific cancellation terms related to your booking, or refer to your booking confirmation for detailed information.",
  },
  {
    question: "How can I contact your support team?",
    answer:
      "Our dedicated support team is available 24/7 to assist you. You can reach us via phone at +234 908 5551 797 or +234 908 7738 270, email us at holidays@tbil-travels.com, or visit our office at Plot 8, Elegushi Beach Road, Ikate Roundabout, Lekki, Lagos. We're here to help from booking to your return.",
  },
  {
    question: "What happens if my flight is cancelled or delayed?",
    answer:
      "In the event of a flight cancellation or delay, we will assist you in communicating with the airline for rebooking or available alternatives.",
  },
  {
    question: "Do you offer one-way and round-trip tickets?",
    answer:
      "Yes, we offer one-way, round-trip and multi-city flight bookings. You can choose the type of ticket that best suits your needs.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  useEffect(() => {
    // Handle scroll to FAQ section when page loads with hash
    if (window.location.hash === "#faq") {
      const element = document.getElementById("faq");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, bookings, and
            travel packages.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#0290de] focus:ring-inset hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#0290de] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-gradient hover:bg-primary-gradient-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
