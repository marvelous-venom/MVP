// src/app/services/banking/page.tsx
import Link from "next/link";
import {
  FaUniversity,
  FaCreditCard,
  FaMoneyBillWave,
  FaMobile,
  FaShieldAlt,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function BankingServicePage() {
  const bankProviders = [
    {
      name: "Zolve",
      logo: "/images/partners/zolve.png",
      features: {
        monthlyFee: "$0",
        minBalance: "$0",
        internationalFee: "1%",
        creditCard: "Yes, no SSN needed",
        mobileBanking: "Yes",
        atmFee: "$0 (5 free/month)",
      },
      studentOffer: "Special $50 sign-up bonus with code MVP",
      link: "https://products.zolve.com/credit-card/?utm_source=marvelous_sanjeev&utm_medium=insta_reels&utm_campaign=spring_credit_card_influencers&utm_affiliate=Influencer&utm_content=credit_card_pitch&utm_keyword=credit_card&referral_code=MVP",
    },
    {
      name: "Niyo",
      logo: "/images/partners/niyo.png",
      features: {
        monthlyFee: "$0",
        minBalance: "$0",
        internationalFee: "0%",
        creditCard: "Yes, after 6 months",
        mobileBanking: "Yes",
        atmFee: "$0 (3 free/month)",
      },
      studentOffer: "Exclusive account setup assistance",
      link: "https://my.goniyo.com/onb/v1/?utm_campaign_id=gomVbtKj&utm_source=SanjeevSriram&utm_campaign=SanjeevSriram&utm_adgroup=Mobile_Onboarding&utm_medium=ChannelPartner&utm_utr=&ncid=drEBqHgkPAbslaJYaq79IAqE6xGtJ0K9MPDJy-xbiP8tgbWePCHtwQ%3D%3D",
    },
    {
      name: "Juno",
      logo: "/images/partners/juno.png",
      features: {
        monthlyFee: "$0",
        minBalance: "$0",
        internationalFee: "0%",
        creditCard: "Yes, no SSN needed",
        mobileBanking: "Yes",
        atmFee: "$0 (unlimited)",
      },
      studentOffer: "Free metal debit card",
      link: "https://juno.finance",
    },
  ];

  const bankingFAQs = [
    {
      question: "Can I open a bank account before arriving in the U.S.?",
      answer:
        "Yes, several banks like Zolve allow you to start the application process online before arriving. You'll typically need to complete verification in-person after arrival, but having the account pre-approved can save time.",
    },
    {
      question: "What documents do I need to open a bank account?",
      answer:
        "You'll typically need your passport, student visa (F-1 or J-1), I-20 or DS-2019 form, proof of enrollment (acceptance letter or student ID), and proof of address in the U.S. (which can be your on-campus housing assignment or lease agreement).",
    },
    {
      question: "Can I get a credit card as an international student?",
      answer:
        "Yes, some banks offer credit cards specifically for international students without requiring a U.S. credit history or Social Security Number. Zolve and some others specialize in this service for newcomers to the U.S.",
    },
    {
      question: "How can I transfer money from my home country?",
      answer:
        "Options include international wire transfers (which may have high fees), online services like Wise or PayPal, or using multi-currency accounts. Ask your bank about international transfer fees and processing times.",
    },
  ];

  const bankingTips = [
    {
      title: "Avoid Unnecessary Fees",
      description:
        "Look for accounts with no monthly maintenance fees, no minimum balance requirements, and free international transfers.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Get a Credit Card Early",
      description:
        "Start building your U.S. credit history as soon as possible, which will help with housing applications and other financial services later.",
      icon: FaCreditCard,
    },
    {
      title: "Use Mobile Banking",
      description:
        "Download your bank's mobile app for convenient account management, mobile deposits, and payment services.",
      icon: FaMobile,
    },
    {
      title: "Protect Your Information",
      description:
        "Be cautious about sharing account details and set up alerts for any unusual activity in your account.",
      icon: FaShieldAlt,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Banking for International Students
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Get set up with student-friendly banking services that offer no
              fees, international transfers, and credit cards without SSN
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Banking Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on setting up your banking as
              an international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-banking-video-id"
              title="Banking Guide for International Students"
            />
            <p className="text-center mt-4 text-gray-500">
              Subscribe to our{" "}
              <a
                href="https://www.youtube.com/@SanjeevSriram"
                className="text-blue-600 hover:underline"
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

      {/* Banking Providers Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Banking Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We&apos;ve partnered with these student-friendly banks to offer
              exclusive benefits.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {bankProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaUniversity className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {provider.name}
                      </h3>
                      <p className="text-sm text-blue-600">
                        {provider.studentOffer}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Get Started
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
                        Minimum Balance
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.minBalance}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        International Transfer Fee
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.internationalFee}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Credit Card
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.creditCard}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Mobile Banking
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.mobileBanking}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        ATM Fee
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {provider.features.atmFee}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banking Tips */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Banking Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make the most of your banking experience with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {bankingTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">
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
              Banking FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about banking for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {bankingFAQs.map((faq, index) => (
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
              href="/resources/banking-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              View Complete Banking Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">
              Set up your student bank account today.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Use our exclusive partner links to receive special student benefits
            and offers.
          </p>

          <a
            href="#compare-banks"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Compare Banks
          </a>
        </div>
      </div>
    </main>
  );
}
