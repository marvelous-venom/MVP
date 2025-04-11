// src/app/partners/ClientPartnersList.tsx
"use client";

import { useState } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { ClientCopyButton } from "../ui/ClientCopyButton";

interface Partner {
  name: string;
  description: string;
  link: string;
  category: string;
  promocode?: string;
}

interface ClientPartnersListProps {
  partners: Partner[];
}

export const ClientPartnersList: React.FC<ClientPartnersListProps> = ({
  partners,
}) => {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);
  const categories = [...new Set(partners.map((partner) => partner.category))];

  const filteredPartners = filteredCategory
    ? partners.filter((partner) => partner.category === filteredCategory)
    : partners;

  return (
    <div>
      <div className="mb-12">
        <CategoryFilter
          categories={categories}
          onCategoryChange={setFilteredCategory}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPartners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {partner.name}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {partner.category}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{partner.description}</p>

              {partner.promocode && (
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Promocode:</div>
                  <div className="flex">
                    <div className="bg-gray-100 border border-gray-300 rounded-l-md p-2 px-3 font-mono text-gray-800 flex-grow">
                      {partner.promocode}
                    </div>
                    <ClientCopyButton textToCopy={partner.promocode} />
                  </div>
                </div>
              )}

              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get This Offer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
