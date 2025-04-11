// src/app/services/banking/page.tsx
import { ServiceNavigation } from "../../layout/ServiceNavigation";
import { FeatureSection } from "../../sections/FeatureSection";
import { CallToAction } from "../../sections/CallToAction";
import { ComparisonTable } from "../../services/ComparisonTable";

export default function BankingPage() {
  const bankingFeatures = [
    {
      name: "No Monthly Fees",
      description:
        "Avoid unnecessary charges with student-friendly accounts that have zero monthly maintenance fees.",
    },
    {
      name: "No Minimum Balance",
      description:
        "Keep your account active without worrying about maintaining a minimum balance requirement.",
    },
    {
      name: "International Wire Transfers",
      description:
        "Easily receive money from home with reduced or waived fees on incoming international transfers.",
    },
    {
      name: "Mobile Banking",
      description:
        "Manage your finances on the go with powerful mobile apps in multiple languages.",
    },
  ];

  const bankProviders = [
    {
      name: "Student Bank",
      logo: "/images/banks/student-bank.svg",
      features: {
        monthlyFee: "$0",
        minimumBalance: "$0",
        incomingWireTransfer: "$0",
        debitCard: true,
        creditCard: true,
        mobileBanking: true,
      },
      studentDiscount: "Free metal card",
      link: "/partners/student-bank",
    },
    {
      name: "Global Finance",
      logo: "/images/banks/global-finance.svg",
      features: {
        monthlyFee: "$0",
        minimumBalance: "$0",
        incomingWireTransfer: "$15",
        debitCard: true,
        creditCard: true,
        mobileBanking: true,
      },
      studentDiscount: "$50 welcome bonus",
      link: "/partners/global-finance",
    },
    {
      name: "University Credit Union",
      logo: "/images/banks/university-credit.svg",
      features: {
        monthlyFee: "$0",
        minimumBalance: "$100",
        incomingWireTransfer: "$10",
        debitCard: true,
        creditCard: false,
        mobileBanking: true,
      },
      studentDiscount: "1% cashback on books",
      link: "/partners/university-credit",
    },
  ];

  return (
    <main>
      <div className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Banking Services
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
              Student-friendly banking solutions with no hidden fees, easy
              international transfers, and exclusive student perks.
            </p>
          </div>
        </div>
      </div>

      <ServiceNavigation />

      <FeatureSection
        title="Banking Made for International Students"
        subtitle="SIMPLIFIED BANKING"
        description="Most international students end up paying $50+ per year in hidden fees. Our banking partners offer accounts designed specifically for international students with features that make managing your finances abroad easier."
        features={bankingFeatures}
        image="/images/services/banking-detail.jpg"
        imageAlt="Student using mobile banking"
      />

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compare Banking Options
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We&apos;ve partnered with banks that understand the unique needs
              of international students. Compare their features below.
            </p>
          </div>

          <div className="mt-12">
            <ComparisonTable
              providers={bankProviders}
              category="Banking"
              featureLabels={{
                monthlyFee: "Monthly Fee",
                minimumBalance: "Minimum Balance",
                incomingWireTransfer: "Incoming Wire Fee",
                debitCard: "Debit Card",
                creditCard: "Credit Card",
                mobileBanking: "Mobile Banking",
              }}
            />
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How to Open a Bank Account
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Follow these simple steps to set up your student bank account.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4 mx-auto">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Choose Your Bank
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    Compare services and select the bank that best meets your
                    needs as an international student.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4 mx-auto">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Prepare Documents
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    Gather your passport, student visa, enrollment confirmation,
                    and local address proof.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4 mx-auto">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Apply Online
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    Apply through our exclusive links to receive student
                    benefits and expedited processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
