// src/app/community/page.tsx
import Link from "next/link";
import {
  FaUsers,
  FaComments,
  FaGlobe,
  FaHandshake,
  FaCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Student Forums",
      description:
        "Connect with fellow international students, ask questions, and share your experiences.",
      icon: FaComments,
      color: "bg-blue-100 text-blue-600",
      link: "/community/forums",
    },
    {
      title: "Country Groups",
      description:
        "Join groups specific to your home country to meet compatriots studying abroad.",
      icon: FaGlobe,
      color: "bg-green-100 text-green-600",
      link: "/community/country-groups",
    },
    {
      title: "Mentorship Program",
      description:
        "Get matched with experienced international students who can guide you through challenges.",
      icon: FaHandshake,
      color: "bg-orange-100 text-orange-600",
      link: "/community/mentorship",
    },
    {
      title: "Events Calendar",
      description:
        "Stay updated on orientation sessions, workshops, and social gatherings.",
      icon: FaCalendarAlt,
      color: "bg-purple-100 text-purple-600",
      link: "/community/events",
    },
    {
      title: "Study Groups",
      description: "Find study partners and groups for your courses and exams.",
      icon: FaGraduationCap,
      color: "bg-red-100 text-red-600",
      link: "/community/study-groups",
    },
    {
      title: "Success Stories",
      description:
        "Read inspiring stories from international students who've overcome challenges.",
      icon: FaUsers,
      color: "bg-yellow-100 text-yellow-600",
      link: "/community/success-stories",
    },
  ];

  const upcomingEvents = [
    {
      title: "New Student Welcome Mixer",
      date: "April 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Student Union Building",
      description:
        "Meet fellow international students and make connections in a relaxed setting with refreshments and activities.",
    },
    {
      title: "Visa Workshop",
      date: "April 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "International Student Center",
      description:
        "Learn about maintaining your visa status, work permissions, and important deadlines.",
    },
    {
      title: "Cultural Exchange Night",
      date: "April 25, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Hall",
      description:
        "Share your culture's food, music, and traditions while experiencing those of others.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The mentorship program made all the difference in my first semester. My mentor helped me navigate everything from course selection to finding the best coffee spots!",
      student: "Maria Chen",
      country: "China",
      university: "University of California, Berkeley",
    },
    {
      quote:
        "I was struggling with homesickness until I joined the community forums. Finding other students from Brazil who understood my experience was exactly what I needed.",
      student: "Rafael Santos",
      country: "Brazil",
      university: "New York University",
    },
    {
      quote:
        "Through the study groups, I not only improved my grades but also made friends who became like family during my time abroad.",
      student: "Priya Sharma",
      country: "India",
      university: "University of Michigan",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Student Community
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with fellow international students, share experiences, and
              build lasting friendships.
            </p>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Community Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join our thriving international student community with these
              interactive features.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8 h-full flex flex-col">
                    <div className="-mt-6">
                      <div
                        className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-md shadow-lg transform -translate-y-1/2`}
                      >
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-2 text-xl font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {feature.description}
                      </p>
                      <div className="mt-auto pt-5">
                        <Link
                          href={feature.link}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Explore
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

      {/* Upcoming Events */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Upcoming Events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join us for these events to meet other students and expand your
              network.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white shadow overflow-hidden sm:rounded-lg"
                >
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {event.date} • {event.time}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {event.location}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-500">
                      {event.description}
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/community/events"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                      >
                        Learn More & RSVP
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/community/events"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Community Voices
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from students who&apos;ve found their home away from home in
              our community.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-grow">
                      <svg
                        className="h-8 w-8 text-gray-400 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-base text-gray-600 italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="text-base font-medium text-gray-900">
                        {testimonial.student}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.country} • {testimonial.university}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join Community */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Ready to connect with fellow students?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join our community today to access forums, events, mentorship, and
            more.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Create Account
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
