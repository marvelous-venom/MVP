// components/services/ServiceCard.tsx
import Link from "next/link";
import Image from "next/image";

interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServiceCardProps {
  service: ServiceType;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={service.link}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Image
              src={service.icon}
              alt={service.title}
              width={24}
              height={24}
              className="text-indigo-600"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
        <div className="px-6 pb-4">
          <span className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
            Learn more
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};
