// src/app/services/sim-cards/page.tsx
import Link from "next/link";
import { FaMobile, FaGlobe, FaSignal, FaTag, FaSimCard } from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function SimCardsServicePage() {
  const simProviders = [
    {
      name: "T-Mobile",
      logo: "/images/partners/tmobile.png",
      features: {
        monthlyFee: "$40/month",
        data: "Unlimited",
        internationalTexting: "Included",
        internationalCalling: "$5/month add-on",
        hotspot: "5GB high-speed",
        contractRequired: "No",
      },
      studentOffer: "10% Student Discount with valid ID",
      link: "https://www.t-mobile.com/cell-phone-plans/student-discount",
    },
    {
      name: "Mint Mobile",
      logo: "/images/partners/mintmobile.png",
      features: {
        monthlyFee: "$15/month (paid annually)",
        data: "4GB 5G/LTE",
        internationalTexting: "Included",
        internationalCalling: "Extra charge",
        hotspot: "Included",
        contractRequired: "No",
      },
      studentOffer: "3 months free with 12-month plan",
      link: "https://www.mintmobile.com",
    },
    {
      name: "Ultra Mobile",
      logo: "/images/partners/ultramobile.png",
      features: {
        monthlyFee: "$19/month",
        data: "2GB 5G/LTE",
        internationalTexting: "Included",
        internationalCalling: "Included to 80+ countries",
        hotspot: "Included",
        contractRequired: "No",
      },
      studentOffer: "Free international calling to select countries",
      link: "https://www.ultramobile.com",
    },
  ];

  const simCardFAQs = [
    {
      question:
        "Do I need a Social Security Number to get a SIM card in the U.S.?",
      answer:
        "No, you don't need a Social Security Number (SSN) to purchase a prepaid SIM card. However, some postpaid plans might require a credit check or SSN. For international students, prepaid plans are often the easiest option.",
    },
    {
      question: "What documents do I need to purchase a SIM card?",
      answer:
        "Generally, you'll need a photo ID such as your passport. Some providers might also ask for proof of address, but this varies. Prepaid plans typically have fewer documentation requirements than postpaid plans.",
    },
    {
      question: "Can I keep my phone number from my home country?",
      answer:
        "No, you'll need a new U.S. phone number when you get a local SIM card. However, you can keep your home country number active through dual-SIM phones or by porting your number to services like WhatsApp or Telegram.",
    },
    {
      question: "What's the difference between prepaid and postpaid plans?",
      answer:
        "Prepaid plans require payment upfront and have no contracts, making them flexible for international students. Postpaid plans bill you monthly, may require credit checks, but often include more features and better customer service.",
    },
  ];

  const simCardTips = [
    {
      title: "Get a Local Number ASAP",
      description:
        "Having a local phone number makes it easier to set up other services like banking and housing.",
      icon: FaMobile,
    },
    {
      title: "Consider Coverage",
      description:
        "Check which carriers have the best coverage at your university and surrounding areas.",
      icon: FaSignal,
    },
    {
      title: "Look for Student Deals",
      description:
        "Many carriers offer special discounts for students with valid university ID.",
      icon: FaTag,
    },
    {
      title: "Check International Options",
      description:
        "If you'll be calling home frequently, look for plans with good international calling rates.",
      icon: FaGlobe,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              SIM Cards & Mobile Services
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Stay connected with affordable mobile plans designed for
              international students. Compare prepaid and contract options with
              student discounts.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Mobile Service Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our video guide on choosing the right mobile plan as an
              international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-sim-card-video-id"
              title="Mobile Plan Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-green-600 hover:underline"
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

      {/* SIM Providers Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Mobile Providers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find the best mobile plan for your needs with these
              student-friendly options.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {simProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaSimCard className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {provider.name}
                      </h3>
                      <p className="text-sm text-green-600">
                        {provider.studentOffer}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                    >
                      See Plans
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
                        Data
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.data}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        International Texting
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.internationalTexting}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        International Calling
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.internationalCalling}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Hotspot
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.hotspot}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Contract Required
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.contractRequired}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Mobile Service Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make the most of your mobile service with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {simCardTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 rounded-full p-3 text-green-600">
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
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Mobile Service FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about mobile services for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {simCardFAQs.map((faq, index) => (
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
              href="/resources/sim-card-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
            >
              View Complete Mobile Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get connected?</span>
            <span className="block">Choose your mobile plan today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Use our exclusive partner links to receive special student benefits
            and offers.
          </p>
          <a
            href="#compare-providers"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
          >
            Compare Providers
          </a>
        </div>
      </div>
    </main>
  );
}
