// src/components/sections/TrustBadges.tsx
import { FaStar, FaUniversity, FaCheckCircle } from "react-icons/fa";

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="ml-2 text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> from{" "}
                <span className="font-semibold">500+</span> student reviews
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <FaUniversity className="h-5 w-5 text-blue-600" />
            <p className="ml-2 text-sm text-gray-600">
              Partnered with <span className="font-semibold">100+</span>{" "}
              universities worldwide
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <FaCheckCircle className="h-5 w-5 text-green-600" />
            <p className="ml-2 text-sm text-gray-600">
              Trusted by <span className="font-semibold">10,000+</span>{" "}
              international students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
