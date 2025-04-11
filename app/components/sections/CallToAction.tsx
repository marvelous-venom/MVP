// src/components/sections/CallToAction.tsx
import Link from "next/link";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:px-20 xl:py-20 xl:px-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-10 lg:mb-0">
                <FaGraduationCap className="h-12 w-12 text-white opacity-80" />
                <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to simplify your</span>
                  <span className="block">study abroad journey?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                  Join thousands of international students who&apos;ve made
                  their transition smoother, saved money, and enjoyed their
                  experience abroad with StudyGlobal.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Link
                    href="/getting-started"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-sm"
                  >
                    Get Started
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 bg-transparent"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="relative text-center">
                <div className="relative lg:mt-0">
                  <div className="aspect-w-5 aspect-h-3 rounded-lg bg-blue-500 flex items-center justify-center overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 800 600"
                      className="w-full h-full max-w-lg mx-auto"
                      style={{ maxHeight: "300px" }}
                    >
                      {/* World Map Shape */}
                      <path
                        d="M400,150 C550,150 670,250 670,375 C670,500 550,600 400,600 C250,600 130,500 130,375 C130,250 250,150 400,150 Z"
                        fill="#4A88E5"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />

                      {/* Dotted Connection Lines */}
                      <path
                        d="M300,300 Q400,200 500,300 Q600,400 500,450 Q400,500 300,450 Q200,400 300,300"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />

                      {/* Location Pin 1 */}
                      <circle cx="300" cy="300" r="10" fill="#FFFFFF" />
                      <path
                        d="M300,290 L300,275 Q300,265 310,265 H320 Q330,265 330,275 V280 Q330,290 320,290 Z"
                        fill="#FFFFFF"
                      />

                      {/* Location Pin 2 */}
                      <circle cx="500" cy="300" r="10" fill="#FFFFFF" />
                      <path
                        d="M500,290 L500,275 Q500,265 510,265 H520 Q530,265 530,275 V280 Q530,290 520,290 Z"
                        fill="#FFFFFF"
                      />

                      {/* Location Pin 3 */}
                      <circle cx="500" cy="450" r="10" fill="#FFFFFF" />
                      <path
                        d="M500,440 L500,425 Q500,415 510,415 H520 Q530,415 530,425 V430 Q530,440 520,440 Z"
                        fill="#FFFFFF"
                      />

                      {/* Location Pin 4 */}
                      <circle cx="300" cy="450" r="10" fill="#FFFFFF" />
                      <path
                        d="M300,440 L300,425 Q300,415 310,415 H320 Q330,415 330,425 V430 Q330,440 320,440 Z"
                        fill="#FFFFFF"
                      />

                      {/* Flying Paper Airplane */}
                      <path
                        d="M250,250 L400,300 L300,350 Z"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                      <path
                        d="M400,300 L300,350 L360,330 Z"
                        fill="#4A88E5"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white py-2 px-4 rounded-full shadow-md inline-block mt-6 text-blue-600 font-medium">
                  Trusted by 10,000+ students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
