import React from "react";

const services = [
  {
    title: "Study Abroad Advisory Services",
    description:
      "Get expert guidance on choosing the right country, course, and university that fits your goals.",
  },
  {
    title: "Study Loan Application",
    description:
      "We help you apply for education loans from trusted banks and lenders to make your dreams affordable.",
  },
  {
    title: "IELTS Training/Preparation",
    description:
      "Join our training classes to improve your English and get ready for IELTS and other required tests.",
  },
  {
    title: "Alumni Connections",
    description:
      "Talk to past students who have studied at your chosen university and learn from their experience.",
  },
  {
    title: "Visa Counseling",
    description:
      "Step-by-step help with your student visa application, including documents and interview tips.",
  },
  {
    title: "Agent Partnerships",
    description:
      "We partner with agents and counselors to provide trusted support across different regions.",
  },
  {
    title: "Accommodation Support",
    description:
      "We can help you find safe and affordable housing near your university or off-campus.",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Attend our sessions to learn what to expect abroad—from travel tips to living independently.",
  },
];

const additionalFeatures = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "University Webinars & Events",
    description:
      "Meet university reps online or on-site at our exhibition fairs, ask questions, and get the latest updates about admissions and scholarships.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Student Community Groups",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
        />
      </svg>
    ),
    title: "Profile Evaluation & Enhancement",
  },
];

export default function StudyAbroadOurServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Our Services at a Glance */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Services at a Glance
            </h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  {/* Blue Square Checkbox Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#0290de] rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: and more... */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              and more...
            </h2>
            <div className="space-y-6">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 text-[#0290de] opacity-70">
                      {feature.icon}
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-base text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
