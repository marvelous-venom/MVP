// src/components/sections/FeaturedResources.tsx
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const FeaturedResources: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: "Banking Guide",
      description:
        "Everything you need to know about setting up a bank account as an international student.",
      image: "/images/resources/banking-guide.jpg",
      href: "/resources/banking-guide",
      category: "Guide",
    },
    {
      id: 2,
      title: "Visa Application Steps",
      description:
        "Step-by-step guide to navigating the student visa application process without stress.",
      image: "/images/resources/visa-guide.jpg",
      href: "/resources/visa-guide",
      category: "Checklist",
    },
    {
      id: 3,
      title: "Housing Options Explained",
      description:
        "Compare on-campus, off-campus, and homestay options to find your perfect student accommodation.",
      image: "/images/resources/housing-guide.jpg",
      href: "/resources/housing-guide",
      category: "Comparison",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            In-depth guides and checklists to help you navigate student life
            abroad.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex-shrink-0 h-48 w-full relative">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-2 py-1 m-2 rounded">
                  {resource.category}
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={resource.href}
                    className="group inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Read full guide
                    <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            View all resources
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
