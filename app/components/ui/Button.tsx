// src/components/ui/Button.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  color?: "blue" | "orange" | "green";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  color = "blue",
  size = "md",
  href,
  onClick,
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button",
}) => {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Color and variant classes
  const variantColorClasses = {
    primary: {
      blue: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      orange:
        "bg-orange-600 text-white hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
      green:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
    },
    secondary: {
      blue: "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",
      orange:
        "bg-orange-100 text-orange-800 hover:bg-orange-200 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400",
      green:
        "bg-green-100 text-green-800 hover:bg-green-200 focus:ring-2 focus:ring-offset-2 focus:ring-green-400",
    },
    outline: {
      blue: "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      orange:
        "bg-white text-orange-700 border border-orange-600 hover:bg-orange-50 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
      green:
        "bg-white text-green-700 border border-green-600 hover:bg-green-50 focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
    },
    text: {
      blue: "bg-transparent text-blue-600 hover:text-blue-700 hover:underline focus:ring-0",
      orange:
        "bg-transparent text-orange-600 hover:text-orange-700 hover:underline focus:ring-0",
      green:
        "bg-transparent text-green-600 hover:text-green-700 hover:underline focus:ring-0",
    },
  };

  // Disabled classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Full width classes
  const widthClasses = fullWidth ? "w-full" : "";

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantColorClasses[variant][color]} ${disabledClasses} ${widthClasses} ${className}`;

  // If button has an href, render as a link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
