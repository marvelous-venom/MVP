// src/app/services/housing/page.tsx
import Link from "next/link";
import {
  FaHome,
  FaBuilding,
  FaPencilAlt,
  FaFileContract,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function HousingServicePage() {
  const housingOptions = [
    {
      name: "Student.com",
      logo: "/images/partners/student-com.png",
      features: {
        housingType: "Purpose-built student accommodation",
        locationOptions: "Near major universities",
        contractLength: "Semester or full year",
        utilities: "Usually included",
        roomTypes: "Studios to shared apartments",
        internationalFriendly: "Yes - No SSN or U.S. credit required",
      },
      studentOffer: "$100 off with code STUDYGLOBAL",
      link: "https://www.student.com",
    },
    {
      name: "Apartments.com",
      logo: "/images/partners/apartments-com.png",
      features: {
        housingType: "Regular apartment rentals",
        locationOptions: "Citywide options",
        contractLength: "6-12 months typical",
        utilities: "Usually not included",
        roomTypes: "Studios to multi-bedroom units",
        internationalFriendly: "May require co-signer or extra deposit",
      },
      studentOffer: "Free rental guide for international students",
      link: "https://www.apartments.com",
    },
    {
      name: "University Housing",
      logo: "/images/partners/university-housing.png",
      features: {
        housingType: "On-campus dormitories",
        locationOptions: "On or near campus",
        contractLength: "Academic year",
        utilities: "Included",
        roomTypes: "Shared rooms to suites",
        internationalFriendly: "Yes - Priority for international students",
      },
      studentOffer: "Early application option for international students",
      link: "#university-housing",
    },
  ];

  const housingFAQs = [
    {
      question: "Should I live on-campus or off-campus?",
      answer:
        "On-campus housing offers convenience, built-in community, and usually includes utilities. Off-campus housing can be more affordable, offers more privacy, and helps you develop independence. First-year international students often benefit from on-campus housing to ease the transition before moving off-campus in later years.",
    },
    {
      question: "What documents do I need to rent an apartment in the U.S.?",
      answer:
        "You'll typically need proof of identity (passport), proof of student status (I-20 form), proof of income or financial support (bank statements or sponsor letter), and sometimes a Social Security Number or ITIN. Many landlords also require a U.S. guarantor/co-signer, though some properties offer international student-friendly options with larger security deposits instead.",
    },
    {
      question: "How far in advance should I secure housing?",
      answer:
        "For on-campus housing, apply as soon as the application opens (usually 6-8 months before the semester starts). For off-campus housing, start searching 2-3 months before your move-in date. In competitive markets near popular universities, you may need to start even earlier.",
    },
    {
      question: "What's included in a typical lease agreement?",
      answer:
        "U.S. leases typically include the monthly rent amount, lease duration, security deposit amount, utilities responsibility, pet policies, maintenance provisions, and rules about subleasing. Always read the entire lease carefully and ask questions before signing. Some universities offer lease-review services for international students.",
    },
  ];

  const housingTips = [
    {
      title: "Understand Your Budget",
      description:
        "Include rent, utilities, internet, renter's insurance, and transportation costs in your housing budget.",
      icon: FaHome,
    },
    {
      title: "Research Neighborhoods",
      description:
        "Consider safety, proximity to campus, access to public transportation, and nearby amenities.",
      icon: FaMapMarkerAlt,
    },
    {
      title: "Get Everything in Writing",
      description:
        "Ensure all agreements, promised repairs, and special conditions are documented in your lease.",
      icon: FaFileContract,
    },
    {
      title: "Inspect Before You Sign",
      description:
        "Document pre-existing damages with photos before moving in to protect your security deposit.",
      icon: FaPencilAlt,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Housing for International Students
            </h1>
            <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto">
              Find the perfect on-campus or off-campus housing options with
              international student-friendly leasing terms.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Housing Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on finding housing as an
              international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-housing-video-id"
              title="Housing Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-red-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Channel
              </a>{" "}
              for more helpful videos.
            </p>
          </div>
        </div>
      </div>

      {/* Housing Options Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Housing Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Explore these student-friendly housing options with exclusive
              benefits.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {housingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaBuilding className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {option.name}
                      </h3>
                      <p className="text-sm text-red-600">
                        {option.studentOffer}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      Find Housing
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Housing Type
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.housingType}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Location Options
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.locationOptions}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Contract Length
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.contractLength}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Utilities
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.utilities}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Room Types
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.roomTypes}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        International Friendly
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.internationalFriendly}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* On-campus vs Off-campus */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              On-Campus vs. Off-Campus Housing
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the pros and cons of each housing option to make the
              best choice for your situation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 rounded-full p-3 text-red-600">
                  <FaBuilding className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                On-Campus Housing
              </h3>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Pros</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Convenient location near classes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Utilities typically included
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Built-in community and social opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        No need for U.S. credit history or co-signer
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Cons</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Generally more expensive
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Less privacy and independence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Limited availability (apply early)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        May close during breaks and holidays
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 rounded-full p-3 text-red-600">
                  <FaHome className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Off-Campus Housing
              </h3>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Pros</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Often more affordable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        More privacy and independence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        No university-imposed restrictions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        ✓
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Year-round availability
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Cons</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        May require U.S. credit history or co-signer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Additional expenses (utilities, internet,
                        transportation)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        More responsibility for maintenance and bills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-red-500">
                        ✗
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Potentially longer commute to campus
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Housing Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Housing Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make your housing search easier with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {housingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-100 rounded-full p-3 text-red-600">
                      <tip.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Housing FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about housing for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {housingFAQs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <div className="mt-2 text-base text-gray-500">{faq.answer}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/resources/housing-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
            >
              View Complete Housing Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to find your new home?</span>
            <span className="block">Start your housing search today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-red-200">
            Use our exclusive partner links to receive special student benefits
            and offers.
          </p>
          <a
            href="#compare-housing"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 sm:w-auto"
          >
            Compare Housing Options
          </a>
        </div>
      </div>
    </main>
  );
}
