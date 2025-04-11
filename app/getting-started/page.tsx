// src/app/getting-started/page.tsx
import Link from "next/link";
import {
  FaMobileAlt,
  FaUniversity,
  FaFileInvoiceDollar,
  FaHome,
  FaUtensils,
  FaGraduationCap,
  FaPassport,
  FaPlane,
  FaMapMarkerAlt,
  FaWifi,
  FaShoppingCart,
  FaIdCard,
} from "react-icons/fa";

export default function GettingStartedPage() {
  const beforeArrivalSteps = [
    {
      id: 1,
      title: "Visa Preparation",
      description:
        "Complete your visa application process and gather all required documentation.",
      icon: FaPassport,
      color: "bg-orange-100 text-orange-600",
      link: "/services/visas",
    },
    {
      id: 2,
      title: "Book Your Flight",
      description:
        "Find student discounts on international flights and arrange airport pickup.",
      icon: FaPlane,
      color: "bg-blue-100 text-blue-600",
      link: "/services/travel",
    },
    {
      id: 3,
      title: "Secure Housing",
      description:
        "Arrange temporary or permanent housing before you arrive in your host country.",
      icon: FaHome,
      color: "bg-green-100 text-green-600",
      link: "/services/housing",
    },
  ];

  const afterArrivalSteps = [
    {
      id: 1,
      title: "Get a SIM Card",
      description:
        "Stay connected from day one with affordable mobile data and calling plans.",
      icon: FaMobileAlt,
      color: "bg-blue-100 text-blue-600",
      link: "/services/sim-cards",
    },
    {
      id: 2,
      title: "Set Up Bank Account",
      description:
        "Open a student bank account with no fees and international transfer capabilities.",
      icon: FaUniversity,
      color: "bg-green-100 text-green-600",
      link: "/services/banking",
    },
    {
      id: 3,
      title: "Get Health Insurance",
      description:
        "Secure comprehensive health coverage that meets university requirements.",
      icon: FaFileInvoiceDollar,
      color: "bg-orange-100 text-orange-600",
      link: "/services/insurance",
    },
    {
      id: 4,
      title: "Campus Orientation",
      description:
        "Locate important campus facilities and attend new student orientation sessions.",
      icon: FaMapMarkerAlt,
      color: "bg-purple-100 text-purple-600",
      link: "/services/campus-life",
    },
    {
      id: 5,
      title: "Set Up Internet",
      description:
        "Arrange internet service for your accommodation or find on-campus WiFi access.",
      icon: FaWifi,
      color: "bg-indigo-100 text-indigo-600",
      link: "/services/utilities",
    },
    {
      id: 6,
      title: "Buy Essentials",
      description:
        "Purchase necessary items for your accommodation and daily student life.",
      icon: FaShoppingCart,
      color: "bg-red-100 text-red-600",
      link: "/services/shopping",
    },
  ];

  const ongoingTasks = [
    {
      title: "Student ID & Transit Cards",
      description:
        "Get your student identification and discounted public transportation passes.",
      icon: FaIdCard,
      link: "/services/student-cards",
    },
    {
      title: "Food Plans",
      description:
        "Explore meal plans, grocery options, and budget-friendly dining solutions.",
      icon: FaUtensils,
      link: "/services/food",
    },
    {
      title: "Academic Preparation",
      description:
        "Gather textbooks, supplies, and familiarize yourself with academic expectations.",
      icon: FaGraduationCap,
      link: "/services/academics",
    },
  ];

  const resources = [
    {
      title: "Printable Checklists",
      description:
        "Download and print comprehensive checklists for your international student journey.",
      icon: "📋",
      link: "/resources/checklists",
    },
    {
      title: "Student Community",
      description:
        "Connect with fellow international students for advice and friendship.",
      icon: "👥",
      link: "/community",
    },
    {
      title: "Local Events Calendar",
      description:
        "Find orientation events, cultural activities, and networking opportunities.",
      icon: "📅",
      link: "/events",
    },
    {
      title: "Emergency Contacts",
      description:
        "Important phone numbers and contacts for your new city and campus.",
      icon: "🆘",
      link: "/resources/emergency-contacts",
    },
  ];

  return (
    <main className="bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Step-by-Step Guide
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to do before, during, and after your arrival
              to set yourself up for success.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
              Before You Arrive
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {beforeArrivalSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 h-12 w-12 rounded-md ${step.color} flex items-center justify-center`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{step.description}</p>
                <div className="mt-6">
                  <Link
                    href={step.link}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 mb-16">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
              First Week After Arrival
            </span>
          </div>
        </div>

        {/* Timeline with proper alignment */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {afterArrivalSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {/* Left side for even items */}
                  <div
                    className={`md:pb-12 ${
                      index % 2 === 0 ? "block" : "md:hidden"
                    }`}
                  >
                    <div className="md:pr-8 md:text-right">
                      <h3 className="text-lg font-medium text-gray-900">
                        {index % 2 === 0 ? step.title : ""}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {index % 2 === 0 ? step.description : ""}
                      </p>
                      {index % 2 === 0 && (
                        <div className="mt-3">
                          <Link
                            href={step.link}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                          >
                            Learn More
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-600 text-white ring-4 ring-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Right side for odd items */}
                  <div
                    className={`md:col-start-2 md:pl-8 ${
                      index % 2 === 1 ? "block" : "md:hidden"
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {index % 2 === 1 ? step.title : ""}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {index % 2 === 1 ? step.description : ""}
                      </p>
                      {index % 2 === 1 && (
                        <div className="mt-3">
                          <Link
                            href={step.link}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                          >
                            Learn More
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile view - show all content regardless of even/odd */}
                  <div className="md:hidden mt-3 pl-6 border-l-2 border-blue-600">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                    <div className="mt-3">
                      <Link
                        href={step.link}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
              Ongoing Tasks
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ongoingTasks.map((task, index) => (
            <Link
              key={index}
              href={task.link}
              className="group p-6 bg-white shadow-sm border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center">
                <task.icon className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {task.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{task.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Helpful Resources
            </h3>
            <p className="mt-2 text-gray-600">
              Tools and community support to help you navigate your
              international student journey
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group p-6 bg-white shadow-sm border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <span className="text-3xl mb-3">{resource.icon}</span>
                <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {resource.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900">
                Need Personalized Assistance?
              </h3>
              <p className="mt-2 text-gray-600">
                Our advisors are fellow international students who have been
                through this process. Book a free 15-minute consultation to get
                personalized guidance.
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="h-48 w-48 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
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
