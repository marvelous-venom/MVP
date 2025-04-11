"use client";

import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export interface PricingFeature {
  name: string;
  included: boolean | string;
}

export interface PricingTier {
  name: string;
  description?: string;
  price: {
    monthly?: number | string;
    annually?: number | string;
    oneTime?: number | string;
    custom?: string;
  };
  currency?: string;
  features: PricingFeature[];
  cta?: {
    text: string;
    href: string;
  };
  highlight?: boolean;
  badge?: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  billingPeriod?: "monthly" | "annually" | "one-time";
  showToggle?: boolean;
  className?: string;
  compactOnMobile?: boolean;
  showComparison?: boolean;
}

const PricingTable: React.FC<PricingTableProps> = ({
  tiers,
  billingPeriod = "monthly",
  showToggle = true,
  className = "",
  compactOnMobile = true,
  showComparison = true,
}) => {
  const [currentBillingPeriod, setCurrentBillingPeriod] =
    React.useState(billingPeriod);

  // Get all unique feature names across all tiers
  const allFeatures = React.useMemo(() => {
    if (!showComparison) return [];

    const featureSet = new Set<string>();
    tiers.forEach((tier) => {
      tier.features.forEach((feature) => {
        featureSet.add(feature.name);
      });
    });
    return Array.from(featureSet);
  }, [tiers, showComparison]);

  // Get price based on the current billing period
  const getPrice = (tier: PricingTier) => {
    const { price, currency = "$" } = tier;

    if (currentBillingPeriod === "monthly" && price.monthly) {
      return `${currency}${price.monthly}`;
    } else if (currentBillingPeriod === "annually" && price.annually) {
      return `${currency}${price.annually}`;
    } else if (currentBillingPeriod === "one-time" && price.oneTime) {
      return `${currency}${price.oneTime}`;
    } else if (price.custom) {
      return price.custom;
    }

    return "N/A";
  };

  // Get price period suffix
  const getPriceSuffix = () => {
    if (currentBillingPeriod === "monthly") {
      return "/month";
    } else if (currentBillingPeriod === "annually") {
      return "/year";
    }
    return "";
  };

  // Check if a tier includes a feature
  const getFeatureValue = (tier: PricingTier, featureName: string) => {
    const feature = tier.features.find((f) => f.name === featureName);
    if (!feature) return false;
    return feature.included;
  };

  // Render a value cell for feature
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckIcon className="h-5 w-5 text-green-500" />
      ) : (
        <XMarkIcon className="h-5 w-5 text-gray-400" />
      );
    }
    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <div className={className}>
      {/* Billing toggle */}
      {showToggle &&
        tiers.some((tier) => tier.price.monthly) &&
        tiers.some((tier) => tier.price.annually) && (
          <div className="flex justify-center mb-8">
            <div className="relative bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`py-2 px-4 text-sm font-medium rounded-md ${
                  currentBillingPeriod === "monthly"
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setCurrentBillingPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium rounded-md ${
                  currentBillingPeriod === "annually"
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setCurrentBillingPeriod("annually")}
              >
                Annually{" "}
                <span className="text-green-500 font-medium">Save 20%</span>
              </button>
            </div>
          </div>
        )}

      {/* Pricing cards - Desktop view */}
      <div className={`hidden md:grid md:grid-cols-${tiers.length} md:gap-x-4`}>
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-lg shadow-sm divide-y divide-gray-200 ${
              tier.highlight
                ? "border-2 border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50"
                : "border border-gray-200"
            }`}
          >
            {/* Card header with tier name, price */}
            <div className="p-6">
              {tier.badge && (
                <p className="inline-flex rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 mb-3">
                  {tier.badge}
                </p>
              )}
              <h2 className="text-lg font-medium text-gray-900">{tier.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
              <p className="mt-4">
                <span className="text-3xl font-bold text-gray-900">
                  {getPrice(tier)}
                </span>
                {currentBillingPeriod !== "one-time" && (
                  <span className="text-sm font-medium text-gray-500">
                    {getPriceSuffix()}
                  </span>
                )}
              </p>
              {tier.cta && (
                <a
                  href={tier.cta.href}
                  className={`mt-6 block w-full rounded-md py-2 px-4 text-center text-sm font-medium ${
                    tier.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                  }`}
                >
                  {tier.cta.text}
                </a>
              )}
            </div>

            {/* Feature list */}
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What&apos;s included
              </h3>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    <div className="flex-shrink-0">
                      {typeof feature.included === "boolean" ? (
                        feature.included ? (
                          <CheckIcon className="h-5 w-5 text-green-500" />
                        ) : (
                          <XMarkIcon className="h-5 w-5 text-gray-400" />
                        )
                      ) : (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {feature.name}
                      {typeof feature.included === "string" &&
                        feature.included !== "true" && (
                          <span className="text-gray-500">
                            {" - "}
                            {feature.included}
                          </span>
                        )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing table - Comparison view (Mobile) */}
      {compactOnMobile && (
        <div className="md:hidden rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {tiers.map((tier, tierIndex) => (
            <div
              key={tier.name}
              className={tierIndex > 0 ? "border-t border-gray-200" : ""}
            >
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {getPrice(tier)}
                    <span className="text-xs text-gray-500">
                      {getPriceSuffix()}
                    </span>
                  </p>
                </div>
                {tier.cta && (
                  <a
                    href={tier.cta.href}
                    className={`mt-4 block w-full rounded-md py-2 px-4 text-center text-xs font-medium ${
                      tier.highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                    }`}
                  >
                    {tier.cta.text}
                  </a>
                )}
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      <div className="flex-shrink-0">
                        {typeof feature.included === "boolean" ? (
                          feature.included ? (
                            <CheckIcon className="h-4 w-4 text-green-500" />
                          ) : (
                            <XMarkIcon className="h-4 w-4 text-gray-400" />
                          )
                        ) : (
                          <CheckIcon className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <p className="ml-3 text-xs text-gray-700">
                        {feature.name}
                        {typeof feature.included === "string" &&
                          feature.included !== "true" && (
                            <span className="text-gray-500">
                              {" - "}
                              {feature.included}
                            </span>
                          )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Feature comparison table - optional */}
      {showComparison && allFeatures.length > 0 && (
        <div className="mt-12 hidden md:block">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Feature Comparison
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-3 pl-4 pr-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="px-3 py-3 text-center text-sm font-medium text-gray-900 border-b border-gray-200"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allFeatures.map((featureName) => (
                <tr key={featureName}>
                  <td className="py-3 pl-4 pr-3 text-sm text-gray-900 border-b border-gray-200">
                    {featureName}
                  </td>
                  {tiers.map((tier) => (
                    <td
                      key={`${tier.name}-${featureName}`}
                      className="px-3 py-3 text-center text-sm border-b border-gray-200"
                    >
                      {renderFeatureValue(getFeatureValue(tier, featureName))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
