// src/components/sections/Newsletter.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="lg:flex">
            <div className="p-8 sm:p-12 lg:w-6/12 lg:border-r border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900">
                Subscribe to StudyNotes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Each week, we share actionable tips for international students,
                practical advice, and highlights from our guides, directly to
                your inbox.
              </p>

              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2 overflow-hidden">
                  {[1, 2, 3].map((index) => (
                    <Image
                      width={32}
                      height={32}
                      key={index}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`/images/avatars/student-${index}.jpg`}
                      alt=""
                    />
                  ))}
                </div>
                <div className="ml-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <svg
                        key={index}
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
              {isSubmitted ? (
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
                <form onSubmit={handleSubmit} className="w-full">
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
  );
};
