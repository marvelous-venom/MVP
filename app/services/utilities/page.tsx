// src/app/services/utilities/page.tsx
import Link from "next/link";
import {
  FaBolt,
  FaWifi,
  FaWater,
  FaHandHoldingWater,
  FaFire,
  FaRecycle,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function UtilitiesServicePage() {
  const utilityTypes = [
    {
      name: "Electricity",
      logo: "/images/utilities/electricity.png",
      features: {
        averageCost: "$50-100/month for apartment",
        setupProcess: "Contact provider or handled by landlord",
        paymentOptions: "Monthly billing, auto-pay available",
        internationalRequirements: "May require SSN or security deposit",
        energySavingTips: "Use LED bulbs, turn off when not in use",
        commonProviders: "Varies by region (Duke Energy, ConEd, PG&E, etc.)",
      },
      description: "Essential power service for your home",
      link: "#electricity-options",
    },
    {
      name: "Internet & WiFi",
      logo: "/images/utilities/internet.png",
      features: {
        averageCost: "$40-80/month for basic broadband",
        setupProcess:
          "Online signup, self-installation or professional install",
        paymentOptions:
          "Monthly billing, often requires autopay for best rates",
        internationalRequirements: "Credit check or upfront payment",
        energySavingTips: "Turn off WiFi when away for extended periods",
        commonProviders:
          "Xfinity, Spectrum, AT&T, Verizon, T-Mobile Home Internet",
      },
      description: "High-speed connectivity for study and entertainment",
      link: "#internet-options",
    },
    {
      name: "Water & Sewage",
      logo: "/images/utilities/water.png",
      features: {
        averageCost: "$20-60/month for apartment",
        setupProcess: "Usually handled by landlord or property management",
        paymentOptions: "Often included in rent or billed separately",
        internationalRequirements: "Rarely requires direct student setup",
        energySavingTips: "Fix leaky faucets, take shorter showers",
        commonProviders: "Local municipal water authorities",
      },
      description: "Water service often included in housing costs",
      link: "#water-options",
    },
    {
      name: "Gas/Heating",
      logo: "/images/utilities/gas.png",
      features: {
        averageCost: "$30-150/month (seasonal variation)",
        setupProcess: "Contact provider or handled by landlord",
        paymentOptions: "Monthly billing, budget plans available",
        internationalRequirements: "May require deposit without credit history",
        energySavingTips:
          "Lower thermostat when sleeping/away, use efficient appliances",
        commonProviders: "Local gas companies (National Grid, PG&E, etc.)",
      },
      description: "Heating and cooking gas service",
      link: "#gas-options",
    },
  ];

  const utilityFAQs = [
    {
      question: "Are utilities typically included in rent for student housing?",
      answer:
        "It varies. On-campus dormitories and some student-focused apartment complexes often include all utilities in the rent. However, many off-campus apartments require tenants to set up and pay for utilities separately. Always clarify with your landlord or property manager exactly which utilities are included and which you'll need to arrange yourself. Some properties might include water and trash but require you to pay for electricity, gas, and internet.",
    },
    {
      question:
        "How do I set up utilities if I don't have a Social Security Number?",
      answer:
        "Without an SSN, utility companies may require a larger security deposit (typically $100-300) or a letter of guarantee from someone with good credit in the U.S. Some companies may accept alternative forms of identification like your passport and student visa. University-sponsored housing or properties that frequently rent to international students may have established processes for helping students without SSNs. Many utility companies also have international customer service departments that can help with specific requirements.",
    },
    {
      question: "What's the best internet option for students?",
      answer:
        "For most students, a mid-tier broadband plan (100-300 Mbps) is sufficient for streaming, video calls, and downloading course materials. Consider providers that offer student discounts or no-contract options. Many providers offer special promotions at the beginning of academic terms. If you're living with roommates, a faster plan split between multiple people can be more economical. Check if your university has partnerships with local providers for discounted rates. Mobile hotspot plans can be a temporary solution while setting up permanent internet.",
    },
    {
      question: "How can I reduce my utility bills?",
      answer:
        "To reduce electricity costs, use LED bulbs, unplug devices when not in use, and use power strips with switches. For heating/cooling, adjust your thermostat by a few degrees (lower in winter, higher in summer) and use fans or extra blankets as needed. For water conservation, take shorter showers, fix any leaks promptly, and run full loads of laundry. Many utility companies offer free energy audits or online tools to help identify saving opportunities. Also consider asking for budget billing plans that spread seasonal cost variations across the year.",
    },
  ];

  const utilityTips = [
    {
      title: "Set Up Utilities Before Moving In",
      description:
        "Contact providers at least 1-2 weeks before your move-in date to ensure services are active when you arrive.",
      icon: FaLightbulb,
    },
    {
      title: "Ask About Student Discounts",
      description:
        "Many internet providers offer special rates for students with valid university ID.",
      icon: FaWifi,
    },
    {
      title: "Monitor Your Usage",
      description:
        "Use provider apps to track consumption and identify ways to reduce usage and costs.",
      icon: FaBolt,
    },
    {
      title: "Understand Billing Cycles",
      description:
        "Learn when bills are due and set up automatic payments to avoid late fees.",
      icon: FaRecycle,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Utilities for International Students
            </h1>
            <p className="mt-6 text-xl text-amber-100 max-w-3xl mx-auto">
              Navigate setting up electricity, internet, water, and gas services
              in your new home away from home.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Utilities Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on setting up and managing
              utilities as an international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-utilities-video-id"
              title="Utilities Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-amber-600 hover:underline"
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

      {/* Utility Types Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Essential Utilities Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understand the different utilities you&apos;ll need to manage in
              your new home.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {utilityTypes.map((utility, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        {utility.name === "Electricity" && (
                          <FaBolt className="h-10 w-10" />
                        )}
                        {utility.name === "Internet & WiFi" && (
                          <FaWifi className="h-10 w-10" />
                        )}
                        {utility.name === "Water & Sewage" && (
                          <FaWater className="h-10 w-10" />
                        )}
                        {utility.name === "Gas/Heating" && (
                          <FaFire className="h-10 w-10" />
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {utility.name}
                      </h3>
                      <p className="text-sm text-amber-600">
                        {utility.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={utility.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Average Cost
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.averageCost}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Setup Process
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.setupProcess}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Payment Options
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.paymentOptions}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        International Requirements
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.internationalRequirements}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Energy Saving Tips
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.energySavingTips}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Common Providers
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {utility.features.commonProviders}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile and Alternative Solutions */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Alternative Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Consider these alternatives if traditional utilities aren&apos;t
              available or practical.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 rounded-full p-3 text-amber-600">
                  <FaMobileAlt className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Mobile Hotspots
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Use your phone or a dedicated hotspot device as a temporary or
                backup internet solution.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    No installation required
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Works immediately upon arrival
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Portable solution for travel
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✗
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Data limits may apply
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✗
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Higher cost for heavy usage
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 rounded-full p-3 text-amber-600">
                  <FaHandHoldingWater className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                Shared Utilities
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Split costs with roommates or neighbors for more affordable
                utilities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Lower individual costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Only one person needs to set up accounts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✓
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Often better services for the price
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✗
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Requires clear agreements about usage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                    ✗
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    May lead to conflicts if not managed well
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Utility Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make utility setup and management easier with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {utilityTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-amber-100 rounded-full p-3 text-amber-600">
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
              Utilities FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about utilities for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {utilityFAQs.map((faq, index) => (
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
              href="/resources/utilities-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200"
            >
              View Complete Utilities Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-amber-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Need help setting up utilities?</span>
            <span className="block">Use our utilities setup checklist.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-amber-200">
            Download our step-by-step guide for setting up all essential
            services in your new home.
          </p>
          <a
            href="#utilities-checklist"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50 sm:w-auto"
          >
            Get Utilities Checklist
          </a>
        </div>
      </div>
    </main>
  );
}
