import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    image: "/visa-application-mistake.jpg",
    headline:
      "5 Visa Application Mistakes That Could Derail Your Study Abroad Dream (And How TGM Education Saves the Day)",
    snippet:
      "Imagine you're clutching your admission letter, your family's throwing a...",
    link: "/study-abroad/news",
  },
  {
    id: 2,
    image: "/packing-list.jpg",
    headline:
      "Essential Study Abroad Packing List for Nigerian Students Travelling Abroad in 2026",
    snippet:
      "Preparing to study abroad is exciting, but packing can quickly...",
    link: "/study-abroad",
  },
];

const studentReview = {
  quote:
    "My experience with Tbil Travel Education has been outstanding. I found them through a Google search, and from the very beginning, their professionalism and transparency stood out. They offer excellent services in a friendly and welcoming atmosphere, and the team is truly hospitable and supportive. I highly recommend Tbil Travel Education to anyone planning to study abroad.",
  name: "Oluwasanya Olufemi",
  degree: "Marketing & Digital Strategy | MSc",
  avatar: "/WhatsApp Image 2025-11-20 at 14.57.53 (2).jpeg",
};

export default function StudyAbroadRecentNews() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #0290de 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Recent News Section */}
          <div>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Recent News
              </h2>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-[#0290de]"></div>
              </div>
            </div>

            {/* News Articles */}
            <div className="space-y-8">
              {newsArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.link}
                  className="block group hover:opacity-90 transition-opacity"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Article Image */}
                    <div className="flex-shrink-0 w-full md:w-48 h-48 rounded-lg overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.headline}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#0290de] mb-2 group-hover:underline">
                        {article.headline}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">
                        {article.snippet}
                      </p>
                      <span className="text-gray-900 font-bold text-sm">
                        read more &gt;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Student Stories/Reviews Section */}
          <div>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Student Stories/Reviews
              </h2>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-[#0290de]"></div>
              </div>
            </div>

            {/* Review Box */}
            <div className="bg-[#0290de] rounded-lg p-8 md:p-10 relative mb-6">
              {/* Quotation Mark */}
              <div className="absolute top-4 left-6 text-white/20 text-8xl font-serif leading-none">
                &quot;
              </div>

              {/* Review Text */}
              <p className="text-white text-lg md:text-xl leading-relaxed relative z-10">
                {studentReview.quote}
              </p>
            </div>

            {/* Reviewer Information */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <Image
                  src={studentReview.avatar}
                  alt={studentReview.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {studentReview.name}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {studentReview.degree}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
