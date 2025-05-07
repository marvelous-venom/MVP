"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaPaperPlane,
  FaArrowRight,
  FaGlobeAmericas,
  FaUniversity,
  FaHandshake,
  FaPassport,
  FaMobileAlt,
  FaHome,
  FaCreditCard,
  FaUtensils,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                International Student Success Made Simple
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Everything you need to thrive abroad - from banking and SIM
                cards to housing and visa support. All in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/getting-started"
                  className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium shadow-md hover:bg-blue-50 transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-blue-700 transition duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-5 aspect-h-4 rounded-lg bg-blue-400 bg-opacity-30 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M0,200 C0,89.543 89.543,0 200,0 C310.457,0 400,89.543 400,200 C400,310.457 310.457,400 200,400 C89.543,400 0,310.457 0,200 Z"></path>
                      <path d="M100,200 C100,144.772 144.772,100 200,100 C255.228,100 300,144.772 300,200 C300,255.228 255.228,300 200,300 C144.772,300 100,255.228 100,200 Z"></path>
                    </g>
                  </svg>
                </div>

                <div className="relative flex flex-col items-center justify-center h-full">
                  <div className="bg-white p-6 rounded-lg shadow-xl mb-6 w-64 transform rotate-2">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full w-10 h-10 bg-blue-600 text-white flex items-center justify-center">
                        <FaMobileAlt />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-blue-600 font-bold">SIM Card</h3>
                        <p className="text-gray-500 text-sm">
                          Connected in minutes
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-green-500 rounded-full"></div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-xl mb-6 w-64 transform -rotate-1">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full w-10 h-10 bg-green-600 text-white flex items-center justify-center">
                        <FaUniversity />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-green-600 font-bold">Banking</h3>
                        <p className="text-gray-500 text-sm">
                          No fees, easy setup
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-green-500 rounded-full"></div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-xl w-64 transform rotate-1">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full w-10 h-10 bg-purple-600 text-white flex items-center justify-center">
                        <FaHome />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-purple-600 font-bold">Housing</h3>
                        <p className="text-gray-500 text-sm">
                          Safe, affordable options
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-2/3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-600">
                  <span className="font-semibold">4.9/5</span> from{" "}
                  <span className="font-semibold">500+</span> student reviews
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FaUniversity className="h-5 w-5 text-blue-600" />
              <p className="ml-2 text-sm text-gray-600">
                Partnered with <span className="font-semibold">100+</span>{" "}
                universities
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <FaGlobeAmericas className="h-5 w-5 text-green-600" />
              <p className="ml-2 text-sm text-gray-600">
                Helped <span className="font-semibold">10,000+</span>{" "}
                international students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              How Can We Help You?
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Everything international students need to succeed abroad
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Services Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FaHandshake className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Essential Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Get set up with banking, SIM cards, housing, and insurance -
                  all designed for international students.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                  Explore services
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Visa & Immigration Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <FaPassport className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Visa & Immigration
                </h3>
                <p className="text-gray-600 mb-6">
                  Navigate visa requirements, work permissions, and stay
                  compliant with immigration rules.
                </p>
                <Link
                  href="/services/visas"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Student Resources Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <FaGraduationCap className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Student Resources
                </h3>
                <p className="text-gray-600 mb-6">
                  Access guides, checklists, and community forums to make your
                  international student journey smoother.
                </p>
                <a
                  href="/resources"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                  View resources
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Popular Services
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Join thousands of international students who&apos;ve simplified
                their study abroad experience
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banking Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                  <FaCreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Banking</h3>
                  <p className="text-gray-600 mt-2">
                    Student-friendly accounts with no hidden fees and
                    international transfers.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No SSN required</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No minimum balance</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free international transfers
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/banking"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* SIM Cards Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                  <FaMobileAlt className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">SIM Cards</h3>
                  <p className="text-gray-600 mt-2">
                    Stay connected with affordable mobile plans and
                    international calling.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Immediate activation</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited data options</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    International calling included
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/sim-cards"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Housing Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                  <FaHome className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Housing</h3>
                  <p className="text-gray-600 mt-2">
                    Find safe, affordable housing near your campus with verified
                    listings.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Verified student-friendly listings
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No broker fees</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Roommate matching available
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/housing"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Food Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 bg-orange-100 text-orange-600 mr-4">
                  <FaUtensils className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Food & Groceries
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Discounts on meal deliveries and grocery services for
                    students.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Student meal plan discounts
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Grocery delivery services
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    International food guides
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/food"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Insurance Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-3 bg-red-100 text-red-600 mr-4">
                  <FaShieldAlt className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Insurance</h3>
                  <p className="text-gray-600 mt-2">
                    Health, travel, and property insurance packages for
                    students.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Student health plans</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Travel insurance</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Renter&apos;s insurance</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/insurance"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* View All */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                And Much More
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Explore all our services designed to make your international
                student experience easier.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                View All Services
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="p-8 sm:p-12 lg:w-6/12 lg:border-r border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900">
                  Subscribe to StudyGlobal Newsletter
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Each week, we share actionable tips for international
                  students, practical advice, and highlights from our guides,
                  directly to your inbox.
                </p>

                <div className="mt-6 flex items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200"
                      />
                    ))}
                  </div>
                  <div className="ml-3 flex items-center">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">
                      <span className="font-medium text-gray-900">200+</span>{" "}
                      reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:w-6/12 flex items-center">
                {isSubscribed ? (
                  <div className="w-full rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Success!
                        </h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>
                            Thank you for subscribing to our newsletter.
                            We&apos;ve sent a confirmation email to your inbox.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="w-full">
                    <div className="flex flex-col space-y-4">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
                      >
                        <FaPaperPlane className="mr-2 h-4 w-4" />
                        Subscribe
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 text-center">
                      By submitting this form, you&apos;ll be signed up to our
                      newsletter. You can opt-out at any time with no hard
                      feelings. Here&apos;s our{" "}
                      <a
                        href="/privacy"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        privacy policy
                      </a>{" "}
                      if you like reading.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Free Student Resources
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Download our practical guides and checklists to navigate every
                step of your journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-10">
                  <svg
                    className="h-24 w-24 text-blue-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pre-Arrival Checklist
                </h3>
                <p className="text-gray-600 mb-6">
                  Essential steps to complete before leaving your home country
                  for studies abroad.
                </p>
                <a
                  href="/resources/pre-arrival-checklist"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Download checklist
                  <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-48 bg-green-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-10">
                  <svg
                    className="h-24 w-24 text-green-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  First Week Survival Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  Navigate your first week in a new country with confidence
                  using our step-by-step guide.
                </p>
                <a
                  href="/resources/first-week-guide"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Download guide
                  <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-48 bg-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-purple-500 bg-opacity-10">
                  <svg
                    className="h-24 w-24 text-purple-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    Template
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Student Budget Template
                </h3>
                <p className="text-gray-600 mb-6">
                  Plan your finances abroad with our comprehensive student
                  budget template.
                </p>
                <a
                  href="/resources/budget-template"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Download template
                  <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/resources"
              className="inline-flex items-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              View all resources
              <FaArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Student Stories
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Hear from students who&apos;ve simplified their study abroad
                journey with us
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <svg
                  className="h-10 w-10 text-blue-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">
                StudyGlobal made my transition to studying in the US so much
                easier. Their banking recommendations saved me hundreds in fees,
                and the step-by-step guides helped me navigate the visa process
                without stress.
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">
                  MS
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Maria Silva
                  </h4>
                  <p className="text-xs text-gray-500">
                    Brazil • Columbia University
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <svg
                  className="h-10 w-10 text-blue-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">
                Finding affordable housing near campus was a breeze with the
                verified listings. I even found roommates through the community
                forum. The insurance comparison tools saved me time and money.
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-bold">
                  AH
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Ahmed Hassan
                  </h4>
                  <p className="text-xs text-gray-500">
                    Egypt • University of Michigan
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <svg
                  className="h-10 w-10 text-blue-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">
                The SIM card comparison helped me get connected immediately
                after landing. Their partnerships with local banks made opening
                an account so simple - no more carrying cash around!
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 font-bold">
                  SM
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Sofia Martinez
                  </h4>
                  <p className="text-xs text-gray-500">Spain • UCLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Getting started with StudyGlobal is simple
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-sm p-8 relative border border-gray-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                Create Your Profile
              </h3>
              <p className="text-gray-600 mb-6">
                Sign up and tell us about your university, arrival date, and
                specific needs as an international student.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Personalized recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Country-specific information
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-sm p-8 relative border border-gray-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                Explore Services
              </h3>
              <p className="text-gray-600 mb-6">
                Browse our curated services and resources designed specifically
                for international students.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Student-exclusive discounts
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Verified service providers
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-sm p-8 relative border border-gray-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                Get Set Up Quickly
              </h3>
              <p className="text-gray-600 mb-6">
                Follow our step-by-step guides to get everything set up within
                your first week of arrival.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Streamlined processes</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Ongoing support when needed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/getting-started"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to simplify your international student journey?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join thousands of international students who&apos;ve made their
                transition smoother, saved money, and enjoyed their experience
                abroad with StudyGlobal.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/getting-started"
                  className="px-5 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-5 py-3 bg-blue-700 border border-blue-300 text-white rounded-md font-medium hover:bg-blue-800 transition duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative lg:mt-0 flex justify-center">
              <div className="bg-blue-500 bg-opacity-30 rounded-lg p-8 max-w-md">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 bg-opacity-10">
                    <FaGlobeAmericas className="h-6 w-6 text-white" />
                  </div>
                  <blockquote>
                    <p className="text-xl font-medium italic text-white">
                      &quot;StudyGlobal is the resource I wish I had when I
                      first arrived as an international student.&quot;
                    </p>
                  </blockquote>
                  <div className="mt-4">
                    <p className="text-blue-100">
                      International Student from India
                    </p>
                    <p className="text-blue-200 text-sm">Harvard University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
