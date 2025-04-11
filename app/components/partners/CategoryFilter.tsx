// src/components/partners/CategoryFilter.tsx
"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      <li>
        <button
          className={`px-4 py-2 rounded-full font-medium ${
            activeCategory === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};
