"use client";

import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import {
  FaDownload,
  FaInfoCircle,
  FaExclamationTriangle,
  FaDollarSign,
  FaUniversity,
  FaHome,
  FaBook,
  FaUtensils,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface InfoBoxProps {
  children: ReactNode;
  type?: "info" | "warning";
  title?: string;
}

// Info box component for tips and important information
const InfoBox: FC<InfoBoxProps> = ({ children, type = "info", title }) => {
  const bgColor = type === "warning" ? "bg-yellow-50" : "bg-blue-50";
  const textColor = type === "warning" ? "text-yellow-800" : "text-blue-800";
  const borderColor =
    type === "warning" ? "border-yellow-200" : "border-blue-200";
  const Icon = type === "warning" ? FaExclamationTriangle : FaInfoCircle;
  const iconColor = type === "warning" ? "text-yellow-500" : "text-blue-500";

  return (
    <div className={`${bgColor} ${borderColor} border rounded-md p-4 mb-6`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
        </div>
        <div className={`ml-3 ${textColor}`}>
          {title && <h4 className="text-sm font-medium">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Budget Category Component
interface BudgetCategoryProps {
  title: string;
  children: ReactNode;
  icon?: IconType;
  color?: string;
}

// Budget category component
const BudgetCategory: FC<BudgetCategoryProps> = ({
  title,
  icon: Icon,
  children,
  color = "blue",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 border text-black border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between bg-${color}-50 p-4 text-left text-lg font-semibold text-gray-900 focus:outline-none`}
      >
        <span className="flex items-center">
          {Icon && <Icon className={`mr-3 h-5 w-5 text-${color}-500`} />}
          {title}
        </span>
        <svg
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`p-4 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

// Expense Row Component
interface ExpenseRowProps {
  category: string;
  estimatedCost: string;
  notes?: string;
}

// Expense row component
const ExpenseRow: FC<ExpenseRowProps> = ({
  category,
  estimatedCost,
  notes = "",
}) => {
  const [actualCost, setActualCost] = useState("");

  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4 text-sm text-gray-900">{category}</td>
      <td className="py-3 px-4 text-sm text-gray-500">${estimatedCost}</td>
      <td className="py-3 px-4">
        <div className="flex items-center">
          <span className="text-gray-500 mr-1">$</span>
          <input
            type="text"
            value={actualCost}
            onChange={(e) => setActualCost(e.target.value)}
            className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-20"
          />
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">{notes}</td>
    </tr>
  );
};

const BudgetTemplatePage = () => {
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
              <svg
                className="mr-2 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Resources
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Template
                  </span>
                  <span className="ml-3 text-sm text-gray-500">
                    Last updated: May 2, 2025
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900">
                  USA International Student Budget Template
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                  Plan your finances for studying in the United States with our
                  comprehensive budget template.
                </p>
              </div>
              <div className="hidden md:flex md:items-center space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download PDF
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download Excel
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
                    href="#setup-costs"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Initial Setup Costs
                  </Link>
                  <Link
                    href="#monthly-income"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Monthly Income
                  </Link>
                  <Link
                    href="#essential-expenses"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Essential Expenses
                  </Link>
                  <Link
                    href="#academic-expenses"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Academic Expenses
                  </Link>
                  <Link
                    href="#personal-expenses"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Personal Expenses
                  </Link>
                  <Link
                    href="#money-saving-tips"
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Money-Saving Tips
                  </Link>
                </nav>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Related Resources
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      href="/resources/pre-arrival-checklist"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      Pre-Arrival Checklist
                    </Link>
                    <Link
                      href="/resources/first-week-guide"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      First Week Survival Guide
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
                <div className="prose prose-blue max-w-none">
                  <div className="mb-8">
                    <p className="text-gray-600">
                      Managing your finances effectively in the United States is
                      essential for international students. Use this budget
                      template to plan your expenses, track your spending, and
                      ensure you have enough funds for your entire study period.
                    </p>
                  </div>

                  <InfoBox title="Cost Variation Across the US">
                    <p>
                      Costs can vary dramatically depending on your location in
                      the US. Universities in New York City, San Francisco,
                      Boston, and Los Angeles typically have much higher living
                      costs than those in smaller cities or rural areas. Adjust
                      the estimates in this template based on your specific
                      location.
                    </p>
                  </InfoBox>

                  <div id="setup-costs">
                    <BudgetCategory
                      title="Initial Setup Costs in the USA"
                      icon={FaDollarSign}
                      color="green"
                    >
                      <p className="mb-4 text-gray-700">
                        These are one-time expenses you&apos;ll encounter when
                        first arriving in the United States.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Expense Category
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Estimated Cost (USD)
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actual Cost (USD)
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <ExpenseRow
                              category="F-1/J-1 Visa Application Fee"
                              estimatedCost="160"
                              notes="SEVIS Fee: Additional $350 (F-1) or $220 (J-1)"
                            />
                            <ExpenseRow
                              category="Health Check/Vaccinations"
                              estimatedCost="100-300"
                              notes="Varies by country and requirements"
                            />
                            <ExpenseRow
                              category="Flight Ticket"
                              estimatedCost="800-2,000"
                              notes="Varies by origin country"
                            />
                            <ExpenseRow
                              category="Accommodation Deposit"
                              estimatedCost="500-2,000"
                              notes="Usually 1 month's rent + security deposit"
                            />
                            <ExpenseRow
                              category="Temporary Accommodation"
                              estimatedCost="300-1,000"
                              notes="1-2 weeks in hotel/Airbnb if needed"
                            />
                            <tr className="bg-gray-50 font-medium">
                              <td className="py-3 px-4 text-sm text-gray-900">
                                TOTAL SETUP COSTS
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-900">
                                $2,910-7,260
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-900"></td>
                              <td className="py-3 px-4 text-sm text-gray-900">
                                Range depends on location and needs
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BudgetCategory>
                  </div>

                  <div id="monthly-income">
                    <BudgetCategory
                      title="Monthly Income"
                      icon={FaUniversity}
                      color="blue"
                    >
                      <p className="mb-4 text-gray-700">
                        Track all sources of income to understand your financial
                        capacity.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Income Source
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Amount (USD)
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Payment Frequency
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Monthly Total (USD)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="py-3 px-4 text-sm text-gray-900">
                                Scholarship/Grant
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input
                                    type="text"
                                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-20"
                                  />
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <select className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                  <option>Monthly</option>
                                  <option>Per Semester</option>
                                  <option>Annually</option>
                                  <option>One-time</option>
                                </select>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input
                                    type="text"
                                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-20"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr className="bg-gray-50 font-medium">
                              <td className="py-3 px-4 text-sm text-gray-900">
                                TOTAL MONTHLY INCOME
                              </td>
                              <td className="py-3 px-4"></td>
                              <td className="py-3 px-4"></td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input
                                    type="text"
                                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-20"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <InfoBox type="info" title="Work Permissions">
                        <p>
                          F-1 students are typically allowed to work up to 20
                          hours per week on campus during the academic year, and
                          full-time during breaks. Off-campus employment
                          generally requires authorization through CPT or OPT.
                          Always check with your international student office
                          before accepting any job.
                        </p>
                      </InfoBox>
                    </BudgetCategory>
                  </div>

                  <div id="essential-expenses">
                    <BudgetCategory
                      title="Essential Monthly Expenses"
                      icon={FaHome}
                      color="red"
                    >
                      <p className="mb-4 text-gray-700">
                        These are your basic necessary expenses every month
                        while living in the USA.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Expense Category
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Estimated Monthly Cost (USD)
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actual Monthly Cost (USD)
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <ExpenseRow
                              category="Rent/Housing"
                              estimatedCost="500-1,800"
                              notes="Varies greatly by location"
                            />
                            <ExpenseRow
                              category="Utilities (electricity, gas, water)"
                              estimatedCost="100-250"
                              notes="Often included in on-campus housing"
                            />
                            <ExpenseRow
                              category="Groceries"
                              estimatedCost="200-400"
                              notes="Cooking at home saves money"
                            />
                            <tr className="bg-gray-50 font-medium">
                              <td className="py-3 px-4 text-sm text-gray-900">
                                TOTAL ESSENTIAL EXPENSES
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-900">
                                $1,320-3,770
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-900"></td>
                              <td className="py-3 px-4 text-sm text-gray-900"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BudgetCategory>
                  </div>

                  <div id="money-saving-tips">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      USA-Specific Money-Saving Tips
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-start mb-4">
                          <FaUtensils className="h-5 w-5 text-green-500 mt-1 mr-3" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              Food & Groceries
                            </h3>
                            <ul className="mt-2 space-y-2 text-gray-600">
                              <li>
                                • Shop at discount grocery stores (Aldi,
                                Walmart, Trader Joe&apos;s)
                              </li>
                              <li>
                                • Use meal plans strategically for best value
                              </li>
                              <li>
                                • Cook meals at home ($10-15 savings per meal)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-start mb-4">
                          <FaBook className="h-5 w-5 text-red-500 mt-1 mr-3" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              Academic Expenses
                            </h3>
                            <ul className="mt-2 space-y-2 text-gray-600">
                              <li>
                                • Buy used textbooks or rent them (40-70%
                                savings)
                              </li>
                              <li>
                                • Check the university library for textbooks on
                                reserve
                              </li>
                              <li>• Look for department book exchanges</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <InfoBox type="warning" title="US Tax Obligations">
                    <p>
                      International students in the US typically need to file
                      tax forms, even if you have no income. At minimum, most
                      students must file Form 8843, and Form 1040NR if you have
                      US income.
                    </p>
                  </InfoBox>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">
                      Need Help Managing Your Finances?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Our financial advisors specialize in helping international
                      students make the most of their money while studying in
                      the USA.
                    </p>
                    <div className="mt-4">
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Schedule a Financial Consultation →
                      </a>
                    </div>
                  </div>
                </div>
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

export default BudgetTemplatePage;
