import React from "react";
import {
  FaDownload,
  FaPrint,
  FaShare,
  FaBookmark,
  FaChevronLeft,
} from "react-icons/fa";
import Link from "next/link";

interface ResourceLayoutProps {
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const ResourceLayout: React.FC<ResourceLayoutProps> = ({
  title,
  description,
  category,
  lastUpdated,
  children,
}) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link
              href="/resources"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <FaChevronLeft className="mr-2 h-3 w-3" />
              Back to Resources
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {category}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">
                    Last updated: {lastUpdated}
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900">
                  {title}
                </h1>
                <p className="mt-2 text-lg text-gray-600">{description}</p>
              </div>
              <div className="hidden md:flex md:items-center space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <FaPrint className="mr-2 h-4 w-4" />
                  Print
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <FaShare className="mr-2 h-4 w-4" />
                  Share
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  <FaBookmark className="mr-2 h-4 w-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Sidebar for larger screens */}
              <div className="hidden md:block w-64 bg-gray-50 p-6 border-r border-gray-200">
                <nav className="space-y-1">
                  <Link
                    href="#getting-started"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Getting Started
                  </Link>
                  <Link
                    href="#important-dates"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Important Dates
                  </Link>
                  <Link
                    href="#documentation"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="#essential-tasks"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Essential Tasks
                  </Link>
                  <Link
                    href="#resources"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Additional Resources
                  </Link>
                </nav>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Related Resources
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      href="/resources/first-week-guide"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      First Week Survival Guide
                    </Link>
                    <Link
                      href="/resources/budget-template"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      Student Budget Template
                    </Link>
                    <Link
                      href="/resources/visa-checklist"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      US Visa Checklist
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6 md:p-8 lg:p-10">
                <div className="prose prose-blue max-w-none">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Need personalized assistance?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our advisors are former international students who&apos;ve been
                through this process. Get one-on-one guidance for your specific
                situation.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Join Community
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-900">
                  Resource Feedback
                </h3>
                <p className="mt-2 text-sm text-blue-700">
                  Was this resource helpful? Let us know how we can improve it
                  to better serve international students.
                </p>
                <div className="mt-4">
                  <Link
                    href="/feedback"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Provide Feedback
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceLayout;
