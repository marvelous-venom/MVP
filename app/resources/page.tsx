// src/app/resources/page.tsx
import Link from "next/link";
import {
  FaDownload,
  FaBook,
  FaVideo,
  FaFilePdf,
  FaFileAlt,
  FaQuestion,
  FaMapMarkedAlt,
  FaLanguage,
} from "react-icons/fa";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Guides & Checklists",
      description:
        "Comprehensive guides and printable checklists for every stage of your journey.",
      icon: FaBook,
      color: "bg-blue-100 text-blue-600",
      resources: [
        {
          title: "Pre-Departure Checklist",
          type: "PDF",
          icon: FaFilePdf,
          link: "/resources/pre-departure-checklist",
        },
        {
          title: "First Week Survival Guide",
          type: "Guide",
          icon: FaFileAlt,
          link: "/resources/first-week-guide",
        },
        {
          title: "Banking Setup Guide",
          type: "Guide",
          icon: FaFileAlt,
          link: "/resources/banking-guide",
        },
      ],
    },
    {
      title: "Video Tutorials",
      description:
        "Step-by-step visual guides for common student procedures and tasks.",
      icon: FaVideo,
      color: "bg-red-100 text-red-600",
      resources: [
        {
          title: "How to Open a Bank Account",
          type: "Video",
          icon: FaVideo,
          link: "/resources/bank-account-video",
        },
        {
          title: "Finding Student Housing",
          type: "Video",
          icon: FaVideo,
          link: "/resources/housing-video",
        },
        {
          title: "Navigating Campus Resources",
          type: "Video",
          icon: FaVideo,
          link: "/resources/campus-video",
        },
      ],
    },
    {
      title: "Downloadable Forms",
      description:
        "Common forms and templates needed for student life in editable formats.",
      icon: FaDownload,
      color: "bg-green-100 text-green-600",
      resources: [
        {
          title: "Rental Application Template",
          type: "DOCX",
          icon: FaFileAlt,
          link: "/resources/rental-application",
        },
        {
          title: "Budget Planner Spreadsheet",
          type: "XLSX",
          icon: FaFileAlt,
          link: "/resources/budget-planner",
        },
        {
          title: "Course Schedule Planner",
          type: "PDF",
          icon: FaFilePdf,
          link: "/resources/schedule-planner",
        },
      ],
    },
    {
      title: "FAQ & Knowledge Base",
      description:
        "Answers to common questions and issues faced by international students.",
      icon: FaQuestion,
      color: "bg-purple-100 text-purple-600",
      resources: [
        {
          title: "Visa & Immigration FAQ",
          type: "Article",
          icon: FaFileAlt,
          link: "/resources/visa-faq",
        },
        {
          title: "Healthcare System Explained",
          type: "Article",
          icon: FaFileAlt,
          link: "/resources/healthcare-explained",
        },
        {
          title: "Student Tax Obligations",
          type: "Article",
          icon: FaFileAlt,
          link: "/resources/tax-guide",
        },
      ],
    },
    {
      title: "City Guides",
      description:
        "Essential information about popular student cities and campuses.",
      icon: FaMapMarkedAlt,
      color: "bg-yellow-100 text-yellow-600",
      resources: [
        {
          title: "New York Student Guide",
          type: "City Guide",
          icon: FaFileAlt,
          link: "/resources/new-york-guide",
        },
        {
          title: "Los Angeles Student Guide",
          type: "City Guide",
          icon: FaFileAlt,
          link: "/resources/los-angeles-guide",
        },
        {
          title: "Chicago Student Guide",
          type: "City Guide",
          icon: FaFileAlt,
          link: "/resources/chicago-guide",
        },
      ],
    },
    {
      title: "Language Resources",
      description:
        "Tools and guides to improve your English or local language skills.",
      icon: FaLanguage,
      color: "bg-indigo-100 text-indigo-600",
      resources: [
        {
          title: "Academic English Glossary",
          type: "PDF",
          icon: FaFilePdf,
          link: "/resources/academic-english",
        },
        {
          title: "Conversational Phrases Guide",
          type: "Article",
          icon: FaFileAlt,
          link: "/resources/conversation-guide",
        },
        {
          title: "Language Exchange Programs",
          type: "Guide",
          icon: FaFileAlt,
          link: "/resources/language-exchange",
        },
      ],
    },
  ];

  const featuredResources = [
    {
      title: "Complete Student Toolkit",
      description:
        "Our comprehensive collection of guides, templates, and checklists for every step of your international student journey.",
      image: "/images/resources/toolkit.jpg",
      link: "/resources/student-toolkit",
    },
    {
      title: "City Comparison Guide",
      description:
        "Compare cost of living, transportation, quality of life, and student opportunities across major US cities.",
      image: "/images/resources/cities.jpg",
      link: "/resources/city-comparison",
    },
    {
      title: "Cultural Adaptation Guide",
      description:
        "Tips and strategies for adjusting to a new culture, making friends, and overcoming culture shock.",
      image: "/images/resources/cultural.jpg",
      link: "/resources/cultural-adaptation",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Student Resources
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Guides, tools, and information to help you succeed in your
              international education journey.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Resources
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our most popular and comprehensive resources for international
              students.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <div className="h-48 w-full bg-gray-200 relative">
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <span className="text-lg font-medium">
                          {resource.title} Image
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {resource.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={resource.link}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Access Resource
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Resource Library
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Browse our comprehensive collection of resources by category.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10">
              {resourceCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white shadow overflow-hidden sm:rounded-lg"
                >
                  <div className="px-4 py-5 sm:px-6 flex items-center">
                    <div className={`${category.color} p-2 rounded-md mr-4`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {category.title}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      {category.resources.map((resource, resourceIndex) => (
                        <div
                          key={resourceIndex}
                          className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        >
                          <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <resource.icon className="h-5 w-5 text-gray-400 mr-2" />
                            <span>{resource.type}</span>
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between items-center">
                            <span className="font-medium">
                              {resource.title}
                            </span>
                            <Link
                              href={resource.link}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                            >
                              View
                            </Link>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resource Request */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden sm:grid sm:grid-cols-2 sm:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Need a specific resource?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Can&apos;t find what you&apos;re looking for? Let us know what
                  resources would help you, and we&apos;ll work on creating
                  them.
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Request Resource
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-8">
              <div className="h-64 w-64 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
