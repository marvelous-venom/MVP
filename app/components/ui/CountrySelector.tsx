// components/ui/CountrySelector.tsx
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CountrySelectorProps {
  label?: string;
  onChange: (country: string) => void;
  className?: string;
}

// This is a simplified version. In a real app, you'd use a comprehensive list of countries
const countries = [
  "Australia",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Singapore",
  "South Korea",
  "Spain",
  "Sweden",
  "United Kingdom",
  "United States",
];

export const CountrySelector = ({
  label,
  onChange,
  className,
}: CountrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = searchTerm
    ? countries.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
    onChange(country);
  };

  return (
    <div className={cn("relative", className)} ref={menuRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        className="flex items-center justify-between w-full h-12 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCountry || "Select a country"}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="max-h-60 overflow-auto py-1">
            {filteredCountries.map((country) => (
              <li key={country}>
                <button
                  type="button"
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedCountry === country
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </button>
              </li>
            ))}
            {filteredCountries.length === 0 && (
              <li className="px-4 py-2 text-sm text-gray-500">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
