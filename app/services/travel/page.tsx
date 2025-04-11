// src/app/services/travel/page.tsx
import Link from "next/link";
import {
  FaPlane,
  FaBus,
  FaTrain,
  FaCar,
  FaCalendarAlt,
  FaPassport,
  FaLuggageCart,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaBicycle,
} from "react-icons/fa";
import { YouTubeEmbed } from "@/app/components/ui/YouTubeEmbed";

export default function TravelServicePage() {
  const travelOptions = [
    {
      name: "International Travel",
      logo: "/images/travel/international.png",
      features: {
        bestFor: "Trips home during breaks, visiting other countries",
        costRange: "$500-2000+ round trip depending on destination",
        bookingAdvice: "Book 3-6 months in advance for best rates",
        studentDiscounts: "STA Travel, Student Universe, ISIC card discounts",
        requiredDocuments: "Passport, valid visa, I-20 with travel signature",
        specialConsiderations: "Check visa requirements for third countries",
      },
      description:
        "Travel between the U.S. and your home country or other international destinations",
      link: "#international-travel",
    },
    {
      name: "Domestic Flights",
      logo: "/images/travel/domestic-flights.png",
      features: {
        bestFor: "Cross-country travel, reaching distant cities quickly",
        costRange: "$150-500 round trip",
        bookingAdvice: "Book 1-3 months ahead, be flexible with dates",
        studentDiscounts: "Student Universe, airline student fares",
        requiredDocuments:
          "Government ID (passport for international students)",
        specialConsiderations: "Budget airlines may charge for luggage",
      },
      description: "Flying between cities within the United States",
      link: "#domestic-flights",
    },
    {
      name: "Bus Travel",
      logo: "/images/travel/bus.png",
      features: {
        bestFor: "Budget travel, medium distances, visiting nearby cities",
        costRange: "$15-100 one-way depending on distance",
        bookingAdvice: "Book 1-2 weeks ahead for best prices",
        studentDiscounts: "Greyhound, Megabus student discounts with ID",
        requiredDocuments: "ID for ticket pickup",
        specialConsiderations: "Longer travel times but most economical option",
      },
      description: "Affordable travel option for shorter distances",
      link: "#bus-travel",
    },
    {
      name: "Train Travel",
      logo: "/images/travel/train.png",
      features: {
        bestFor:
          "Comfortable travel between major cities, especially in Northeast",
        costRange: "$30-300 one-way depending on distance",
        bookingAdvice: "Book 2-4 weeks ahead for discounted fares",
        studentDiscounts: "Amtrak 15% student discount",
        requiredDocuments: "ID matching booking name",
        specialConsiderations: "Limited routes compared to Europe/Asia",
      },
      description: "Scenic and comfortable option for specific routes",
      link: "#train-travel",
    },
  ];

  const travelFAQs = [
    {
      question:
        "Do I need to get my I-20 signed before traveling internationally?",
      answer:
        "Yes, F-1 students need a valid travel signature on their I-20 form before leaving the U.S. The signature is typically valid for one year but should be current when you re-enter the country. Visit your university's international student office at least 2-3 weeks before your planned departure to request a travel signature. Without this signature, you may have difficulty re-entering the U.S. J-1 students will need a signature on their DS-2019 form instead. Always carry your passport, valid visa, and signed I-20/DS-2019 when re-entering the U.S.",
    },
    {
      question:
        "What are the most affordable options for traveling during breaks?",
      answer:
        "For budget travel within the U.S., consider: Buses (Greyhound, Megabus, Flixbus) for the lowest costs but longest travel times; budget airlines (Spirit, Frontier) for affordable flights if you pack light; Amtrak trains with student discounts for comfortable mid-range options; and rideshare services like Zimride or college rideshare boards for sharing costs with other students. For international travel, book well in advance, use student-focused travel sites like StudentUniverse or STA Travel, be flexible with dates, and consider connecting flights which are often cheaper than direct routes. Many destinations offer hostels or university summer housing for affordable accommodations.",
    },
    {
      question:
        "How early should I arrive at the airport for international flights?",
      answer:
        "For international flights departing from the U.S., plan to arrive at least 3 hours before your scheduled departure time. This provides sufficient time for check-in, baggage drop, security screening, and any additional document verification that may be required for international travelers. If you're traveling during peak periods (holidays, summer) or from a major international airport, consider adding an extra 30-60 minutes. When returning to the U.S., immigration and customs procedures can take significant time, so plan any connecting flights with at least 2-3 hours between arrival and departure. Always check your airline's specific recommendations, as some may have different guidelines.",
    },
    {
      question: "What's the best way to find student travel discounts?",
      answer:
        "Several resources are available specifically for student travel discounts: Specialized booking sites like StudentUniverse and STA Travel offer verified student fares on flights, hotels, and packages; the International Student Identity Card (ISIC) provides discounts on transportation and attractions worldwide; many airlines offer unadvertised student fares - call directly or check their website's student section; train services like Amtrak offer 15% discounts with student ID; and most bus companies have student rates or discount codes. Additionally, your university's study abroad or international student office may have partnerships with travel providers or know of school-specific discount programs. Timing is also important - book well outside of peak travel periods for the best rates.",
    },
  ];

  const travelTips = [
    {
      title: "Book Early for Breaks",
      description:
        "Secure flights 3-6 months ahead for major holidays when prices spike and availability is limited.",
      icon: FaCalendarAlt,
    },
    {
      title: "Pack Documentation",
      description:
        "Always travel with your passport, I-20 with valid signature, visa, and proof of enrollment.",
      icon: FaPassport,
    },
    {
      title: "Pack Light & Smart",
      description:
        "Most airlines charge for checked bags; learn to pack efficiently for shorter trips.",
      icon: FaLuggageCart,
    },
    {
      title: "Use Student Discounts",
      description:
        "Verify your student status for discounts on flights, trains, buses, and accommodations.",
      icon: FaMoneyBillWave,
    },
  ];

  const popularDestinations = [
    {
      name: "New York City",
      bestTimeToVisit: "Spring (April-June) or Fall (September-November)",
      mustSee:
        "Times Square, Central Park, Metropolitan Museum of Art, Broadway show",
      budgetTip:
        "Free museum days, Staten Island Ferry for Statue of Liberty views",
      travelFrom:
        "Accessible by direct flights from most cities, Amtrak from Northeast",
    },
    {
      name: "San Francisco",
      bestTimeToVisit: "September-November for warmest weather",
      mustSee: "Golden Gate Bridge, Fisherman's Wharf, Alcatraz, cable cars",
      budgetTip:
        "City Passes for attractions, free walking tours, public transit",
      travelFrom:
        "Major airport hub, limited train service, regional bus options",
    },
    {
      name: "Washington D.C.",
      bestTimeToVisit: "March-April (cherry blossoms) or September-October",
      mustSee: "Smithsonian museums, monuments, Capitol Building, White House",
      budgetTip:
        "Almost all major museums are free, walking-friendly city center",
      travelFrom:
        "Accessible by flight, Amtrak, and bus services from East Coast",
    },
    {
      name: "Chicago",
      bestTimeToVisit: "Late spring through early fall",
      mustSee:
        "Millennium Park, Art Institute, Willis Tower, Lake Michigan shoreline",
      budgetTip: "Free cultural events in parks, architecture tours on foot",
      travelFrom:
        "Major flight hub, Amtrak services, Greyhound from Midwest cities",
    },
    {
      name: "Miami",
      bestTimeToVisit:
        "November-April to avoid hurricane season and extreme heat",
      mustSee:
        "South Beach, Art Deco Historic District, Everglades National Park",
      budgetTip: "Public beaches, Little Havana for affordable dining",
      travelFrom: "Major international airport, limited train service",
    },
    {
      name: "National Parks",
      bestTimeToVisit:
        "Summer for most parks, shoulder seasons for popular parks",
      mustSee:
        "Yellowstone, Grand Canyon, Yosemite, Zion, Great Smoky Mountains",
      budgetTip: "Annual National Park Pass ($80), camping instead of lodges",
      travelFrom: "Typically requires car rental from nearest airport or city",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Travel Guide for International Students
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Navigate transportation options, find student discounts, and
              explore the U.S. and beyond during your studies.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Travel Guide
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our comprehensive video guide on traveling as an
              international student in the U.S.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <YouTubeEmbed
              videoId="your-travel-video-id"
              title="Travel Guide for International Students"
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

      {/* Travel Options Comparison */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Travel Options for Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Compare different transportation methods for your travel needs.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {travelOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        {option.name === "International Travel" && (
                          <FaPlane className="h-10 w-10" />
                        )}
                        {option.name === "Domestic Flights" && (
                          <FaPlane className="h-10 w-10" />
                        )}
                        {option.name === "Bus Travel" && (
                          <FaBus className="h-10 w-10" />
                        )}
                        {option.name === "Train Travel" && (
                          <FaTrain className="h-10 w-10" />
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {option.name}
                      </h3>
                      <p className="text-sm text-blue-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={option.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Best For
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.bestFor}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Cost Range
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.costRange}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Booking Advice
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.bookingAdvice}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Student Discounts
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.studentDiscounts}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Required Documents
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.requiredDocuments}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Special Considerations
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {option.features.specialConsiderations}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Popular Destinations for Student Travelers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Top places to visit during school breaks and how to reach them.
            </p>
          </div>

          <div className="mt-10">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Best Time to Visit
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Must-See Attractions
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Budget Tip
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Travel From
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {popularDestinations.map((destination, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {destination.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {destination.bestTimeToVisit}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {destination.mustSee}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {destination.budgetTip}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {destination.travelFrom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Travel Tips for International Students
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Smart strategies to make your travels smoother and more
              affordable.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {travelTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
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

      {/* Local Transportation */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Local Transportation Options
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Getting around your city or campus area efficiently.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                  <FaBus className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Public Transit
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Buses, subways, and light rail systems are affordable ways to
                get around many U.S. cities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Student discounts on monthly passes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Many universities offer free campus shuttle services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Download local transit apps for schedules
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                  <FaCar className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Rideshare Services
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Uber and Lyft provide convenient point-to-point transportation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    No need for cash or local payment methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Share rides with classmates to split costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Student discount programs available
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                  <FaCar className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Car Rentals & Sharing
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Options for occasional car use without ownership.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Zipcar and other hourly rentals on many campuses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Traditional car rentals require driver aged 21+
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Consider insurance needs and requirements
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600">
                  <FaBicycle className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Bikes & Scooters
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                Eco-friendly options for campus and urban areas.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Bike sharing systems in many cities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Electric scooter rentals via mobile apps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500">✓</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Many campuses offer bike rentals or sales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Document Requirements */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Travel Document Checklist
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Essential documents to keep with you while traveling.
            </p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                For International Travel
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Documents needed when traveling outside the U.S.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Valid Passport
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Must be valid for at least 6 months beyond your planned
                    return date
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Valid F-1/J-1 Visa
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Required for re-entry to the U.S. (unless Canadian citizens)
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    I-20/DS-2019 Form
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Must have a valid travel signature (within the last 12
                    months)
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Proof of Enrollment
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Recent enrollment verification letter from your university
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Financial Documents
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Proof of financial support or bank statements
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Health Insurance
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Proof of health insurance with international coverage
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important Reminder
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Always get a travel signature on your I-20 or DS-2019 from
                    your international student office before leaving the U.S.
                    Without it, you may be denied re-entry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Travel FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Common questions about traveling as an international student.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
            {travelFAQs.map((faq, index) => (
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
              href="/resources/travel-guide"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              View Complete Travel Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Plan your next adventure</span>
            <span className="block">Use our student travel resources</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Get exclusive student discounts, destination guides, and packing
            lists for your trips.
          </p>
          <a
            href="#travel-resources"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Access Travel Resources
          </a>
        </div>
      </div>
    </main>
  );
}
