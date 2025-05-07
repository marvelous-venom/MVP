// src/app/services/[service]/page.tsx
import Link from "next/link";
import { Breadcrumbs } from "@/components/app/Breadcrumbs";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FAQSection } from "@/components/services/FAQSection";
import { ProviderComparison } from "@/components/services/ProviderComparison";
import { TipsGrid } from "@/components/services/TipsGrid";
import { CallToAction } from "@/components/sections/CallToAction";
import { serviceData } from "@/lib/services";
import { Metadata } from "next";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = serviceData[params.service];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} for International Students | StudyGlobal`,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceSlug = params.service;
  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the service you&apos;re looking for.
          </p>
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${serviceSlug}` },
        ]}
      />

      {/* Hero Section */}
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        backgroundColor={service.color}
        imageUrl={service.heroImage}
      />

      {/* Video Section */}
      {service.videoId && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {service.title} Guide
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Watch our comprehensive video guide on{" "}
                {service.videoDescription ||
                  `setting up your ${service.title.toLowerCase()} as an international student`}
                .
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <YouTubeEmbed
                videoId={service.videoId}
                title={`${service.title} Guide for International Students`}
              />
              <p className="text-center mt-4 text-gray-500">
                Subscribe to our{" "}
                <a
                  href="https://www.youtube.com/@StudyGlobal"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Channel
                </a>{" "}
                for more helpful videos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Provider Comparison */}
      {service.providers && service.providers.length > 0 && (
        <ProviderComparison
          title={`Compare ${service.title} Options`}
          description={`We've partnered with these student-friendly ${
            service.providerType || "providers"
          } to offer exclusive benefits.`}
          providers={service.providers}
          serviceType={serviceSlug}
        />
      )}

      {/* Tips Section */}
      {service.tips && service.tips.length > 0 && (
        <TipsGrid
          title={`${service.title} Tips for International Students`}
          description="Make the most of your experience with these helpful tips."
          tips={service.tips}
        />
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection
          title={`${service.title} FAQs`}
          description={`Common questions about ${service.title.toLowerCase()} for international students.`}
          faqs={service.faqs}
          guideLink={service.guideLink}
          guideLinkText={`View Complete ${service.title} Guide`}
        />
      )}

      {/* Call to Action */}
      <CallToAction
        title={`Ready to get started?`}
        subtitle={`Set up your ${
          service.ctaText || service.title.toLowerCase()
        } today.`}
        description={
          service.ctaDescription ||
          `Use our exclusive partner links to receive special student benefits and offers.`
        }
        buttonText={service.ctaButtonText || `Compare ${service.title}`}
        buttonLink={`#compare-${serviceSlug}`}
        backgroundColor={service.color || "bg-blue-600"}
      />
    </main>
  );
}
