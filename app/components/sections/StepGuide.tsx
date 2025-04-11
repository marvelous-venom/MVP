// src/components/sections/StepGuide.tsx
import { FaMobileAlt, FaUniversity, FaFileInvoiceDollar } from "react-icons/fa";

export const StepGuide: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Get a SIM Card",
      description:
        "Stay connected from day one with affordable mobile data and calling plans.",
      icon: FaMobileAlt,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Set Up Bank Account",
      description:
        "Free incoming wire transfers, no minimum balance, and student-friendly features.",
      icon: FaUniversity,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "Get Health Insurance",
      description:
        "Comprehensive coverage at student rates to keep you protected while studying.",
      icon: FaFileInvoiceDollar,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">
            Getting Started
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Three Simple Steps
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Not sure where to begin? Follow our recommended setup process for a
            smooth transition.
          </p>
        </div>

        <div className="mt-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <div key={step.id} className="mt-10 lg:mt-0">
                <div
                  className={`flow-root rounded-lg px-6 pb-8 ${
                    step.id % 2 === 0
                      ? "bg-gray-50"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  <div className="-mt-6">
                    <div>
                      <span
                        className={`inline-flex items-center justify-center p-3 rounded-md shadow-lg ${step.color}`}
                      >
                        <step.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/getting-started"
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              View Full Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
