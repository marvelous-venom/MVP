// src/app/services/jobs/page.tsx
import Link from "next/link";
import {
  FaBriefcase,
  FaUniversity,
  FaGraduationCap,
  FaFileAlt,
  FaNetworkWired,
  FaLaptop,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function JobsServicePage() {
  const jobTypes = [
    {
      name: "On-Campus Jobs",
      logo: "/images/jobs/campus-job.png",
      features: {
        eligibility: "Available immediately upon arrival",
        hoursAllowed: "20 hours/week during semester, 40 hours during breaks",
        payRange: "$10-20/hour depending on role and location",
        benefits: "Convenient location, understanding of academic schedule",
        workAuthorizationNeeded: "None beyond your F-1/J-1 status",
        findJobs: "University career portal, dining services, libraries",
      },
      description: "Work directly at your university or college",
      link: "#campus-jobs",
    },
    {
      name: "Curricular Practical Training (CPT)",
      logo: "/images/jobs/cpt.png",
      features: {
        eligibility: "After completing one academic year",
        hoursAllowed: "Part-time or full-time depending on authorization",
        payRange: "Varies widely by field and company",
        benefits: "Direct industry experience in your field of study",
        workAuthorizationNeeded: "CPT authorization from your DSO",
        findJobs: "University career fairs, LinkedIn, Handshake",
      },
      description: "Internships related to your field of study",
      link: "#cpt-jobs",
    },
    {
      name: "Optional Practical Training (OPT)",
      logo: "/images/jobs/opt.png",
      features: {
        eligibility: "After program completion",
        hoursAllowed: "Full-time employment",
        payRange: "Entry-level salary in your field",
        benefits: "12 months of work authorization (24 additional for STEM)",
        workAuthorizationNeeded: "OPT authorization from USCIS",
        findJobs: "Same job search methods as domestic students",
      },
      description: "Post-graduation employment in your field",
      link: "#opt-jobs",
    },
  ];

  const jobFAQs = [
    {
      question: "Can international students work off-campus?",
      answer:
        "Generally, F-1 students can only work off-campus after completing one academic year, and only through specific authorized programs like Curricular Practical Training (CPT), Optional Practical Training (OPT), or in cases of severe economic hardship. J-1 students may have different rules depending on their specific program. Working off-campus without proper authorization is a serious visa violation that can affect your immigration status.",
    },
    {
      question: "How do I find on-campus jobs?",
      answer:
        "Start by checking your university's student employment website or career portal. Visit departments directly including dining services, libraries, recreational facilities, and administrative offices. Also look for job fairs specifically for on-campus employment at the beginning of each semester. Your international student office might also have leads on departments that frequently hire international students.",
    },
    {
      question: "Do I need a Social Security Number to work?",
      answer:
        "Yes, you'll need a Social Security Number (SSN) to work legally in the U.S. Once you've secured an on-campus job or received CPT/OPT authorization, you can apply for an SSN at your local Social Security Administration office. You'll need to bring your passport, I-20, I-94, and a letter from your employer or DSO verifying your employment offer.",
    },
    {
      question: "How do U.S. resumes differ from international CVs?",
      answer:
        "U.S. resumes are typically 1-2 pages, even for experienced professionals, while CVs in many countries may be longer. U.S. resumes focus heavily on results and achievements rather than just responsibilities. They generally don't include personal information like age, marital status, or photos, which are common in some countries. Your university career center can help you 'Americanize' your resume for the U.S. job market.",
    },
  ];

  const jobSearchTips = [
    {
      title: "Start with On-Campus Work",
      description:
        "On-campus jobs are easier to obtain and provide valuable U.S. work experience.",
      icon: FaUniversity,
    },
    {
      title: "Tailor Your Resume",
      description:
        "Adapt your resume to U.S. standards, focusing on achievements and results.",
      icon: FaFileAlt,
    },
    {
      title: "Build Your Network",
      description:
        "Attend career fairs, networking events, and join professional groups in your field.",
      icon: FaNetworkWired,
    },
    {
      title: "Prepare for OPT Early",
      description:
        "Start the OPT application process 3 months before your planned employment.",
      icon: FaGraduationCap,
    },
  ];

  const jobSearchResources = [
    {
      name: "Handshake",
      description:
        "Platform connecting students with employers specifically recruiting from universities.",
      link: "https://joinhandshake.com",
    },
    {
      name: "LinkedIn",
      description:
        "Professional networking site with job listings and connection opportunities.",
      link: "https://www.linkedin.com",
    },
    {
      name: "Indeed",
      description:
        "Comprehensive job search engine with filters for international student-friendly positions.",
      link: "https://www.indeed.com",
    },
    {
      name: "University Career Center",
      description:
        "Your campus career center offers specific resources for international students.",
      link: "#university-career-center",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Jobs for International Students
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Navigate work opportunities, understand visa restrictions, and
              build your career in the U.S.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Employment Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on finding jobs as an
              international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-jobs-video-id"
              title="Jobs Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-indigo-600 hover:underline"
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

      {/* Job Types Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Employment Options for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the different types of jobs available based on your
              visa status.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {jobTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaBriefcase className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {type.name}
                      </h3>
                      <p className="text-sm text-indigo-600">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={type.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Eligibility
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.eligibility}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Hours Allowed
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.hoursAllowed}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Pay Range
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.payRange}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Benefits
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.benefits}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Work Authorization
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.workAuthorizationNeeded}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Where to Find
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {type.features.findJobs}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Search Resources */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Job Search Resources
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Helpful platforms and services for finding jobs as an
              international student.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {jobSearchResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 text-indigo-600">
                    <FaLaptop className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  {resource.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {resource.description}
                </p>
                <div className="mt-4 text-center">
                  <a
                    href={resource.link}
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Visit Resource →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Search Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Job Search Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Stand out in the job market with these practical tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {jobSearchTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-indigo-100 rounded-full p-3 text-indigo-600">
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

      {/* U.S. Resume vs International CV Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              U.S. Resume vs. International CV
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the key differences to make your application stand out
              to U.S. employers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 text-center mb-6">
                U.S. Resume Style
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Length:</strong> 1-2 pages max, regardless of
                    experience level
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Focus:</strong> Achievements and results rather than
                    just responsibilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Personal Info:</strong> No photo, age, marital
                    status, or religion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Format:</strong> Reverse chronological order with
                    strong action verbs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Quantification:</strong> Numbers and metrics to
                    demonstrate impact
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 text-center mb-6">
                Common International CV Style
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Length:</strong> Often 3+ pages with comprehensive
                    details
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Focus:</strong> Detailed job descriptions and
                    responsibilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Personal Info:</strong> Often includes photo, date
                    of birth, nationality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>Format:</strong> May include personal statements and
                    interests
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <strong>References:</strong> Often lists references directly
                    on the document
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/resources/us-resume-template"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Download U.S. Resume Template
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Employment FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about working as an international student.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {jobFAQs.map((faq, index) => (
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
              href="/resources/employment-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              View Complete Employment Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your job search?</span>
            <span className="block">Access our career resources today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Get resume reviews, job alerts, and interview prep specifically for
            international students.
          </p>
          <a
            href="#career-resources"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Explore Career Resources
          </a>
        </div>
      </div>
    </main>
  );
}
