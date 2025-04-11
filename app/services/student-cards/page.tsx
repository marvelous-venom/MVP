// src/app/services/student-cards/page.tsx
import Link from "next/link";
import {
  FaIdCard,
  FaCreditCard,
  FaPercent,
  FaBus,
  FaFilm,
  FaShoppingBag,
  FaMobileAlt,
  FaLaptop,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function StudentCardsServicePage() {
  const studentCardTypes = [
    {
      name: "ISIC (International Student Identity Card)",
      logo: "/images/cards/isic.png",
      features: {
        cost: "$25 annual fee",
        eligibility: "Full-time students worldwide",
        discounts: "Global discounts on travel, shopping, entertainment",
        digitalOption: "Yes, mobile app available",
        idVerification: "Recognized in 130+ countries",
        additionalBenefits: "Insurance offers, emergency helpline",
      },
      description: "The only internationally recognized student ID card",
      link: "https://www.isic.org",
    },
    {
      name: "University Student ID",
      logo: "/images/cards/university-id.png",
      features: {
        cost: "Typically included in tuition",
        eligibility: "Enrolled students at your university",
        discounts: "Local businesses, campus services, public transit",
        digitalOption: "Varies by institution",
        idVerification: "Official university identification",
        additionalBenefits: "Campus access, library, dining plans",
      },
      description: "Your official university identification card",
      link: "#university-id",
    },
    {
      name: "Student Advantage Card",
      logo: "/images/cards/student-advantage.png",
      features: {
        cost: "$30 annual fee",
        eligibility: "Students in the United States",
        discounts: "U.S. retailers, services, and transportation",
        digitalOption: "Yes",
        idVerification: "Not an official ID",
        additionalBenefits: "Focuses on shopping and service discounts",
      },
      description:
        "U.S.-focused discount card with major retailer partnerships",
      link: "https://www.studentadvantage.com",
    },
  ];

  const popularDiscounts = [
    {
      category: "Transportation",
      discounts: [
        {
          provider: "Amtrak",
          offer: "15% off rail fares",
          cardRequired: "University ID or ISIC",
        },
        {
          provider: "Greyhound",
          offer: "10% off bus tickets",
          cardRequired: "ISIC or Student Advantage",
        },
        {
          provider: "Public Transit",
          offer: "Reduced monthly passes",
          cardRequired: "University ID",
        },
      ],
    },
    {
      category: "Technology",
      discounts: [
        {
          provider: "Apple",
          offer: "Education pricing on computers",
          cardRequired: "University ID or .edu email",
        },
        {
          provider: "Adobe",
          offer: "60% off Creative Cloud",
          cardRequired: "University ID or .edu email",
        },
        {
          provider: "Microsoft",
          offer: "Free Office 365",
          cardRequired: "University ID or .edu email",
        },
      ],
    },
    {
      category: "Entertainment",
      discounts: [
        {
          provider: "Movie Theaters",
          offer: "Discounted tickets (varies by chain)",
          cardRequired: "Any student ID",
        },
        {
          provider: "Museums",
          offer: "Free or reduced admission",
          cardRequired: "Any student ID",
        },
        {
          provider: "Spotify",
          offer: "50% off Premium subscription",
          cardRequired: ".edu email verification",
        },
      ],
    },
  ];

  const studentCardFAQs = [
    {
      question:
        "Is the ISIC card worth getting if I already have a university ID?",
      answer:
        "It depends on your travel and spending habits. While your university ID will work for most local discounts and services, the ISIC card is internationally recognized and can be valuable for international travel, global online services, and in countries where your university ID might not be recognized. If you plan to travel internationally or use international websites, the ISIC card's $25 fee can quickly pay for itself through discounts.",
    },
    {
      question: "How do I get my university student ID card?",
      answer:
        "Most universities issue ID cards during orientation or within the first week of classes. You'll typically need to visit the campus card office with your admission letter, passport, and sometimes additional identification. Some universities now offer mobile ID cards that can be added to your smartphone's wallet. Check your university's website or contact the student services office for specific instructions.",
    },
    {
      question:
        "Do student discounts work with digital ID cards or do I need the physical card?",
      answer:
        "This varies by merchant. Many businesses now accept digital student IDs through university apps or the ISIC app, but some still require physical cards. For important discounts like public transportation, it's best to have the physical card until you confirm the digital version is accepted. Always have some form of government ID with you as well, as merchants may request additional verification.",
    },
    {
      question: "How can I maximize the benefits from my student cards?",
      answer:
        "Always ask if student discounts are available, even if not advertised. Check your university's student benefits page for partnerships with local businesses. Use apps like UNiDAYS and Student Beans to discover online discounts. Join your university's international student group to learn about discounts specific to international students. For ISIC cardholders, use their app or website to search for discounts by location before shopping or traveling.",
    },
  ];

  const studentCardTips = [
    {
      title: "Get Cards Early",
      description:
        "Apply for your student cards as soon as possible to maximize savings throughout your studies.",
      icon: FaIdCard,
    },
    {
      title: "Always Ask for Discounts",
      description:
        "Many places offer unadvertised student discounts - it never hurts to ask and show your ID.",
      icon: FaPercent,
    },
    {
      title: "Use Digital ID Apps",
      description:
        "Apps like UNiDAYS and Student Beans offer exclusive online discounts for verified students.",
      icon: FaCreditCard,
    },
    {
      title: "Combine with Other Discounts",
      description:
        "Sometimes student discounts can be combined with sales or other promotions for extra savings.",
      icon: FaShoppingBag,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Student Cards & Discounts
            </h1>
            <p className="mt-6 text-xl text-teal-100 max-w-3xl mx-auto">
              Save money with student ID cards and access exclusive discounts on
              travel, shopping, software, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Student Discounts Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on maximizing student
              discounts.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-student-cards-video-id"
              title="Student Discounts Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-teal-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Channel
              </a>{" "}
              for more money-saving tips.
            </p>
          </div>
        </div>
      </div>

      {/* Student Card Types Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Student Card Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the different student cards available and their
              benefits.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {studentCardTypes.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaIdCard className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {card.name}
                      </h3>
                      <p className="text-sm text-teal-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      Get Card
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Cost
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.cost}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Eligibility
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.eligibility}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Discount Types
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.discounts}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Digital Option
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.digitalOption}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        ID Verification
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.idVerification}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Additional Benefits
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {card.features.additionalBenefits}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Discounts Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Popular Student Discounts
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Top discounts available to students in various categories.
            </p>
          </div>

          <div className="space-y-10">
            {popularDiscounts.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  {category.category === "Transportation" && (
                    <FaBus className="mr-2 text-teal-600" />
                  )}
                  {category.category === "Technology" && (
                    <FaLaptop className="mr-2 text-teal-600" />
                  )}
                  {category.category === "Entertainment" && (
                    <FaFilm className="mr-2 text-teal-600" />
                  )}
                  {category.category}
                </h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Provider
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Discount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Card Required
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.discounts.map((discount, discountIndex) => (
                        <tr key={discountIndex}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {discount.provider}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {discount.offer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {discount.cardRequired}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Online Discount Platforms */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Online Student Discount Platforms
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Digital services that offer exclusive student discounts online.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 rounded-full p-3 text-teal-600">
                  <FaMobileAlt className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                UNiDAYS
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Free verification platform with discounts from major brands like
                Apple, Nike, and Expedia.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Verification using .edu email
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Mobile app and website access
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    No membership fee
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="https://www.myunidays.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-500 font-medium"
                >
                  Visit UNiDAYS →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 rounded-full p-3 text-teal-600">
                  <FaShoppingBag className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Student Beans
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Verification service with online discounts for fashion,
                technology, and food delivery.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Multiple verification methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    International brand partnerships
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Free to join
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="https://www.studentbeans.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-500 font-medium"
                >
                  Visit Student Beans →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 rounded-full p-3 text-teal-600">
                  <FaPercent className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Amazon Prime Student
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Amazon Prime membership at half the regular price, with
                additional student offers.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    6-month free trial
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    50% off Prime after trial
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-teal-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Exclusive student deals
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="https://www.amazon.com/primestudent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-500 font-medium"
                >
                  Join Prime Student →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Card Tips */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Student Discount Tips
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Maximize your savings with these helpful student discount
              strategies.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {studentCardTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-teal-100 rounded-full p-3 text-teal-600">
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
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Student Cards FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about student ID cards and discounts.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {studentCardFAQs.map((faq, index) => (
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
              href="/resources/student-discounts-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200"
            >
              View Complete Discount Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Start saving today</span>
            <span className="block">Get your student cards</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-teal-200">
            Unlock thousands of discounts worldwide with the right student ID
            cards.
          </p>
          <a
            href="#compare-cards"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 sm:w-auto"
          >
            Compare Student Cards
          </a>
        </div>
      </div>
    </main>
  );
}
