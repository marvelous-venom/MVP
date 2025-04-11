// src/app/banks/page.tsx
import Image from "next/image";
import { ServiceNavigation } from "../components/layout/ServiceNavigation";
import { ComparisonTable } from "../components/services/ComparisonTable";
import { FaCheck } from "react-icons/fa";

const bankProviders = [
  {
    name: "Juno",
    logo: "/images/partners/juno.png",
    features: {
      monthlyFee: "$0",
      minBalance: "$0",
      foreignTransactionFee: "0%",
      atmFee: "$0 (5 free/month)",
      creditWithoutSSN: true,
      mobileBanking: true,
    },
    studentDiscount: "Free Metal Card",
    link: "/banks/juno",
  },
  {
    name: "Adro",
    logo: "/images/partners/adro.png",
    features: {
      monthlyFee: "$0",
      minBalance: "$0",
      foreignTransactionFee: "1%",
      atmFee: "$0 (3 free/month)",
      creditWithoutSSN: true,
      mobileBanking: true,
    },
    studentDiscount: "$50 Sign-up Bonus",
    link: "/banks/adro",
  },
];

const featureLabels = {
  monthlyFee: "Monthly Fee",
  minBalance: "Minimum Balance",
  foreignTransactionFee: "Foreign Transaction Fee",
  atmFee: "ATM Fee",
  creditWithoutSSN: "Credit Without SSN",
  mobileBanking: "Mobile Banking",
};

export default function BanksPage() {
  return (
    <main>
      <ServiceNavigation />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 pr-8">
              <div className="text-blue-600 mb-2">BANKS</div>
              <h1 className="text-4xl font-bold mb-6">
                Banking Made for International Students
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Did you know most international students end up paying $50+ per
                year in hidden fees?! Our partners are absolutely free!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>No monthly fees or minimum balance requirements</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Get a debit card that works internationally</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Apply for credit cards without an SSN</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Free incoming wire transfers for tuition payments</span>
                </li>
              </ul>

              <a
                href="#compare"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Compare Banks
              </a>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/services/banking-cards.png"
                  alt="Banking cards"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Compare Banking Options</h2>
          <ComparisonTable
            category="Banks"
            providers={bankProviders}
            featureLabels={featureLabels}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            How to Open a Bank Account
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Bank</h3>
              <p className="text-gray-600">
                Compare options above and select the bank that best fits your
                needs as an international student.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Prepare Documents</h3>
              <p className="text-gray-600">
                Have your passport, I-20, student ID, and proof of address ready
                for application.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Complete the online application through our referral links to
                receive exclusive student bonuses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
