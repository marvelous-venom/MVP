// src/types/service.ts
import { IconType } from "react-icons";

export interface Service {
  id: string;
  title: string;
  icon: IconType;
  imageUrl?: string;
  partnerCount: number;
  description: string;
  featured: boolean;
  comingSoon?: boolean;
  slug: string;
}

// src/types/partner.ts
export interface Partner {
  id: string;
  name: string;
  logo: string;
  services: string[];
  description: string;
  offer?: string;
  url: string;
}

export interface FeatureComparison {
  [key: string]: string | boolean | number;
}

export interface Provider {
  name: string;
  logo: string;
  features: FeatureComparison;
  studentDiscount?: string;
  link: string;
}
