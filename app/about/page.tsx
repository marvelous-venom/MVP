// src/app/about/page.tsx
import Link from "next/link";
import {
  FaGlobeAmericas,
  FaHandshake,
  FaStar,
  FaUsers,
  FaUniversity,
  FaLightbulb,
} from "react-icons/fa";

export default function AboutPage() {
  const values = [
    {
      title: "Student-Centered",
      description:
        "Everything we do starts with the needs of international students. We were students ourselves, and we build solutions to the challenges we faced.",
      icon: FaUsers,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Global Perspective",
      description:
        "We celebrate cultural diversity and recognize the unique needs of students from different backgrounds and regions.",
      icon: FaGlobeAmericas,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Integrity & Trust",
      description:
        "We are transparent in our operations and only partner with trusted service providers that offer real value to students.",
      icon: FaHandshake,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our platform, continuously improving based on student feedback.",
      icon: FaStar,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Educational Focus",
      description:
        "We believe in the transformative power of international education and work to remove barriers to student success.",
      icon: FaUniversity,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Innovation",
      description:
        "We constantly seek innovative solutions to make the international student experience better and more accessible.",
      icon: FaLightbulb,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const teamMembers = [
    {
      name: "Sanjeev Sriram",
      role: "Co-Founder & CEO",

      bio: "Former international student from USA who experienced firsthand the challenges of studying abroad. Sanjeev founded StudyGlobal to simplify the journey for future students.",
      image: "/images/team/sarah.jpg",
    },
    {
      name: "Srujan Chidarla",
      role: "Co-Founder & CTO",
      bio: "Srujan is a tech enthusiast and former international student who leads our technology initiatives. He ensures our platform is user-friendly and secure.",
      image: "/images/team/miguel.jpg",
    },
    {
      name: "Vikas Reddy Nagulapally",
      role: "Co-Founder & COO",
      bio: "Vikas is passionate about education and technology. He oversees operations and partnerships, ensuring we deliver the best services to our users.",
      image: "/images/team/li.jpg",
    },
    {
      name: "Sai Manish Rao Sirikonda",
      role: "Co-Founder & CMO",
      bio: "Sai is a marketing expert with a background in international education. He focuses on outreach and community engagement to connect with students worldwide.",
      image: "/images/team/rahul.jpg",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "StudyGlobal Founded",
      description:
        "Started as a resource blog by former international students",
    },
    {
      year: "2022",
      title: "First Partnerships",
      description:
        "Launched banking and SIM card partnerships to help students with arrival essentials",
    },
    {
      year: "2023",
      title: "Community Platform",
      description: "Expanded to include student forums and community features",
    },
    {
      year: "2024",
      title: "Comprehensive Service Hub",
      description:
        "Developed into a full-service platform for international students",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description:
        "Now serving students from over 100 countries studying abroad",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About StudyGlobal
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Our mission is to make international education accessible and
              stress-free for students worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                StudyGlobal was born from our own experiences as international
                students. We faced the challenges of navigating unfamiliar
                banking systems, finding housing, securing phone plans, and
                understanding visa requirements—all while adjusting to a new
                academic environment and culture.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We realized that these practical hurdles were taking valuable
                time and energy away from what really matters: focusing on
                education and embracing the international experience.
                That&apos;s why we created StudyGlobal—to simplify these
                essential services and help international students get set up
                quickly so they can focus on their studies and enjoy their time
                abroad.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                What started as a small resource blog has grown into a
                comprehensive platform serving thousands of students from over
                100 countries. Our team now includes former international
                students, education experts, and technology specialists all
                united by a passion for making global education more accessible.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-blue-100 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <div className="text-lg font-medium text-blue-800">
                    Students from 100+ countries
                  </div>
                  <div className="mt-4 text-5xl font-bold text-blue-600">
                    10,000+
                  </div>
                  <div className="mt-2 text-blue-800">Students helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              These core principles guide everything we do at StudyGlobal.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg shadow-sm px-6 pb-8">
                    <div className="-mt-6">
                      <div
                        className={`inline-flex items-center justify-center p-3 ${value.color} rounded-md shadow-sm transform -translate-y-1/2`}
                      >
                        <value.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Former international students and education specialists dedicated
              to your success.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-24 w-24 rounded-full bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span className="text-lg font-medium">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600">{member.role}</p>
                    <p className="mt-2 text-base text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The milestones that have shaped StudyGlobal.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute h-full w-0.5 bg-gray-200 left-8 top-0"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-24">
                    {/* Year Circle */}
                    <div className="absolute left-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-lg font-bold">
                      {milestone.year}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Have questions about StudyGlobal? Want to partner with us?
                We&apos;d love to hear from you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10">
                <div>
                  <dt className="text-lg font-medium text-gray-900">
                    Partnerships
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Interested in offering your services to international
                    students through our platform? Email us at{" "}
                    <a
                      href="mailto:partners@studyglobal.com"
                      className="text-blue-600 hover:underline"
                    >
                      partners@studyglobal.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-lg font-medium text-gray-900">
                    Universities
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We work with universities to enhance their international
                    student support. Reach out at{" "}
                    <a
                      href="mailto:universities@studyglobal.com"
                      className="text-blue-600 hover:underline"
                    >
                      universities@studyglobal.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-lg font-medium text-gray-900">Careers</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Join our team of former international students and education
                    enthusiasts. View open positions at{" "}
                    <a
                      href="/careers"
                      className="text-blue-600 hover:underline"
                    >
                      studyglobal.com/careers
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
