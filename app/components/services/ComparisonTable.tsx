// src/components/services/ComparisonTable.tsx
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";

interface Provider {
  name: string;
  logo: string;
  features: {
    [key: string]: string | boolean | number;
  };
  studentDiscount?: string;
  link: string;
}

interface ComparisonTableProps {
  category: string;
  providers: Provider[];
  featureLabels: {
    [key: string]: string;
  };
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  providers,
  featureLabels,
}) => {
  const renderValue = (value: string | boolean | number) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="text-green-500 flex justify-center">
          <FaCheck className="h-5 w-5" />
        </div>
      ) : (
        <div className="text-red-500 flex justify-center">
          <FaTimes className="h-5 w-5" />
        </div>
      );
    }
    return value;
  };

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Provider
            </th>
            {Object.values(featureLabels).map((label, idx) => (
              <th
                key={idx}
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
              >
                {label}
              </th>
            ))}
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Student Offer
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              <span className="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {providers.map((provider, idx) => (
            <tr
              key={provider.name}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 relative flex-shrink-0">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {provider.name}
                    </div>
                  </div>
                </div>
              </td>

              {Object.keys(featureLabels).map((key) => (
                <td
                  key={key}
                  className="whitespace-nowrap px-3 py-4 text-sm text-center"
                >
                  {renderValue(provider.features[key])}
                </td>
              ))}

              <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-primary-600 font-medium">
                {provider.studentDiscount || "—"}
              </td>

              <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                <Link
                  href={provider.link}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Select
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
