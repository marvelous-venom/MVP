// src/components/ui/ServiceCard.tsx
import Link from "next/link";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  partners?: number;
  color?: "blue" | "orange" | "green" | "purple";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  partners,
  color = "blue",
}) => {
  const colorClasses = {
    blue: {
      iconBg: "bg-blue-100",
      iconText: "text-blue-600",
      hoverBorder: "group-hover:border-blue-200",
      linkText: "text-blue-600 group-hover:text-blue-700",
    },
    orange: {
      iconBg: "bg-orange-100",
      iconText: "text-orange-600",
      hoverBorder: "group-hover:border-orange-200",
      linkText: "text-orange-600 group-hover:text-orange-700",
    },
    green: {
      iconBg: "bg-green-100",
      iconText: "text-green-600",
      hoverBorder: "group-hover:border-green-200",
      linkText: "text-green-600 group-hover:text-green-700",
    },
    purple: {
      iconBg: "bg-purple-100",
      iconText: "text-purple-600",
      hoverBorder: "group-hover:border-purple-200",
      linkText: "text-purple-600 group-hover:text-purple-700",
    },
  };

  const classes = colorClasses[color];

  return (
    <Link href={href} className="group">
      <div
        className={`relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ${classes.hoverBorder} group-hover:shadow-md h-full flex flex-col`}
      >
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-md ${classes.iconBg} ${classes.iconText} mb-5`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 flex-grow">{description}</p>

        {partners !== undefined && (
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <span className="font-medium">
              {partners} Partner{partners !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        <div
          className={`mt-4 flex items-center text-sm font-medium ${classes.linkText}`}
        >
          <span>Learn more</span>
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
