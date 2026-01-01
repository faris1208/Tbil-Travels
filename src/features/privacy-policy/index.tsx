import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-primary-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Tbil Travels. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Register for an account or use our services</li>
                <li>Book travel packages, flights, or other services</li>
                <li>Apply for study abroad programs or visa support</li>
                <li>Contact us through our website, email, or phone</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys or promotional activities</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Name, email address, phone number, and postal address</li>
                <li>Passport information and travel documents</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Travel preferences and booking history</li>
                <li>Educational background (for study abroad services)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Processing and managing your bookings and reservations</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending booking confirmations, travel documents, and important updates</li>
                <li>Processing payments and preventing fraudulent transactions</li>
                <li>Improving our website, services, and user experience</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Analyzing usage patterns and trends</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and data analytics.</li>
                <li><strong>Travel Partners:</strong> We may share necessary information with airlines, hotels, tour operators, and other travel service providers to fulfill your bookings.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent for specific purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to or restrict certain processing activities</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Tbil Travels</strong>
                </p>
                <p className="text-gray-600 mb-2">
                Plot 1-3, Shasha road, Akowonjo Roundabout, Beside De-Santos hotel, Akowonjo, Lagos, Nigeria, 100231
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+2349132907238" className="text-[#0290de] hover:underline">
                  09132907238
                  </a>
                  {" / "}
                  {/* <a href="tel:+2349038797700" className="text-[#0290de] hover:underline">
                  09038797700
                  </a> */}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:holidays@tbil-travels.com" className="text-[#0290de] hover:underline">
                    info@tbils.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-primary-gradient hover:bg-primary-gradient-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

