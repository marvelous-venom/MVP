"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";

interface BreadcrumbItem {
  label: string;
  href: string;
  current: boolean;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  customItems,
  showHome = true,
  className = "",
}) => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    if (customItems) {
      setBreadcrumbs(customItems);
      return;
    }

    const linkPath = pathname.split("/");
    linkPath.shift(); // Remove first empty element

    const pathArray = linkPath.map((path, i) => {
      const href = `/${linkPath.slice(0, i + 1).join("/")}`;
      const label = path
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        href,
        label,
        current: i === linkPath.length - 1,
      };
    });

    // Add home item if needed
    if (showHome) {
      pathArray.unshift({
        href: "/",
        label: "Home",
        current: pathname === "/",
      });
    }

    setBreadcrumbs(pathArray);
  }, [pathname, customItems, showHome]);

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <div className={index > 0 ? "ml-2" : ""}>
                {index === 0 && showHome ? (
                  // Home icon for first item if it's home
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
                    aria-current={breadcrumb.current ? "page" : undefined}
                  >
                    <HomeIcon className="flex-shrink-0 h-4 w-4 mr-1" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : breadcrumb.current ? (
                  // Current page (not linked)
                  <span className="text-gray-700 font-medium text-sm">
                    {breadcrumb.label}
                  </span>
                ) : (
                  // Other pages (linked)
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
