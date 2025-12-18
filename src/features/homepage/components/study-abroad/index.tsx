import React from "react";

const services = [
  {
    title: "Institutions",
    description: "Get access to some of the best Institutions abroad.",
  },
  {
    title: "Scholarships",
    description:
      "Discover scholarship programs in some of the best Institutions abroad",
  },
  {
    title: "IELTS",
    description: "Prepare for your IELTS test with our range of resources",
  },
  {
    title: "Consultation",
    description:
      "Use our contact form to arrange a personal online consultation.",
  },
];

export default function StudyAbroad() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#014e78" }}
    >
      {/* Dotted World Map Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(2, 144, 222, 0.6) 1.5px, transparent 1.5px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className="text-7xl md:text-8xl lg:text-[10rem] font-bold opacity-20"
          style={{ color: "#0290de" }}
        >
          STUDY ABROAD
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Overseas Education at Your Fingertip
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We will help you fulfil your dream of studying abroad. We prepare
            and register candidates for various International examinations that
            can be used as entry requirements into various universities and
            colleges across the world. We will also help with your visa, flight
            and accommodation.
          </p>
        </div>

        {/* Services Container with White Border */}
        <div className="mt-12 md:mt-16">
          <div className="border-2 border-white rounded-lg p-8 md:p-10 lg:p-12 bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`text-white px-6 md:px-8 ${
                    index < services.length - 1
                      ? "md:border-r-2 border-white pr-6 md:pr-8"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-white">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
