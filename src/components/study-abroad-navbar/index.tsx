"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function StudyAbroadNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDestinationsDropdownOpen, setIsDestinationsDropdownOpen] =
    useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    {
      href: "/study-abroad",
      label: "ABOUT US",
      hasDropdown: true,
    },
    {
      href: "/study-abroad/services",
      label: "OUR SERVICES",
      hasDropdown: true,
    },
    {
      href: "/study-abroad/destinations/europe",
      label: "DESTINATIONS",
      hasDropdown: true,
    },
    { href: "/study-abroad/enquire", label: "ENQUIRE NOW" },
  ];

  const servicesDropdownItems = [
    {
      href: "/study-abroad/services/commitments",
      label: "SERVICES & COMMITMENTS",
    },
    { href: "/study-abroad/services/benefits", label: "STUDY ABROAD BENEFITS" },
    {
      href: "/study-abroad/services/application",
      label: "APPLICATION PROCESS",
    },
    { href: "/study-abroad/services/visa", label: "VISA GUIDANCE" },
    { href: "/study-abroad/services/exhibit", label: "EXHIBIT WITH US" },
    { href: "/study-abroad/services/fee", label: "SERVICE FEE" },
  ];

  const destinationsDropdownItems = [
    { href: "/study-abroad/destinations/europe", label: "STUDY IN EUROPE" },
    { href: "/study-abroad/destinations/usa", label: "STUDY IN USA" },
    { href: "/study-abroad/destinations/canada", label: "STUDY IN CANADA" },
    {
      href: "/study-abroad/destinations/australia",
      label: "STUDY IN AUSTRALIA",
    },
    { href: "/study-abroad/destinations/uae", label: "STUDY IN UAE" },
    {
      href: "/study-abroad/destinations/new-zealand",
      label: "STUDY IN NEW ZEALAND",
    },
  ];

  const aboutUsDropdownItems = [
    { href: "/study-abroad/who-we-are", label: "WHO WE ARE" },
    { href: "/study-abroad/core-values", label: "CORE VALUES" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
              {/* About Us / Contact Us - Hidden on very small screens */}
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href="/study-abroad/who-we-are"
                  className="hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  About Us
                </Link>
                <span className="text-gray-400">/</span>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
              <span className="hidden sm:inline text-gray-400 mx-1 sm:mx-2">
                |
              </span>
              {/* Phone Number */}
              <a
                href="tel:+2349064534991"
                className="flex items-center gap-1 sm:gap-2 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">(+234) 906-453-4991</span>
                <span className="sm:hidden text-xs">906-453-4991</span>
              </a>
              <span className="hidden sm:inline text-gray-400 mx-1 sm:mx-2">
                |
              </span>
              {/* Search Button - Hidden on very small screens */}
              <button
                className="hidden sm:block hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                href="/study-abroad"
                className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
                onClick={closeMenu}
              >
                Study Abroad
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    const isAboutUs = link.label === "ABOUT US";
                    const isServices = link.label === "OUR SERVICES";
                    const isDestinations = link.label === "DESTINATIONS";
                    const dropdownItems = isAboutUs
                      ? aboutUsDropdownItems
                      : isServices
                      ? servicesDropdownItems
                      : isDestinations
                      ? destinationsDropdownItems
                      : [];
                    const isDropdownOpen =
                      (isAboutUs && isAboutUsDropdownOpen) ||
                      (isServices && isServicesDropdownOpen) ||
                      (isDestinations && isDestinationsDropdownOpen);

                    return (
                      <div
                        key={link.href}
                        className="relative group"
                        onMouseEnter={() => {
                          if (isAboutUs) setIsAboutUsDropdownOpen(true);
                          if (isServices) setIsServicesDropdownOpen(true);
                          if (isDestinations)
                            setIsDestinationsDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (isAboutUs) setIsAboutUsDropdownOpen(false);
                          if (isServices) setIsServicesDropdownOpen(false);
                          if (isDestinations)
                            setIsDestinationsDropdownOpen(false);
                        }}
                      >
                        <Link
                          href={link.href}
                          className="text-[#0290de] hover:text-[#014e78] px-4 py-2 text-sm font-bold uppercase transition-colors relative block"
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0290de] transition-all group-hover:w-full"></span>
                        </Link>
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-lg border border-gray-200 py-2 z-50">
                            {dropdownItems.map((item, index) => (
                              <React.Fragment key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block px-6 py-3 text-sm font-semibold uppercase text-gray-900 hover:bg-gray-50 transition-colors"
                                >
                                  {item.label}
                                </Link>
                                {index < dropdownItems.length - 1 && (
                                  <div className="border-t border-gray-200"></div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#0290de] hover:text-[#014e78] px-4 py-2 text-sm font-bold uppercase transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0290de] transition-all group-hover:w-full"></span>
                    </Link>
                  );
                })}
                <Link
                  href="/study-abroad/enquire"
                  className="bg-primary-gradient hover:bg-primary-gradient-hover text-white px-6 py-2 text-sm font-bold uppercase rounded transition-all duration-300 shadow-md hover:shadow-lg ml-4"
                >
                  BOOK YOUR APPOINTMENT
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isAboutUs = link.label === "ABOUT US";
                  const isServices = link.label === "OUR SERVICES";
                  const isDestinations = link.label === "DESTINATIONS";
                  const dropdownItems = isAboutUs
                    ? aboutUsDropdownItems
                    : isServices
                    ? servicesDropdownItems
                    : isDestinations
                    ? destinationsDropdownItems
                    : [];
                  const isDropdownOpen =
                    (isAboutUs && isAboutUsDropdownOpen) ||
                    (isServices && isServicesDropdownOpen) ||
                    (isDestinations && isDestinationsDropdownOpen);

                  return (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-[#0290de] hover:text-[#014e78] px-3 py-2 text-sm font-bold uppercase transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          if (isAboutUs) {
                            setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                            setIsServicesDropdownOpen(false);
                            setIsDestinationsDropdownOpen(false);
                          }
                          if (isServices) {
                            setIsServicesDropdownOpen(!isServicesDropdownOpen);
                            setIsAboutUsDropdownOpen(false);
                            setIsDestinationsDropdownOpen(false);
                          }
                          if (isDestinations) {
                            setIsDestinationsDropdownOpen(
                              !isDestinationsDropdownOpen
                            );
                            setIsAboutUsDropdownOpen(false);
                            setIsServicesDropdownOpen(false);
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-1 border-l-2 border-gray-200 ml-2">
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-gray-700 hover:text-[#0290de] px-3 py-2 text-sm font-semibold uppercase transition-colors"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[#0290de] hover:text-[#014e78] px-3 py-2 text-sm font-bold uppercase transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/study-abroad/enquire"
                className="block bg-primary-gradient text-white px-3 py-2 text-sm font-bold uppercase rounded text-center mt-4"
                onClick={closeMenu}
              >
                BOOK YOUR APPOINTMENT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
