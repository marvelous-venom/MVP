// src/app/services/insurance/page.tsx
import Link from "next/link";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaPlane,
  FaFileMedical,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function InsuranceServicePage() {
  const insuranceProviders = [
    {
      name: "International Student Insurance",
      logo: "/images/partners/isi.png",
      features: {
        monthlyFee: "From $30/month",
        coverage: "Up to $500,000",
        deductible: "$50-$500",
        preExistingConditions: "Available with waitlist",
        mentalHealth: "Included",
        prescriptionDrugs: "Included",
      },
      studentOffer: "10% Off with code STUDYGLOBAL",
      link: "https://www.internationalstudentinsurance.com",
    },
    {
      name: "ISO Student Health Insurance",
      logo: "/images/partners/iso.png",
      features: {
        monthlyFee: "From $33/month",
        coverage: "Up to $1,000,000",
        deductible: "$100-$500",
        preExistingConditions: "Limited coverage after 6 months",
        mentalHealth: "Limited coverage",
        prescriptionDrugs: "Included",
      },
      studentOffer: "Free mental health teletherapy access",
      link: "https://www.isoa.org",
    },
    {
      name: "GeoBlue Student",
      logo: "/images/partners/geoblue.png",
      features: {
        monthlyFee: "From $45/month",
        coverage: "Unlimited",
        deductible: "$0-$250",
        preExistingConditions: "Covered after 12 months",
        mentalHealth: "Included",
        prescriptionDrugs: "Included",
      },
      studentOffer: "Access to Blue Cross Blue Shield network",
      link: "https://www.geobluetravelinsurance.com/student",
    },
  ];

  const insuranceFAQs = [
    {
      question: "Is health insurance mandatory for international students?",
      answer:
        "Yes, most U.S. universities require international students to have health insurance coverage. Many schools have their own insurance plans, but you may be able to waive this requirement if you purchase a qualifying alternative plan.",
    },
    {
      question:
        "What's the difference between university insurance and private insurance?",
      answer:
        "University health insurance is often comprehensive and convenient but can be more expensive. Private insurance plans may be more affordable but might have more restrictions on coverage or provider networks. Always compare both options before deciding.",
    },
    {
      question: "What does health insurance typically cover?",
      answer:
        "Most student health insurance plans cover doctor visits, emergency care, hospitalization, and prescription drugs. Some plans also include dental, vision, and mental health coverage. Check each plan's specific benefits and limitations before purchasing.",
    },
    {
      question: "Do I need additional insurance besides health insurance?",
      answer:
        "Consider renters insurance to protect your belongings and personal liability coverage if you're living off-campus. If you plan to travel frequently, travel insurance can provide additional coverage when you're outside your primary insurance network.",
    },
  ];

  const insuranceTips = [
    {
      title: "Compare University vs. Private Plans",
      description:
        "Don't automatically accept your university's plan without comparing it to private options first.",
      icon: FaFileMedical,
    },
    {
      title: "Understand Your Coverage Limits",
      description:
        "Know exactly what is covered and what isn't, especially for prescription medications you regularly take.",
      icon: FaHeartbeat,
    },
    {
      title: "Consider Additional Insurance",
      description:
        "Renters insurance and travel insurance provide additional protection beyond health coverage.",
      icon: FaHome,
    },
    {
      title: "Know How to File Claims",
      description:
        "Understand the process for filing insurance claims before you need to use your insurance.",
      icon: FaShieldAlt,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insurance for International Students
            </h1>
            <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
              Find affordable health, renters, and travel insurance options
              designed specifically for international students.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Insurance Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on understanding insurance as
              an international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-insurance-video-id"
              title="Insurance Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-purple-600 hover:underline"
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

      {/* Insurance Providers Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Health Insurance Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We&apos;ve partnered with these student-friendly insurance
              providers to offer exclusive benefits.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaShieldAlt className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {provider.name}
                      </h3>
                      <p className="text-sm text-purple-600">
                        {provider.studentOffer}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Monthly Fee
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.monthlyFee}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Coverage Limit
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.coverage}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Deductible
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.deductible}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Pre-existing Conditions
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.preExistingConditions}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Mental Health
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.mentalHealth}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Prescription Drugs
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.prescriptionDrugs}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Insurance Types */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Other Insurance Types
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Beyond health insurance, consider these additional coverage
              options.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 text-purple-600">
                  <FaHome className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Renters Insurance
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Protects your personal belongings and provides liability
                coverage in case someone is injured in your apartment. Many
                landlords require this coverage.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Coverage for theft, fire, and water damage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Personal liability protection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Typically $10-15 per month
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 text-purple-600">
                  <FaPlane className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Travel Insurance
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Coverage for trips outside your primary residence or when
                traveling between your home country and the U.S.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Emergency medical coverage abroad
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Trip cancellation protection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-purple-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Lost luggage reimbursement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Insurance Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make the most of your insurance coverage with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {insuranceTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-purple-100 rounded-full p-3 text-purple-600">
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
              Insurance FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about insurance for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {insuranceFAQs.map((faq, index) => (
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
              href="/resources/insurance-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200"
            >
              View Complete Insurance Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get covered?</span>
            <span className="block">Find the right insurance plan today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Use our exclusive partner links to receive special student benefits
            and offers.
          </p>
          <a
            href="#compare-insurance"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Compare Plans
          </a>
        </div>
      </div>
    </main>
  );
}
