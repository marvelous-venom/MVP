// src/lib/services.ts
import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaMobileAlt,
  FaUtensils,
  FaBriefcase,
  FaPlane,
  FaHome,
  FaCalculator,
  FaMoneyBillWave,
  FaPiggyBank,
} from "react-icons/fa";
import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "banks",
    title: "Banks",
    icon: FaUniversity,
    imageUrl: "/images/services/banking-cards.png",
    partnerCount: 2,
    description:
      "Student-friendly bank accounts with no fees and special perks",
    featured: true,
    slug: "/banks",
  },
  {
    id: "sim-cards",
    title: "SIM Card",
    icon: FaMobileAlt,
    imageUrl: "/images/services/sim-card.png",
    partnerCount: 3,
    description: "Affordable mobile plans with international calling",
    featured: true,
    slug: "/sim-cards",
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: FaFileInvoiceDollar,
    imageUrl: "/images/services/insurance.png",
    partnerCount: 2,
    description:
      "Health, travel and rental insurance for international students",
    featured: true,
    slug: "/insurance",
  },
  {
    id: "food",
    title: "Food",
    icon: FaUtensils,
    imageUrl: "/images/services/food.png",
    partnerCount: 1,
    description: "Student discounts on meal deliveries and grocery services",
    featured: true,
    slug: "/food",
  },
  {
    id: "savings",
    title: "Savings",
    icon: FaPiggyBank,
    imageUrl: "/images/services/savings.png",
    partnerCount: 0,
    comingSoon: true,
    description: "Smart savings accounts and investment options",
    featured: true,
    slug: "/savings",
  },
  {
    id: "jobs-visas",
    title: "Jobs & Visas",
    icon: FaBriefcase,
    imageUrl: "/images/services/jobs.png",
    partnerCount: 3,
    description: "Work opportunities and visa assistance",
    featured: true,
    slug: "/jobs",
  },
  {
    id: "travel",
    title: "Travel",
    icon: FaPlane,
    partnerCount: 2,
    description: "Discounted flights and travel deals for students",
    featured: false,
    slug: "/travel",
  },
  {
    id: "housing",
    title: "Housing",
    icon: FaHome,
    partnerCount: 2,
    description: "Student housing options and rental assistance",
    featured: false,
    slug: "/housing",
  },
  {
    id: "taxes",
    title: "Taxes",
    icon: FaCalculator,
    partnerCount: 1,
    description: "Tax filing assistance for international students",
    featured: false,
    slug: "/taxes",
  },
  {
    id: "loans",
    title: "Loans",
    icon: FaMoneyBillWave,
    partnerCount: 1,
    description: "Loan options available without US credit history",
    featured: false,
    slug: "/loans",
  },
];

export const getFeaturedServices = () =>
  services.filter((service) => service.featured);
export const getAllServices = () => services;
export const getServiceById = (id: string) =>
  services.find((service) => service.id === id);
