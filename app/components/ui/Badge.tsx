"use client";

import React from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
  rounded?: boolean;
  dot?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  rounded = false,
  dot = false,
}) => {
  // Mapping variant to styles
  const variantStyles = {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    light: "bg-gray-50 text-gray-600",
    dark: "bg-gray-700 text-gray-100",
  };

  // Mapping size to padding and text size
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  // Rounded styles
  const roundedStyle = rounded ? "rounded-full" : "rounded";

  // Dot indicator
  const dotElement = dot ? (
    <span
      className={`inline-block w-2 h-2 rounded-full mr-1.5 bg-current`}
    ></span>
  ) : null;

  return (
    <span
      className={`inline-flex items-center ${roundedStyle} ${variantStyles[variant]} ${sizeStyles[size]} font-medium ${className}`}
    >
      {dotElement}
      {children}
    </span>
  );
};

export default Badge;
