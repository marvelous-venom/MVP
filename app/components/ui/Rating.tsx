"use client";

import React from "react";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  color?: string;
  showValue?: boolean;
  className?: string;
  readOnly?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  size = "md",
  color = "text-yellow-400",
  showValue = false,
  className = "",
  readOnly = false,
}) => {
  // Size classes for the stars
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  // Round the value to nearest 0.5
  const roundedValue = Math.round(value * 2) / 2;

  // Handle star click
  const handleClick = (newValue: number) => {
    if (readOnly || !onChange) return;
    onChange(newValue);
  };

  // Handle hover events
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseEnter = (starIndex: number) => {
    if (readOnly || !onChange) return;
    // Implementation for hover effect if needed
  };

  // Generate an array of stars
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= max; i++) {
      if (i <= roundedValue) {
        // Full star
        stars.push(
          <StarSolid
            key={i}
            className={`${sizeClasses[size]} ${color} cursor-${
              readOnly ? "default" : "pointer"
            }`}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            aria-hidden="true"
          />
        );
      } else if (i - 0.5 === roundedValue) {
        // Half star (simulated with positioning)
        stars.push(
          <div
            key={i}
            className="relative inline-block"
            onClick={() => handleClick(i)}
          >
            <StarOutline
              className={`${sizeClasses[size]} ${color} cursor-${
                readOnly ? "default" : "pointer"
              }`}
              aria-hidden="true"
            />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <StarSolid
                className={`${sizeClasses[size]} ${color}`}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <StarOutline
            key={i}
            className={`${sizeClasses[size]} ${color} cursor-${
              readOnly ? "default" : "pointer"
            }`}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            aria-hidden="true"
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">{renderStars()}</div>
      {showValue && (
        <span className="ml-2 text-gray-600">{roundedValue.toFixed(1)}</span>
      )}
    </div>
  );
};

export default Rating;
