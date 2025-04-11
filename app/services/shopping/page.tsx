// src/app/services/shopping/page.tsx
import Link from "next/link";
import {
  FaShoppingBag,
  FaTags,
  FaLaptop,
  FaBed,
  FaIdCard,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function ShoppingServicePage() {
  const shoppingCategories = [
    {
      name: "Essentials & Dorm Setup",
      icon: FaBed,
      features: {
        whatToBuy: "Bedding, toiletries, kitchen basics, cleaning supplies",
        whereToBuy: "Target, Walmart, Amazon, Ikea, Dollar Tree, TJ Maxx",
        estimatedCost: "$200-400 for initial setup",
        studentDiscounts: "10-15% off with ID at many retailers",
        timingSuggestion: "Purchase after arrival for bulky items",
        specialTips: "Check if your dorm provides any essentials before buying",
      },
      description: "Everything you need to set up your living space",
      link: "#essential-shopping",
    },
    {
      name: "Tech & Electronics",
      icon: FaLaptop,
      features: {
        whatToBuy: "Laptop, phone accessories, adapters, headphones",
        whereToBuy: "Best Buy, Amazon, Apple Store, university bookstore",
        estimatedCost: "$800-2000+ depending on needs",
        studentDiscounts:
          "Education pricing at Apple, Microsoft, Dell, Best Buy",
        timingSuggestion:
          "Research models before arrival, buy locally for warranty",
        specialTips:
          "Check your university's tech requirements and student deals",
      },
      description: "Devices and accessories for your studies",
      link: "#electronics-shopping",
    },
    {
      name: "Textbooks & School Supplies",
      icon: FaShoppingBag,
      features: {
        whatToBuy: "Textbooks, notebooks, planners, backpack, stationery",
        whereToBuy:
          "Campus bookstore, Amazon, Chegg, eBay, local office stores",
        estimatedCost: "$300-700 per semester",
        studentDiscounts: "Used or rental books 40-60% cheaper than new",
        timingSuggestion:
          "Wait until classes start before purchasing textbooks",
        specialTips: "Check syllabus for required vs. recommended materials",
      },
      description: "Required materials for your courses",
      link: "#textbook-shopping",
    },
    {
      name: "Seasonal Clothing",
      icon: FaTags,
      features: {
        whatToBuy: "Weather-appropriate clothing, footwear for local climate",
        whereToBuy: "Outlets, TJ Maxx/Marshalls, H&M, secondhand stores",
        estimatedCost: "$200-500 depending on climate needs",
        studentDiscounts: "10-20% at most clothing retailers with ID",
        timingSuggestion: "Buy seasonal items as needed throughout the year",
        specialTips: "Research your campus weather patterns before arriving",
      },
      description: "Clothing suited to your campus climate",
      link: "#clothing-shopping",
    },
  ];

  const budgetRetailers = [
    {
      name: "Amazon",
      category: "Online Marketplace",
      bestFor: "Almost everything, especially with Prime Student",
      studentBenefits: "Prime Student: 6-month free trial, then 50% off",
    },
    {
      name: "Target",
      category: "Department Store",
      bestFor: "Dorm essentials, affordable home goods",
      studentBenefits: "College student registry, seasonal discounts",
    },
    {
      name: "Walmart",
      category: "Discount Retailer",
      bestFor: "Low-price essentials, groceries, basics",
      studentBenefits: "Everyday low prices, price matching",
    },
    {
      name: "TJ Maxx/Marshalls",
      category: "Discount Clothing/Home",
      bestFor: "Brand-name clothing, accessories, home decor",
      studentBenefits: "40-60% off retail prices",
    },
    {
      name: "Dollar Tree/Dollar General",
      category: "Discount Store",
      bestFor: "Basic supplies, cleaning products, snacks",
      studentBenefits: "Most items $1-5",
    },
    {
      name: "IKEA",
      category: "Furniture",
      bestFor: "Affordable furniture, small space solutions",
      studentBenefits: "Budget-friendly dorm packages",
    },
    {
      name: "Thrift Stores (Goodwill, etc.)",
      category: "Secondhand",
      bestFor: "Unique finds, sustainable shopping",
      studentBenefits: "70-90% off retail prices",
    },
    {
      name: "Facebook Marketplace",
      category: "Person-to-Person",
      bestFor: "Used furniture, electronics from departing students",
      studentBenefits: "Negotiable prices, local pickup",
    },
  ];

  const shoppingFAQs = [
    {
      question: "What should I bring from home vs. buy in the U.S.?",
      answer:
        "Bring: personal documents, medications, electronics if compatible with U.S. voltage (or just bring adapters), and items with sentimental value. Buy in the U.S.: bedding (U.S. bed sizes differ), toiletries (to avoid spillage during travel), kitchenware, cleaning supplies, and furniture. For clothing, it depends on your home climate versus your U.S. destination climate, but bulky winter items are often better purchased after arrival. Generally, anything large, heavy, or inexpensive is better bought in the U.S. to save luggage space and avoid excess baggage fees.",
    },
    {
      question: "How can I furnish my apartment on a budget?",
      answer:
        "Several budget-friendly options exist: 1) Check Facebook Marketplace and university message boards for departing students selling furniture at steep discounts; 2) Visit thrift stores like Goodwill or Salvation Army for quality used items; 3) Look for student discounts at stores like IKEA, which offers compact furniture perfect for student housing; 4) Ask your international student office about furniture rental programs; 5) Attend university-sponsored furniture sales where items left by previous students are sold cheaply; 6) Split costs with roommates for shared items; 7) Check out dollar stores for kitchen basics and cleaning supplies; 8) Consider 'Buy Nothing' Facebook groups where community members give away items for free.",
    },
    {
      question: "What's the best way to save money on textbooks?",
      answer:
        "To save on textbooks: 1) Wait until the first week of class to confirm which books are truly necessary; 2) Rent instead of buy through services like Chegg, Amazon, or your campus bookstore; 3) Purchase used books from the campus bookstore, Amazon, or directly from former students; 4) Consider international editions which often contain identical content at lower prices; 5) Check if your library has copies on reserve; 6) Look into e-book versions which are typically cheaper; 7) Split costs with classmates if you share classes; 8) Check if your professor has placed materials on course reserve; 9) Ask your professor if older editions are acceptable, as they're usually much cheaper.",
    },
    {
      question: "How do sales tax and tipping work in the U.S.?",
      answer:
        "Sales tax in the U.S. is added at checkout rather than included in the displayed price. Rates vary by state and city (typically 4-10%), and some states exempt necessities like groceries and medications. Keep this in mind when budgeting, as your final cost will be higher than the price tag. For tipping, it's not expected in retail stores, but is customary in restaurants (15-20% of the pre-tax bill), for food delivery (15-20% or $3-5 minimum), hair stylists (15-20%), and taxi/rideshare drivers (15-20%). Not tipping for these services is considered rude. In cafes or for takeout, a small tip (10% or a few dollars) is appreciated but not strictly expected. For online shopping, look for free shipping thresholds to save on delivery costs.",
    },
  ];

  const moneyTips = [
    {
      title: "Compare Prices Online",
      description:
        "Use price comparison tools like CamelCamelCamel for Amazon or browser extensions like Honey to track price history and find the best deals.",
      icon: FaLaptop,
    },
    {
      title: "Shop Seasonal Sales",
      description:
        "Major sales happen around Back-to-School (August), Black Friday (November), and Post-Holiday (January) with discounts of 30-70%.",
      icon: FaTags,
    },
    {
      title: "Use Student Discounts",
      description:
        "Always ask if stores offer student discounts and keep your student ID handy. Register for UNiDAYS and Student Beans for online discounts.",
      icon: FaIdCard,
    },
    {
      title: "Buy Second-Hand",
      description:
        "Check campus bulletin boards, Facebook Marketplace, and thrift stores for gently used items at a fraction of the retail price.",
      icon: FaShoppingBag,
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart Shopping for International Students
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Find what you need, save money with student discounts, and set up
              your new home without breaking the bank.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              U.S. Shopping Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our guide on where to shop, how to save money, and what to
              buy as an international student.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-shopping-video-id"
              title="U.S. Shopping Guide for International Students"
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
              for more money-saving tips.
            </p>
          </div>
        </div>
      </div>

      {/* Shopping Categories */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What You&apos;ll Need to Buy
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Essential shopping categories for international students arriving
              in the U.S.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {shoppingCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <category.icon className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-indigo-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={category.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      See Details
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        What to Buy
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.whatToBuy}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Where to Buy
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.whereToBuy}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Estimated Cost
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.estimatedCost}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Student Discounts
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.studentDiscounts}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        When to Buy
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.timingSuggestion}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Pro Tip
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {category.features.specialTips}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Shopping Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Where to Shop on a Student Budget
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The best budget-friendly retailers for international students in
              the U.S.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {budgetRetailers.map((retailer, index) => (
              <div
                key={index}
                className="bg-gray-50 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {retailer.name}
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p className="font-semibold">{retailer.category}</p>
                    <p className="mt-1">Best for: {retailer.bestFor}</p>
                    <p className="mt-3 text-indigo-600">
                      {retailer.studentBenefits}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-900 text-center">
              Shopping Apps Every Student Should Have
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-medium text-indigo-600">
                  Price Comparison
                </h4>
                <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
                  <li>ShopSavvy (barcode scanner)</li>
                  <li>Honey (browser extension)</li>
                  <li>CamelCamelCamel (Amazon price tracker)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-medium text-indigo-600">
                  Student Discounts
                </h4>
                <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
                  <li>UNiDAYS (student verification)</li>
                  <li>Student Beans (exclusive discounts)</li>
                  <li>Amazon Prime Student (6 months free)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-medium text-indigo-600">
                  Cashback & Rewards
                </h4>
                <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
                  <li>Rakuten (cashback at 3500+ stores)</li>
                  <li>RetailMeNot (coupon finder)</li>
                  <li>Ibotta (grocery cashback)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Money-Saving Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Money-Saving Shopping Tips
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Smart strategies to make your student budget go further.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {moneyTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
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

      {/* Understanding U.S. Shopping */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Understanding U.S. Shopping Customs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Key differences to know when shopping in the United States.
            </p>
          </div>

          <div className="bg-gray-50 overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Sales Tax
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Unlike many countries, prices displayed in U.S. stores do not
                include sales tax, which is added at checkout. Tax rates vary by
                state and city (typically 4-10%).
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Return Policies
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Most U.S. retailers have generous return policies, often
                allowing returns within 30-90 days with receipt. Save your
                receipts and keep tags on items until you&apos;re sure you want
                to keep them.
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Coupons & Promotions
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Coupon use is common in the U.S. Sign up for store email lists,
                download store apps, and check weekly ads for discounts. Many
                stores also price-match competitors.
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Seasonal Sales
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Major shopping events include Back-to-School (August), Black
                Friday (day after Thanksgiving), Cyber Monday (online sales),
                and January clearance sales.
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Tipping
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Tipping is not expected for retail purchases, but is customary
                for delivery services (15-20%). Some furniture or appliance
                delivery may warrant a small tip ($5-20) if assembly is
                included.
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Online Shopping
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Free shipping is often available above certain purchase
                thresholds. Services like Amazon Prime offer fast, free shipping
                for members with student discounts available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Shopping FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about shopping in the U.S. for international
              students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {shoppingFAQs.map((faq, index) => (
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
              href="/resources/shopping-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Download Complete Shopping Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start shopping?</span>
            <span className="block">Get our student shopping checklist</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Download our comprehensive shopping list with budget estimates,
            recommended retailers, and special student discounts.
          </p>
          <a
            href="#shopping-checklist"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Download Shopping Checklist
          </a>
        </div>
      </div>
    </main>
  );
}
