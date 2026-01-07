"use client";
import React, { useState, useEffect } from "react";
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

const studentReviews = [
  {
    id: 1,
    quote:
      "My experience with Tbil Travel Education has been outstanding. I found them through a Google search, and from the very beginning, their professionalism and transparency stood out. They offer excellent services in a friendly and welcoming atmosphere, and the team is truly hospitable and supportive. I highly recommend Tbil Travel Education to anyone planning to study abroad.",
    name: "Anu Michael",
    degree: "Marketing & Digital Strategy | MSc",
    avatar: "/anu micheal.jpg",
  },
  {
    id: 2,
    quote:
      "The support I received from TGM Education was exceptional. They guided me through every step of the application process and helped me secure a scholarship I never thought possible. Studying in Europe was a dream come true!",
    name: "David Johnson",
    degree: "Computer Science | BSc",
    avatar: "/service-fee.jpg",
  },
  {
    id: 3,
    quote:
      "As an international student, I was overwhelmed by the visa process. TGM Education made it so simple and stress-free. Their 98% visa success rate is real - I'm living proof!",
    name: "Sarah Williams",
    degree: "Business Administration | MBA",
    avatar: "/study.jpgtp2fz4.jpg-c4e2f2a633c82bdc5af3dc2cc841a257-doc.jpeg",
  },
  {
    id: 4,
    quote:
      "From university selection to accommodation assistance, TGM Education provided comprehensive support. Their network of partner universities gave me options I wouldn't have found on my own.",
    name: "Michael Chen",
    degree: "Engineering | PhD",
    avatar: "/2026-01-03 16.30.51.jpg",
  },
];

export default function StudyAbroadRecentNews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === studentReviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentReview = studentReviews[currentReviewIndex];

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
            <div className="bg-[#0290de] rounded-lg p-8 md:p-10 relative mb-6 overflow-hidden">
              {/* Quotation Mark */}
              <div className="absolute top-4 left-6 text-white/20 text-8xl font-serif leading-none">
                &quot;
              </div>

              {/* Reviews Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                {studentReviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                      index === currentReviewIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <p className="text-white text-lg md:text-xl leading-relaxed relative z-10">
                      {review.quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviewer Information */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <Image
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="relative h-16 overflow-hidden">
                  {studentReviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                        index === currentReviewIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h4 className="text-lg font-bold text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        {review.degree}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {studentReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? "bg-[#0290de] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}