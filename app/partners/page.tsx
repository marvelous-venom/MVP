// src/app/partners/page.tsx
import { ClientPartnersList } from "../components/partners/ClientPartnersList";

export default function PartnersPage() {
  const partnerLinks = [
    {
      name: "GRE Magoosh",
      description: "Free GRE practice tests to help prepare for your exams",
      link: "https://gre.magoosh.com/practice_tests/free/?referrer_code=JV3V2Q",
      category: "Test Prep",
      promocode: "JV3V2Q",
    },
    {
      name: "MPOWER Financing",
      description:
        "Student loans for international students without a U.S. cosigner",
      link: "https://app.mpowerfinancing.com/?ref_code=mvp",
      category: "Financing",
      promocode: "MVP",
    },
    {
      name: "Niyo",
      description: "Banking solutions for international students",
      link: "https://my.goniyo.com/onb/v1/?utm_campaign_id=gomVbtKj&utm_source=SanjeevSriram&utm_campaign=SanjeevSriram&utm_adgroup=Mobile_Onboarding&utm_medium=ChannelPartner&utm_utr=&ncid=drEBqHgkPAbslaJYaq79IAqE6xGtJ0K9MPDJy-xbiP8tgbWePCHtwQ%3D%3D",
      category: "Banking",
      promocode: "Special Link",
    },
    {
      name: "ISO Insurance",
      description: "Affordable health insurance for international students",
      link: "https://isoa.org/?ref=MVP",
      category: "Insurance",
      promocode: "MVP",
    },
    {
      name: "Zolve",
      description:
        "Credit cards for international students without U.S. credit history",
      link: "https://products.zolve.com/credit-card/?utm_source=marvelous_sanjeev&utm_medium=insta_reels&utm_campaign=spring_credit_card_influencers&utm_affiliate=Influencer&utm_content=credit_card_pitch&utm_keyword=credit_card&referral_code=MVP",
      category: "Banking",
      promocode: "MVP",
    },
  ];

  return (
    <main>
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Exclusive Partner Offers
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Use these special promocodes and links to get discounts and
              benefits from our trusted partners.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientPartnersList partners={partnerLinks} />
        </div>
      </div>

      {/* Social media section */}
      <div className="bg-gray-50 py-16">{/* ... same as before */}</div>
    </main>
  );
}
