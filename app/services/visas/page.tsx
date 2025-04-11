// src/app/services/visas/page.tsx
import Link from "next/link";
import {
  FaPassport,
  FaUniversity,
  FaBriefcase,
  FaCalendarAlt,
  FaGraduationCap,
  FaIdCard,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function VisasServicePage() {
  const visaTypes = [
    {
      name: "F-1 Student Visa",
      logo: "/images/visas/f1-visa.png",
      features: {
        purpose: "For academic studies at accredited institutions",
        workRights: "On-campus: 20 hrs/week, Full-time during breaks",
        validityPeriod: "Duration of program + 60 days grace period",
        optEligibility: "Up to 12 months (24 months for STEM)",
        dependents: "F-2 visa for spouse and children",
        renewalProcess: "Must renew at U.S. consulate in home country",
      },
      description: "Most common visa for full-time international students",
      link: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    },
    {
      name: "J-1 Exchange Visitor",
      logo: "/images/visas/j1-visa.png",
      features: {
        purpose: "For exchange programs, research, or training",
        workRights: "Similar to F-1, varies by program",
        validityPeriod: "Duration of exchange program",
        optEligibility: "No OPT, but Academic Training up to 18 months",
        dependents: "J-2 visa for spouse and children",
        renewalProcess: "Some programs have 2-year home residency requirement",
      },
      description:
        "For exchange students, researchers, and some special programs",
      link: "https://travel.state.gov/content/travel/en/us-visas/study/exchange.html",
    },
    {
      name: "M-1 Vocational Student",
      logo: "/images/visas/m1-visa.png",
      features: {
        purpose: "For vocational or non-academic programs",
        workRights: "Practical training only after program completion",
        validityPeriod: "Duration of program + 30 days grace period",
        optEligibility:
          "Practical training limited to 1 month per 4 months of study",
        dependents: "M-2 visa for spouse and children",
        renewalProcess: "Must renew at U.S. consulate in home country",
      },
      description: "For students enrolled in vocational or technical schools",
      link: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    },
  ];

  const visaFAQs = [
    {
      question: "What's the difference between F-1 and J-1 visas?",
      answer:
        "F-1 visas are for students attending U.S. degree programs, while J-1 visas are for exchange visitors, including exchange students, visiting scholars, and research assistants. J-1 programs are often sponsored by government agencies or exchange organizations, while F-1 programs are directly through educational institutions. Some J-1 programs also have a two-year home residency requirement that F-1 visas don't have.",
    },
    {
      question: "Can I work in the U.S. with a student visa?",
      answer:
        "With an F-1 visa, you can work on-campus for up to 20 hours per week during school and full-time during breaks. Off-campus work is generally not permitted until you've completed one academic year, and then only with authorization through Curricular Practical Training (CPT) or Optional Practical Training (OPT). Working without proper authorization can result in visa violations.",
    },
    {
      question: "What happens to my visa status if I take a semester off?",
      answer:
        "Taking a leave of absence usually means your SEVIS record and F-1/J-1 status will be terminated. You would need to leave the U.S. within the grace period (usually 15 days for terminated status) and obtain a new I-20/DS-2019 to return. Medical leaves may have different rules. Always consult with your school's international student office before taking any break from studies.",
    },
    {
      question: "Can I change my major or transfer schools on a student visa?",
      answer:
        "Yes, you can change your major while on a student visa, though you should inform your Designated School Official (DSO) so they can update your SEVIS record. You can also transfer to another school, but you must ensure continuous enrollment and properly transfer your SEVIS record between institutions. Your new school will issue a new I-20.",
    },
  ];

  const visaTips = [
    {
      title: "Apply Early",
      description:
        "Start the visa application process at least 3-4 months before your program start date.",
      icon: FaCalendarAlt,
    },
    {
      title: "Maintain Status",
      description:
        "Always maintain full-time enrollment and consult your DSO before any changes to your study plan.",
      icon: FaIdCard,
    },
    {
      title: "Document Everything",
      description:
        "Keep copies of all immigration documents, including past I-20s, visa stamps, and I-94 records.",
      icon: FaPassport,
    },
    {
      title: "Plan for OPT Early",
      description:
        "Start the OPT application process 3-4 months before your graduation date.",
      icon: FaGraduationCap,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Visa Information for International Students
            </h1>
            <p className="mt-6 text-xl text-yellow-100 max-w-3xl mx-auto">
              Understand visa requirements, work permissions, and maintain your
              legal status while studying in the U.S.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visa Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on student visas and
              maintaining legal status.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-visa-video-id"
              title="Visa Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-yellow-600 hover:underline"
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

      {/* Visa Types Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Student Visa Types
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the different visa options available for international
              students.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaPassport className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {visa.name}
                      </h3>
                      <p className="text-sm text-yellow-600">
                        {visa.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={visa.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700"
                    >
                      Official Information
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Purpose
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.purpose}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Work Rights
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.workRights}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Validity Period
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.validityPeriod}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        OPT/Training Eligibility
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.optEligibility}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Dependents
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.dependents}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Renewal/Special Conditions
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {visa.features.renewalProcess}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Authorization Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Work Authorization Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the different ways you can legally work in the U.S. as
              an international student.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 text-yellow-600">
                  <FaUniversity className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                On-Campus Employment
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Work at university facilities, bookstores, or dining services.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Available immediately upon arrival
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Limited to 20 hours/week during semester
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Full-time allowed during breaks
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 text-yellow-600">
                  <FaBriefcase className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Curricular Practical Training (CPT)
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Work directly related to your field of study as part of your
                curriculum.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Available after one academic year
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Must be integral to your curriculum
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Authorized by your DSO
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 text-yellow-600">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Optional Practical Training (OPT)
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Work experience in your field after completing your program.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    12 months per educational level
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    STEM extension of 24 additional months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-yellow-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Application must be filed 90 days before graduation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visa Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Maintain your legal status with these essential tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {visaTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 rounded-full p-3 text-yellow-600">
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
            <h2 className="text-3xl font-extrabold text-gray-900">Visa FAQs</h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about student visas and immigration status.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {visaFAQs.map((faq, index) => (
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
              href="/resources/visa-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200"
            >
              View Complete Visa Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Stay informed about your visa status</span>
            <span className="block">Subscribe to our visa update alerts</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-yellow-200">
            Get timely reminders about visa deadlines, OPT applications, and
            status maintenance requirements.
          </p>
          <a
            href="#visa-alerts"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50 sm:w-auto"
          >
            Sign Up for Alerts
          </a>
        </div>
      </div>
    </main>
  );
}
