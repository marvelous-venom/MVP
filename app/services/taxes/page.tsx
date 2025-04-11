// src/app/services/taxes/page.tsx
import Link from "next/link";
import {
  FaFileInvoiceDollar,
  FaUniversity,
  FaGlobe,
  FaCalendarAlt,
  FaHandshake,
  FaFileDownload,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function TaxesServicePage() {
  const taxTypes = [
    {
      name: "Federal Income Tax",
      logo: "/images/taxes/federal.png",
      features: {
        whoMustFile: "Most F-1/J-1 students with U.S. source income",
        relevantForms: "Form 1040-NR, Form 8843",
        filingDeadline: "April 15th (generally)",
        taxTreaties: "Benefits vary by country, may reduce or eliminate tax",
        specialConsiderations: "Nonresident vs. resident alien status",
        resourcesAvailable: "IRS free file, university tax assistance programs",
      },
      description: "U.S. national income taxes",
      link: "#federal-taxes",
    },
    {
      name: "State Income Tax",
      logo: "/images/taxes/state.png",
      features: {
        whoMustFile: "Students with income earned in that state",
        relevantForms: "Varies by state",
        filingDeadline: "Usually same as federal (April 15th)",
        taxTreaties: "Federal treaties may not apply to state taxes",
        specialConsiderations: "Some states have no income tax",
        resourcesAvailable:
          "State tax department resources, university assistance",
      },
      description: "Taxes levied by your state of residence",
      link: "#state-taxes",
    },
    {
      name: "FICA (Social Security & Medicare)",
      logo: "/images/taxes/fica.png",
      features: {
        whoMustFile: "Not applicable - withheld automatically if required",
        relevantForms: "No separate filing required",
        filingDeadline: "N/A - withheld from each paycheck",
        taxTreaties: "Not covered by tax treaties",
        specialConsiderations:
          "F-1/J-1 students exempt during first 5 calendar years",
        resourcesAvailable:
          "University payroll office can help with exemptions",
      },
      description: "Payroll taxes that fund social programs",
      link: "#fica-taxes",
    },
    {
      name: "Form 8843 (Statement for Exempt Individuals)",
      logo: "/images/taxes/form8843.png",
      features: {
        whoMustFile: "ALL F-1/J-1 students, regardless of income",
        relevantForms: "Form 8843 only",
        filingDeadline: "April 15th or June 15th for those without income",
        taxTreaties: "Not applicable",
        specialConsiderations:
          "Required even with no income or no tax filing requirement",
        resourcesAvailable:
          "International student office, free tax preparation software",
      },
      description: "Mandatory form for all international students",
      link: "#form-8843",
    },
  ];

  const taxFAQs = [
    {
      question:
        "Do I need to file taxes if I didn't earn any income in the U.S.?",
      answer:
        "Yes, even if you had no U.S. income, all F-1 and J-1 students must file Form 8843 (Statement for Exempt Individuals) to maintain their nonresident alien status. This is not a tax return but an informational statement required by the IRS. If you had no U.S. source income, you generally need to file only Form 8843. This is required for each year or partial year you are in the U.S. under F-1 or J-1 status.",
    },
    {
      question:
        "What's the difference between being a resident alien and nonresident alien for tax purposes?",
      answer:
        "Most international students on F-1 and J-1 visas are considered nonresident aliens for tax purposes during their first 5 calendar years in the U.S. Nonresident aliens file Form 1040-NR, are generally taxed only on U.S. source income, and cannot claim the same deductions and credits as U.S. citizens. After the 5-year period, students may become resident aliens for tax purposes under the Substantial Presence Test, even though their immigration status hasn't changed. Resident aliens file Form 1040, are taxed on worldwide income, and can claim more deductions.",
    },
    {
      question: "What are tax treaties and how do I know if one applies to me?",
      answer:
        "Tax treaties are agreements between the U.S. and other countries that can reduce or eliminate certain taxes for eligible residents of the treaty country. The benefits vary widely by country and may include exemptions from income tax on scholarships, fellowships, or employment income up to certain limits. To determine if a treaty applies to you, check the IRS Publication 901 (U.S. Tax Treaties) or use tax preparation software designed for international students. To claim treaty benefits, you'll need to complete Form 8233 or include Form 1042-S information on your tax return.",
    },
    {
      question: "What tax forms will I receive and need to file?",
      answer:
        "Common forms you might receive include: W-2 (from employers showing wages), 1042-S (for scholarship/fellowship funds or treaty benefits), 1099 (for independent contractor work or bank interest), and 1098-T (showing tuition payments). Forms you might need to file include: Form 8843 (required for all F-1/J-1 students regardless of income), Form 1040-NR (for nonresident aliens with U.S. income), Form 8233 (to claim tax treaty benefits for services income), and state tax returns for your state of residence. Many universities offer free access to tax preparation software specifically designed for international students.",
    },
  ];

  const taxTimeline = [
    {
      month: "January-February",
      tasks:
        "Receive tax documents from employers (W-2s) and scholarships (1042-S)",
      icon: FaFileDownload,
    },
    {
      month: "February-March",
      tasks:
        "Access tax preparation resources at your university and gather necessary documents",
      icon: FaUniversity,
    },
    {
      month: "March-April",
      tasks:
        "Complete and file your tax returns before the April 15th deadline",
      icon: FaCalendarAlt,
    },
    {
      month: "June 15th",
      tasks:
        "Extended deadline for nonresident aliens without U.S. source income (only for Form 8843)",
      icon: FaGlobe,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tax Information for International Students
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
              Understand your U.S. tax obligations, filing requirements, and
              access resources to help you file correctly.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Tax Guide</h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on understanding and filing
              U.S. taxes as an international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-taxes-video-id"
              title="Tax Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-emerald-600 hover:underline"
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

      {/* Tax Types Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Understanding U.S. Tax Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Learn about the different tax obligations for international
              students in the U.S.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {taxTypes.map((tax, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaFileInvoiceDollar className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {tax.name}
                      </h3>
                      <p className="text-sm text-emerald-600">
                        {tax.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={tax.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Who Must File
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.whoMustFile}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Relevant Forms
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.relevantForms}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Filing Deadline
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.filingDeadline}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Tax Treaties
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.taxTreaties}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Special Considerations
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.specialConsiderations}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Resources Available
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tax.features.resourcesAvailable}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax Filing Timeline */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tax Filing Timeline
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Important dates and milestones in the U.S. tax calendar for
              international students.
            </p>
          </div>

          <div className="mt-10">
            <div className="lg:border-t lg:border-b border-gray-200">
              <ol className="relative text-gray-500">
                {taxTimeline.map((item, index) => (
                  <li
                    key={index}
                    className={`mb-10 lg:mb-0 ${
                      index === 0 ? "" : "lg:border-t border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:items-start py-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center lg:mt-0.5 lg:mr-4">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="mt-3 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.month}
                        </h3>
                        <p className="mt-1 text-base text-gray-500">
                          {item.tasks}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaCalendarAlt className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Important Reminder
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Tax filing is mandatory for all international students on
                      F-1 or J-1 visas, even if you had no income. At minimum,
                      you must file Form 8843.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Assistance Resources */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tax Filing Resources
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Tools and resources to help you file your taxes correctly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 text-emerald-600">
                  <FaUniversity className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                University Resources
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Many universities offer free tax software and workshops for
                international students.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Check with your international student office
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Many schools provide Sprintax or GTP access
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Look for tax workshops in March/April
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 text-emerald-600">
                  <FaHandshake className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Volunteer Tax Assistance
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Free tax preparation by IRS-certified volunteers (VITA program).
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Available to students with income under $58,000
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Many programs have volunteers specialized in nonresident
                    returns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Find locations at irs.treasury.gov/freetaxprep
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 text-emerald-600">
                  <FaFileDownload className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Specialized Tax Software
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Software specifically designed for international student tax
                situations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Sprintax - Specialized for nonresident alien returns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Handles tax treaties and multiple income types
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-emerald-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Check for discounts through your university
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Tax FAQs</h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about taxes for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {taxFAQs.map((faq, index) => (
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
              href="/resources/tax-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200"
            >
              View Complete Tax Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready for tax season?</span>
            <span className="block">Download our tax checklist.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-emerald-200">
            Our step-by-step guide will help you gather all the documents you
            need for a smooth tax filing experience.
          </p>
          <a
            href="#tax-checklist"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 sm:w-auto"
          >
            Get Tax Checklist
          </a>
        </div>
      </div>
    </main>
  );
}
