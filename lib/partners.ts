// src/lib/partners.ts
import { Partner } from "@/types/service";

const partners: Partner[] = [
  {
    id: "juno",
    name: "Juno",
    logo: "/images/partners/juno.png",
    services: ["banks"],
    description: "Banking designed for international students with no fees.",
    offer: "Free Metal Card",
    url: "https://juno.com",
  },
  {
    id: "adro",
    name: "Adro",
    logo: "/images/partners/adro.png",
    services: ["banks"],
    description: "Student-friendly banking with sign-up bonuses.",
    offer: "$50 Sign-up Bonus",
    url: "https://adro.com",
  },
  {
    id: "cumin-club",
    name: "Cumin Club Pantry",
    logo: "/images/partners/cumin-club.png",
    services: ["food"],
    description: "Authentic food delivery for international students.",
    offer: "20% off first order",
    url: "https://cuminclub.com",
  },
  {
    id: "visible",
    name: "Visible by Verizon",
    logo: "/images/partners/visible.png",
    services: ["sim-cards"],
    description: "Affordable mobile plans with unlimited data.",
    offer: "$10 off first month",
    url: "https://visible.com",
  },
  {
    id: "us-mobile",
    name: "US Mobile",
    logo: "/images/partners/us-mobile.png",
    services: ["sim-cards"],
    description: "Flexible plans for international students.",
    offer: "Free SIM card",
    url: "https://usmobile.com",
  },
  {
    id: "parachut",
    name: "Parachut Project",
    logo: "/images/partners/parachut.png",
    services: ["sim-cards"],
    description: "Global connectivity for travelers and students.",
    offer: "10% student discount",
    url: "https://parachut.com",
  },
  {
    id: "zolve",
    name: "Zolve",
    logo: "/images/partners/zolve.png",
    services: ["loans"],
    description:
      "Financial services for international students without US credit history.",
    offer: "No-fee transfers",
    url: "https://zolve.com",
  },
  {
    id: "kimber-health",
    name: "Kimber Health",
    logo: "/images/partners/kimber-health.png",
    services: ["insurance"],
    description: "Affordable health insurance for international students.",
    offer: "Coverage from $40/month",
    url: "https://kimberhealth.com",
  },
  {
    id: "campus-sims",
    name: "Campus SIMs",
    logo: "/images/partners/campus-sims.png",
    services: ["sim-cards"],
    description: "Mobile plans designed specifically for campus life.",
    offer: "Free delivery to campus",
    url: "https://campussims.com",
  },
  {
    id: "iso",
    name: "ISO Insurance",
    logo: "/images/partners/iso.png",
    services: ["insurance"],
    description: "International student insurance solutions.",
    offer: "15% student discount",
    url: "https://isoa.org",
  },
  {
    id: "lima",
    name: "Lima",
    logo: "/images/partners/lima.png",
    services: ["jobs-visas"],
    description: "Job placement services for international students.",
    offer: "Free resume review",
    url: "https://lima.com",
  },
];

export const getPartners = () => partners;

export const getPartnersByService = (serviceId: string) => {
  return partners.filter((partner) => partner.services.includes(serviceId));
};

export const getPartnerById = (id: string) => {
  return partners.find((partner) => partner.id === id);
};
