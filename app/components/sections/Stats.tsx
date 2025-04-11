// src/components/sections/Stats.tsx
import {
  FaGraduationCap,
  FaUniversity,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";

export const Stats: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: "Students Helped",
      value: "10,000+",
      icon: FaGraduationCap,
      color: "text-blue-600 bg-blue-100",
    },
    {
      id: 2,
      label: "University Partnerships",
      value: "100+",
      icon: FaUniversity,
      color: "text-green-600 bg-green-100",
    },
    {
      id: 3,
      label: "Service Providers",
      value: "25+",
      icon: FaHandshake,
      color: "text-orange-600 bg-orange-100",
    },
    {
      id: 4,
      label: "Countries Covered",
      value: "15+",
      icon: FaGlobeAmericas,
      color: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by students worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We&apos;ve helped thousands of international students navigate their
            study abroad journey successfully.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 p-6 transform transition-all hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${stat.color} inline-flex`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
