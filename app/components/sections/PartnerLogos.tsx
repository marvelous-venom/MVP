// src/components/sections/PartnerLogos.tsx
import Image from "next/image";

export const PartnerLogos: React.FC = () => {
  const partners = [
    { name: "CitiBank", logo: "/images/partners/citibank.svg" },
    { name: "Verizon", logo: "/images/partners/verizon.svg" },
    { name: "Geico", logo: "/images/partners/geico.svg" },
    { name: "WeWork", logo: "/images/partners/wework.svg" },
    { name: "Uber", logo: "/images/partners/uber.svg" },
    { name: "Airbnb", logo: "/images/partners/airbnb.svg" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-600">
            Trusted by leading companies and institutions
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="col-span-1 flex justify-center items-center"
            >
              <div className="h-12 relative w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
