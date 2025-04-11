// src/app/page.tsx
import { Hero } from "./components/sections/Hero";
import { StepGuide } from "./components/sections/StepGuide";
import { Testimonials } from "./components/sections/Testimonials";
import { Stats } from "./components/sections/Stats";
import { PartnerLogos } from "./components/sections/PartnerLogos";
import { Newsletter } from "./components/sections/Newsletter";
import { CallToAction } from "./components/sections/CallToAction";
import { ServiceGrid } from "./components/sections/ServiceGrid";
import { FeaturedResources } from "./components/sections/FeaturedResources";
import { TrustBadges } from "./components/sections/TrustBadges";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <TrustBadges />
      <Stats />
      <ServiceGrid />
      <StepGuide />
      <FeaturedResources />
      <Testimonials />
      <PartnerLogos />
      <Newsletter />
      <CallToAction />
    </main>
  );
}
