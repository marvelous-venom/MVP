// src/app/services/page.tsx
import Link from "next/link";
import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaMobileAlt,
  FaUtensils,
  FaBriefcase,
  FaPassport,
  FaPlane,
  FaHome,
  FaCalculator,
  FaWifi,
  FaIdCard,
  FaShoppingCart,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Banking",
      description:
        "Student-friendly accounts with no fees, international transfers, and credit cards without SSN.",
      icon: FaUniversity,
      color: "bg-blue-100 text-blue-600",
      link: "/services/banking",
    },
    {
      title: "SIM Cards",
      description:
        "Stay connected with affordable data plans and international calling options.",
      icon: FaMobileAlt,
      color: "bg-green-100 text-green-600",
      link: "/services/sim-cards",
    },
    {
      title: "Insurance",
      description:
        "Health, travel, and property insurance tailored for international students.",
      icon: FaFileInvoiceDollar,
      color: "bg-orange-100 text-orange-600",
      link: "/services/insurance",
    },
    {
      title: "Housing",
      description:
        "Find safe, affordable housing close to your campus with verified listings.",
      icon: FaHome,
      color: "bg-indigo-100 text-indigo-600",
      link: "/services/housing",
    },
    {
      title: "Visas & Immigration",
      description:
        "Navigate visa requirements, extensions, and immigration processes.",
      icon: FaPassport,
      color: "bg-red-100 text-red-600",
      link: "/services/visas",
    },
    {
      title: "Food & Groceries",
      description:
        "Meal plans, grocery delivery, and budget-friendly dining options.",
      icon: FaUtensils,
      color: "bg-yellow-100 text-yellow-600",
      link: "/services/food",
    },
    {
      title: "Travel",
      description:
        "Discounted flights, trains, and accommodations for students.",
      icon: FaPlane,
      color: "bg-purple-100 text-purple-600",
      link: "/services/travel",
    },
    {
      title: "Jobs & Internships",
      description:
        "Find opportunities that work with your student visa status.",
      icon: FaBriefcase,
      color: "bg-blue-100 text-blue-600",
      link: "/services/jobs",
    },
    {
      title: "Internet & Utilities",
      description:
        "Setup guides for internet, electricity, water, and other essentials.",
      icon: FaWifi,
      color: "bg-green-100 text-green-600",
      link: "/services/utilities",
    },
    {
      title: "Taxes",
      description:
        "Understand local tax obligations and filing requirements for international students.",
      icon: FaCalculator,
      color: "bg-gray-100 text-gray-600",
      link: "/services/taxes",
    },
    {
      title: "Student ID & Transit",
      description:
        "Get your student identification and public transportation cards.",
      icon: FaIdCard,
      color: "bg-orange-100 text-orange-600",
      link: "/services/student-cards",
    },
    {
      title: "Shopping Essentials",
      description: "Where to buy necessities at student-friendly prices.",
      icon: FaShoppingCart,
      color: "bg-pink-100 text-pink-600",
      link: "/services/shopping",
    },
  ];

  const featuredServices = services.slice(0, 3);

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Student Services
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need for a successful international study
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Essential First Steps
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Start with these critical services to set up your life abroad.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8 h-full flex flex-col">
                    <div className="-mt-6">
                      <div
                        className={`inline-flex items-center justify-center p-3 ${service.color} rounded-md shadow-lg transform -translate-y-1/2`}
                      >
                        <service.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-2 text-xl font-medium text-gray-900">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-5">
                        <Link
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
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
        </div>
      </div>

      {/* All Services */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              All Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive support for every aspect of international student
              life.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 ${service.color} rounded-md p-2`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Not sure where to start?</span>
            <span className="block text-blue-600">
              Follow our step-by-step guide.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Partner Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
