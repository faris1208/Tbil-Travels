"use client";

import React, { useState } from "react";

export default function Enquire() {
  const [formData, setFormData] = useState({
    studyDestination: "UK",
    fullName: "",
    phoneNumber: "",
    nationality: "",
    degree: "Bachelor",
    major: "",
    email: "",
    placeOfLiving: "",
    dateOfBirth: "",
    gender: "Male",
    relationship: "Single",
    sponsor: "Yourself",
    hearAboutUs: "Twitter",
    contactMethod: "Phone Call",
    additionalServices: "Airport pickup",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        studyDestination: "UK",
        fullName: "",
        phoneNumber: "",
        nationality: "",
        degree: "Bachelor",
        major: "",
        email: "",
        placeOfLiving: "",
        dateOfBirth: "",
        gender: "Male",
        relationship: "Single",
        sponsor: "Yourself",
        hearAboutUs: "Twitter",
        contactMethod: "Phone Call",
        additionalServices: "Airport pickup",
        additionalInfo: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-[#014e78] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            REQUEST
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introductory Text */}
        <div className="mb-8 md:mb-12">
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            Start here to fill out your information and one of our counselors
            will contact you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Row - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Where do you want to study? */}
              <div>
                <label
                  htmlFor="studyDestination"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Where do you want to study?
                </label>
                <select
                  id="studyDestination"
                  name="studyDestination"
                  value={formData.studyDestination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Europe">Europe</option>
                  <option value="UAE">UAE</option>
                  <option value="New Zealand">New Zealand</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>

              {/* Nationality */}
              <div>
                <label
                  htmlFor="nationality"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  What is your nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Nationality"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* What degree are you seeking? */}
              <div>
                <label
                  htmlFor="degree"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  What degree are you seeking?
                </label>
                <select
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white mb-3 cursor-pointer text-black"
                >
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Certificate">Certificate</option>
                </select>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  placeholder="Enter the major you are looking for"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>

              {/* Place of Living */}
              <div>
                <label
                  htmlFor="placeOfLiving"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Where do you live?
                </label>
                <input
                  type="text"
                  id="placeOfLiving"
                  name="placeOfLiving"
                  value={formData.placeOfLiving}
                  onChange={handleChange}
                  placeholder="Place of Living"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                />
              </div>
            </div>
          </div>

          {/* Second Row - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Date of birth
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors text-black"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              {/* How do you hear about us? */}
              <div>
                <label
                  htmlFor="hearAboutUs"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  How do you hear about us?
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Twitter">Twitter</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Friend/Referral">Friend/Referral</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Relationship */}
              <div>
                <label
                  htmlFor="relationship"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Relationship
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              {/* Sponsor */}
              <div>
                <label
                  htmlFor="sponsor"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Sponsor
                </label>
                <select
                  id="sponsor"
                  name="sponsor"
                  value={formData.sponsor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Yourself">Yourself</option>
                  <option value="Parents">Parents</option>
                  <option value="Scholarship">Scholarship</option>
                  <option value="Employer">Employer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* How would you like us to contact you? */}
              <div>
                <label
                  htmlFor="contactMethod"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  How would you like us to contact you?
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="SMS">SMS</option>
                </select>
              </div>

              {/* Additional Services */}
              <div>
                <label
                  htmlFor="additionalServices"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Check any additional services you will request:
                </label>
                <select
                  id="additionalServices"
                  name="additionalServices"
                  value={formData.additionalServices}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors bg-white cursor-pointer text-black"
                >
                  <option value="Airport pickup">Airport pickup</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Visa Support">Visa Support</option>
                  <option value="Travel Insurance">Travel Insurance</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Info Text Area */}
          <div>
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Do you have anything else to tell us? including your GPA! or if
              you have IELTS OR TOEFL exam?
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none transition-colors resize-none text-black"
              placeholder="Enter any additional information..."
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                Thank you! Your request has been submitted successfully. One of
                our counselors will contact you shortly.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">
                Something went wrong. Please try again later.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#014e78] hover:bg-[#013a5a] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
