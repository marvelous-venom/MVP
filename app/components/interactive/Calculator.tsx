"use client";

import React, { useState, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "select" | "slider";
  defaultValue: number | string;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{ value: string | number; label: string }>;
  unit?: string;
  info?: string;
  required?: boolean;
  category?: string;
  multiplier?: number;
  formatValue?: (value: number | string) => string;
}

export interface CalculatorResult {
  id: string;
  label: string;
  value: number;
  displayValue?: string;
  category?: string;
  description?: string;
  color?: string;
}

interface CalculatorProps {
  title?: string;
  description?: string;
  fields: CalculatorField[];
  calculateResults: (
    values: Record<string, number | string>
  ) => CalculatorResult[];
  showResetButton?: boolean;
  showValueChangeImpact?: boolean;
  saveValuesToLocalStorage?: boolean;
  localStorageKey?: string;
  className?: string;
}

const Calculator: React.FC<CalculatorProps> = ({
  title,
  description,
  fields,
  calculateResults,
  showResetButton = true,
  showValueChangeImpact = false,
  saveValuesToLocalStorage = false,
  localStorageKey = "calculator_values",
  className = "",
}) => {
  // State for field values
  const [values, setValues] = useState<Record<string, number | string>>({});
  const [results, setResults] = useState<CalculatorResult[]>([]);
  const [previousResults, setPreviousResults] = useState<CalculatorResult[]>(
    []
  );
  const [isInitialized, setIsInitialized] = useState(false);

  // Grouped fields by category
  const fieldsByCategory = fields.reduce<Record<string, CalculatorField[]>>(
    (acc, field) => {
      const category = field.category || "default";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(field);
      return acc;
    },
    {}
  );

  // Initialize field values
  useEffect(() => {
    let initialValues: Record<string, number | string> = {};

    // First set default values from props
    fields.forEach((field) => {
      initialValues[field.id] = field.defaultValue;
    });

    // If using localStorage, try to load saved values
    if (saveValuesToLocalStorage) {
      try {
        const savedValues = localStorage.getItem(localStorageKey);
        if (savedValues) {
          const parsedValues = JSON.parse(savedValues);
          // Merge saved values with defaults (in case fields were added/removed)
          initialValues = { ...initialValues, ...parsedValues };
        }
      } catch (e) {
        console.error("Error loading calculator values from localStorage", e);
      }
    }

    setValues(initialValues);
    setIsInitialized(true);
  }, [fields, saveValuesToLocalStorage, localStorageKey]);

  // Calculate results when values change
  useEffect(() => {
    if (!isInitialized) return;

    // Store previous results for comparison
    if (showValueChangeImpact) {
      setPreviousResults(results);
    }

    // Calculate new results
    const newResults = calculateResults(values);
    setResults(newResults);

    // Save values to localStorage if enabled
    if (saveValuesToLocalStorage) {
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(values));
      } catch (e) {
        console.error("Error saving calculator values to localStorage", e);
      }
    }
  }, [values, isInitialized, calculateResults, showValueChangeImpact, saveValuesToLocalStorage, localStorageKey, results]);

  // Handle field value changes
  const handleChange = (id: string, newValue: number | string) => {
    setValues((prev) => ({ ...prev, [id]: newValue }));
  };

  // Reset to default values
  const handleReset = () => {
    const defaultValues: Record<string, number | string> = {};
    fields.forEach((field) => {
      defaultValues[field.id] = field.defaultValue;
    });
    setValues(defaultValues);
  };

  // Format currency values
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Calculate value change impact
  const getValueImpact = (
    result: CalculatorResult
  ): { value: number; isPositive: boolean } => {
    const previousResult = previousResults.find((r) => r.id === result.id);
    if (!previousResult) return { value: 0, isPositive: false };

    const difference = result.value - previousResult.value;
    return {
      value: Math.abs(difference),
      isPositive: difference >= 0,
    };
  };

  // Find and group results by category
  const resultsByCategory = results.reduce<Record<string, CalculatorResult[]>>(
    (acc, result) => {
      const category = result.category || "default";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(result);
      return acc;
    },
    {}
  );

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {/* Calculator Header */}
      {(title || description) && (
        <div className="px-6 py-5 border-b border-gray-200">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Fields */}
          <div className="lg:col-span-2 space-y-6">
            {/* Group fields by category */}
            {Object.entries(fieldsByCategory).map(
              ([category, categoryFields]) => (
                <div key={category} className="space-y-4">
                  {category !== "default" && (
                    <h3 className="text-lg font-medium text-gray-900">
                      {category}
                    </h3>
                  )}

                  <div className="space-y-4">
                    {categoryFields.map((field) => (
                      <div key={field.id} className="space-y-1">
                        <div className="flex justify-between">
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-gray-700"
                          >
                            {field.label}
                            {field.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </label>

                          {field.info && (
                            <div className="group relative">
                              <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                              <div className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                                <div className="p-3 text-sm text-gray-600">
                                  {field.info}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {field.type === "number" && (
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="number"
                              id={field.id}
                              name={field.id}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              min={field.min}
                              max={field.max}
                              step={field.step}
                              value={values[field.id] || ""}
                              onChange={(e) =>
                                handleChange(
                                  field.id,
                                  parseFloat(e.target.value) || 0
                                )
                              }
                            />
                            {field.unit && (
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                  {field.unit}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {field.type === "select" && field.options && (
                          <select
                            id={field.id}
                            name={field.id}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={values[field.id] || ""}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                          >
                            {field.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}

                        {field.type === "slider" && (
                          <div className="space-y-2">
                            <input
                              type="range"
                              id={field.id}
                              name={field.id}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              min={field.min}
                              max={field.max}
                              step={field.step}
                              value={values[field.id] || field.min || 0}
                              onChange={(e) =>
                                handleChange(
                                  field.id,
                                  parseFloat(e.target.value)
                                )
                              }
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>
                                {field.formatValue
                                  ? field.formatValue(field.min || 0)
                                  : field.min}
                                {field.unit}
                              </span>
                              <span>
                                {field.formatValue
                                  ? field.formatValue(
                                      values[field.id] as number | string
                                    )
                                  : values[field.id]}
                                {field.unit}
                              </span>
                              <span>
                                {field.formatValue
                                  ? field.formatValue(field.max || 0)
                                  : field.max}
                                {field.unit}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}

            {showResetButton && (
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset to Default
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Results
              </h3>

              {Object.entries(resultsByCategory).map(
                ([category, categoryResults]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    {category !== "default" && (
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        {category}
                      </h4>
                    )}

                    <div className="space-y-4">
                      {categoryResults.map((result) => {
                        const impact = showValueChangeImpact
                          ? getValueImpact(result)
                          : null;

                        return (
                          <div
                            key={result.id}
                            className="bg-white p-4 rounded border"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">
                                {result.label}
                              </span>
                              <div className="text-right">
                                <span
                                  className="block text-xl font-semibold"
                                  style={{ color: result.color }}
                                >
                                  {result.displayValue ||
                                    formatCurrency(result.value)}
                                </span>

                                {impact && previousResults.length > 0 && (
                                  <span
                                    className={`text-xs ${
                                      impact.isPositive
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {impact.isPositive ? "↑" : "↓"}{" "}
                                    {formatCurrency(impact.value)}
                                  </span>
                                )}
                              </div>
                            </div>

                            {result.description && (
                              <p className="mt-1 text-xs text-gray-500">
                                {result.description}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
