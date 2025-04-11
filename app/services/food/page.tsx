// src/app/services/food/page.tsx
import Link from "next/link";
import {
  FaUtensils,
  FaShoppingCart,
  FaMoneyBillWave,
  FaMobileAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function FoodServicePage() {
  const foodOptions = [
    {
      name: "Meal Plans",
      logo: "/images/food/meal-plan.png",
      features: {
        cost: "$8-15 per meal (pre-paid)",
        convenience: "No cooking required",
        variety: "Multiple options daily",
        dietaryAccommodations: "Usually good options",
        socialAspect: "Great for meeting people",
        bestFor: "First-year students with on-campus housing",
      },
      description: "Pre-paid dining options offered by your university",
      link: "#university-meal-plans",
    },
    {
      name: "Grocery Shopping",
      logo: "/images/food/grocery.png",
      features: {
        cost: "$50-100 per week",
        convenience: "Requires cooking facilities",
        variety: "Complete control over food choices",
        dietaryAccommodations: "Customizable to any diet",
        socialAspect: "Can organize cooking with roommates",
        bestFor: "Budget-conscious students with kitchen access",
      },
      description: "Buy ingredients and prepare your own meals",
      link: "#grocery-options",
    },
    {
      name: "Food Delivery",
      logo: "/images/food/delivery.png",
      features: {
        cost: "$15-25 per meal (with fees)",
        convenience: "Delivered to your door",
        variety: "Wide selection of restaurants",
        dietaryAccommodations: "Many options available",
        socialAspect: "Good for group orders",
        bestFor: "Busy students during exam periods",
      },
      description: "Convenient delivery from local restaurants",
      link: "#delivery-options",
    },
  ];

  const foodFAQs = [
    {
      question:
        "Are university meal plans worth it for international students?",
      answer:
        "Meal plans can be convenient, especially for first-year students adjusting to a new country. They save time on shopping and cooking, provide reliable access to food, and offer social opportunities. However, they're often more expensive than self-catering and may not always accommodate specific cultural or dietary preferences. Consider a smaller plan to start and adjust as needed.",
    },
    {
      question: "How can I find grocery stores with international foods?",
      answer:
        "Most major U.S. cities have specialized international grocery stores. Search online for 'Asian supermarket,' 'Indian grocery,' 'Hispanic market,' etc., depending on your preferences. Many mainstream supermarkets also have international food sections. Additionally, check with your university's international student office or student groups for recommendations on where to find specific ingredients.",
    },
    {
      question: "What are the most budget-friendly food options?",
      answer:
        "Cooking at home using ingredients from budget grocery stores like Aldi, Lidl, or Walmart is usually the most economical option. Buy staples in bulk, take advantage of sales, and consider sharing groceries with roommates. For eating out, look for student discounts, happy hour specials, and affordable campus dining options. Food delivery apps often offer first-time user discounts.",
    },
    {
      question: "How do tipping and dining customs work in the U.S.?",
      answer:
        "In U.S. restaurants with table service, tipping 15-20% of the pre-tax bill is customary and expected. For food delivery, a tip of $3-5 or 15% (whichever is higher) is standard. Counter-service restaurants may have tip jars, but tipping is optional (though appreciated). Tax is not included in listed menu prices, so your final bill will be higher than the prices shown.",
    },
  ];

  const foodTips = [
    {
      title: "Compare Meal Plan Options",
      description:
        "Don't automatically choose the largest meal plan; start smaller and upgrade if needed.",
      icon: FaUtensils,
    },
    {
      title: "Use Student Discounts",
      description:
        "Many restaurants and delivery services offer special student pricing with a valid ID.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Find International Grocers",
      description:
        "Locate stores specializing in foods from your home country for familiar ingredients.",
      icon: FaGlobeAmericas,
    },
    {
      title: "Use Delivery App Promotions",
      description:
        "Compare different delivery apps for first-time user discounts and promotions.",
      icon: FaMobileAlt,
    },
  ];

  const budgetGroceryOptions = [
    {
      name: "Aldi",
      description:
        "Discount supermarket with surprisingly high quality and very low prices.",
      savings: "Save 30-40% compared to traditional supermarkets",
    },
    {
      name: "Trader Joe's",
      description: "Affordable specialty items and unique international foods.",
      savings: "Great value on prepared foods and international items",
    },
    {
      name: "Walmart Supercenter",
      description: "Comprehensive selection at consistently low prices.",
      savings: "One-stop shopping with competitive pricing",
    },
    {
      name: "Ethnic Grocery Stores",
      description:
        "Specialized stores with authentic international ingredients often at better prices.",
      savings: "Best prices on specific international items",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Food Options for International Students
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Find affordable dining options, grocery stores, and meal plans
              that suit your preferences and budget.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Food Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on food options and budgeting
              strategies.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-food-video-id"
              title="Food Guide for International Students"
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

      {/* Food Options Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Food Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Explore different ways to feed yourself as an international
              student.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {foodOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <FaUtensils className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {option.name}
                      </h3>
                      <p className="text-sm text-green-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={option.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Approximate Cost
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.cost}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Convenience
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.convenience}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Food Variety
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.variety}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Dietary Accommodations
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.dietaryAccommodations}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Social Aspect
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.socialAspect}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Best For
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.bestFor}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Grocery Options */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Budget-Friendly Grocery Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Save money on groceries with these affordable shopping options.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {budgetGroceryOptions.map((store, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 text-green-600">
                    <FaShoppingCart className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  {store.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {store.description}
                </p>
                <p className="mt-4 text-sm font-medium text-green-600 text-center">
                  {store.savings}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-900 text-center">
              Pro Tip: Use Grocery Apps
            </h3>
            <p className="mt-2 text-center text-gray-500">
              Apps like Flipp, Ibotta, and Checkout 51 can help you find deals,
              compare prices, and even earn cashback on groceries.
            </p>
          </div>
        </div>
      </div>

      {/* Food Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Food Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Make the most of your food budget with these helpful tips.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {foodTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
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
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Food FAQs</h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about food options for international students.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {foodFAQs.map((faq, index) => (
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
              href="/resources/food-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
            >
              View Complete Food Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Hungry for more savings?</span>
            <span className="block">Get exclusive food discounts.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Join our community to access special deals with local restaurants
            and delivery services.
          </p>
          <a
            href="#food-deals"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
          >
            View Food Deals
          </a>
        </div>
      </div>
    </main>
  );
}
