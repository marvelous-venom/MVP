// src/components/sections/PartnerShowcase.tsx
import Image from "next/image";
import { getPartners } from "@/lib/partners";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

export const PartnerShowcase: React.FC = () => {
  const partners = getPartners();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map(
            (partner: {
              id: Key | null | undefined;
              logo: string | StaticImport;
              name: string;
            }) => (
              <div
                key={partner.id}
                className="p-4 flex items-center justify-center border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 120px"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
