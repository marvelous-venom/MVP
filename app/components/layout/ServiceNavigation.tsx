// src/components/layout/ServiceNavigation.tsx
"use client";
import Link from "next/link";
import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaMobileAlt,
  FaUtensils,
  FaBriefcase,
  FaPassport,
  FaPlane,
  FaHome,
  FaCalculator,
  FaMoneyBillWave,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const services = [
  { name: "BANKS", icon: FaUniversity, href: "/banks" },
  { name: "INSURANCE", icon: FaFileInvoiceDollar, href: "/insurance" },
  { name: "SIM CARDS", icon: FaMobileAlt, href: "/sim-cards" },
  { name: "FOOD", icon: FaUtensils, href: "/food" },
  { name: "JOBS", icon: FaBriefcase, href: "/jobs" },
  { name: "VISAS", icon: FaPassport, href: "/visas" },
  { name: "TRAVEL", icon: FaPlane, href: "/travel" },
  { name: "HOUSING", icon: FaHome, href: "/housing" },
  { name: "TAXES", icon: FaCalculator, href: "/taxes" },
  { name: "LOANS", icon: FaMoneyBillWave, href: "/loans" },
];

export const ServiceNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex min-w-max py-4 px-2">
        {services.map((service) => {
          const isActive = pathname.startsWith(service.href);
          const Icon = service.icon;

          return (
            <Link
              key={service.name}
              href={service.href}
              className={`flex flex-col items-center mx-4 group ${
                isActive ? "text-blue-600" : "text-gray-800"
              }`}
            >
              <Icon
                className={`text-2xl mb-1 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              />
              <span className="text-xs font-medium">{service.name}</span>
              {isActive && <div className="h-0.5 w-full bg-blue-600 mt-2" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
