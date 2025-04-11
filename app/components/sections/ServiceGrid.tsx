// src/components/sections/ServicesGrid.tsx
import { ServiceCard } from "../ui/ServiceCard";
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
} from "react-icons/fa";

export const ServiceGrid: React.FC = () => {
  const services = [
    {
      title: "Banking",
      description:
        "Student-friendly banking solutions with no hidden fees, international transfers, and easy account setup.",
      icon: FaUniversity,
      href: "/services/banking",
      partners: 2,
      color: "blue",
    },
    {
      title: "SIM Cards",
      description:
        "Stay connected with affordable mobile plans and international calling options.",
      icon: FaMobileAlt,
      href: "/services/sim-cards",
      partners: 3,
      color: "green",
    },
    {
      title: "Insurance",
      description:
        "Health, travel, and property insurance packages tailored for international students.",
      icon: FaFileInvoiceDollar,
      href: "/services/insurance",
      partners: 2,
      color: "orange",
    },
    {
      title: "Housing",
      description:
        "Find safe, affordable housing close to your campus with verified listings.",
      icon: FaHome,
      href: "/services/housing",
      partners: 2,
      color: "blue",
    },
    {
      title: "Visas & Immigration",
      description:
        "Navigate visa requirements, extensions, and immigration processes with expert guidance.",
      icon: FaPassport,
      href: "/services/visas",
      partners: 3,
      color: "green",
    },
    {
      title: "Food & Groceries",
      description:
        "Discounts on meal deliveries and grocery services for international students.",
      icon: FaUtensils,
      href: "/services/food",
      partners: 1,
      color: "orange",
    },
    {
      title: "Travel",
      description:
        "Explore your host country with student discounts on flights, trains, and accommodation.",
      icon: FaPlane,
      href: "/services/travel",
      partners: 2,
      color: "blue",
    },
    {
      title: "Jobs & Internships",
      description:
        "Find student-friendly employment opportunities and internships that work with your visa.",
      icon: FaBriefcase,
      href: "/services/jobs",
      partners: 3,
      color: "green",
    },
    {
      title: "Taxes",
      description:
        "Understand local tax obligations and get help with filing as an international student.",
      icon: FaCalculator,
      href: "/services/taxes",
      partners: 1,
      color: "orange",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Student Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need for a successful international study experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              partners={service.partners}
              color={service.color as never}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
