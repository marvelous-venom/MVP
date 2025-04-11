// src/components/sections/FeatureSection.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface Feature {
  name: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  image,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
            reverse ? "lg:grid-flow-row-dense" : ""
          }`}
        >
          <div className={`${reverse ? "lg:col-start-2" : ""}`}>
            <div>
              <h4 className="text-base font-semibold text-primary-600 uppercase tracking-wide">
                {subtitle}
              </h4>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
            </div>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex">
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-10 lg:mt-0 ${reverse ? "lg:col-start-1" : ""}`}>
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden lg:max-w-md">
              <Image
                src={image}
                alt={imageAlt}
                width={512}
                height={384}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
