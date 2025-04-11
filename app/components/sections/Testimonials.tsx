// src/components/sections/Testimonials.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content:
        "StudyGlobal made my transition to studying in the US so much easier. Their banking recommendations saved me hundreds in fees, and their step-by-step guides helped me navigate the visa process without stress.",
      author: {
        name: "Maria Silva",
        role: "International Student, Brazil",
        imageUrl: "/images/testimonials/student-1.jpg",
        university: "Columbia University",
      },
    },
    {
      content:
        "I was overwhelmed by all the paperwork for my visa extension until I found the step-by-step guides here. The community forum connected me with other students who shared their experiences, which was incredibly helpful!",
      author: {
        name: "Li Wei",
        role: "Graduate Student, China",
        imageUrl: "/images/testimonials/student-2.jpg",
        university: "Stanford University",
      },
    },
    {
      content:
        "Finding affordable housing near campus was a breeze with the verified listings. I even found roommates through the community forum. The insurance comparison tools saved me time and money finding the right coverage.",
      author: {
        name: "Ahmed Hassan",
        role: "Undergraduate Student, Egypt",
        imageUrl: "/images/testimonials/student-3.jpg",
        university: "University of Michigan",
      },
    },
    {
      content:
        "The SIM card comparison helped me get connected immediately after landing. Their partnerships with local banks made opening an account so simple - no more carrying cash around! StudyGlobal is essential for international students.",
      author: {
        name: "Sofia Martinez",
        role: "Exchange Student, Spain",
        imageUrl: "/images/testimonials/student-4.jpg",
        university: "UCLA",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Student Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Hear from students who&apos;ve simplified their study abroad journey
            with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8 sm:p-10 border border-gray-100">
            <div className="text-blue-600 mb-4">
              <FaQuoteLeft className="h-8 w-8 opacity-50" />
            </div>

            <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
              {testimonials[currentIndex].content}
            </p>

            <div className="flex items-center">
              <div className="h-14 w-14 relative rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={testimonials[currentIndex].author.imageUrl}
                  alt={testimonials[currentIndex].author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentIndex].author.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].author.role}
                </p>
                <p className="text-sm font-medium text-blue-600">
                  {testimonials[currentIndex].author.university}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 sm:-ml-6">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 sm:-mr-6">
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
