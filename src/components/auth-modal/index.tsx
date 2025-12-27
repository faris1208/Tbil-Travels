"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AuthModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Only show on homepage
    if (pathname !== "/") return;

    // Check if modal was dismissed in this session
    const dismissed = sessionStorage.getItem("authModalDismissed");
    if (!dismissed) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("authModalDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    // You can add your authentication logic here
    handleClose();
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log("Google sign in");
    // You can add your Google authentication logic here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/auth-modal-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white/80 rounded-full p-1"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Section - Benefits */}
        <div className="bg-gradient-to-br from-[#014e78] to-[#013a5a] text-white p-8 md:p-12 flex flex-col justify-between md:w-2/5">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Sign Up / Login
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Faster Bookings
                  </h3>
                  <p className="text-white/90 text-sm">
                    Quick access to book your travel and study abroad services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Secure Verification
                  </h3>
                  <p className="text-white/90 text-sm">
                    Your information is protected with industry-standard security
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Personalized Offers
                  </h3>
                  <p className="text-white/90 text-sm">
                    Get exclusive deals and offers tailored to your preferences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 md:p-12 flex-1 md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sign In / Register
          </h2>
          <p className="text-gray-600 mb-8">
            Manage Your Bookings With Ease And Enjoy Members-Only Benefits
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0290de] focus:border-[#0290de] outline-none text-black"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Continue
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <p className="text-xs text-gray-600 text-center leading-relaxed">
              By Signing In Or Registering, I Confirm That I Have Read And
              Agreed To Tbil Travels'{" "}
              <a
                href="/privacy-policy"
                className="text-[#0290de] hover:underline"
              >
                Terms And Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-[#0290de] hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

