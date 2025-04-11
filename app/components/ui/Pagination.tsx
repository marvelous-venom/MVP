"use client";

import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  siblingCount?: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  siblingCount = 1,
  className = "",
}) => {
  // Generate the range of page numbers to display
  const generatePageNumbers = () => {
    // Always show the first and last page
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Define the range of pages to show around the current page
    const leftSiblingIndex = Math.max(
      currentPage - siblingCount,
      firstPageIndex
    );
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      lastPageIndex
    );

    // Determine if we need to show ellipses
    const shouldShowLeftDots = leftSiblingIndex > firstPageIndex + 1;
    const shouldShowRightDots = rightSiblingIndex < lastPageIndex - 1;

    // Initialize the range array
    const pageNumbers: (number | string)[] = [];

    // Always add page 1
    if (firstPageIndex < leftSiblingIndex) {
      pageNumbers.push(firstPageIndex);
      // Add left ellipses if needed
      if (shouldShowLeftDots) {
        pageNumbers.push("...");
      }
    }

    // Add the range of pages around current page
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pageNumbers.push(i);
    }

    // Add right ellipses and last page if needed
    if (rightSiblingIndex < lastPageIndex) {
      if (shouldShowRightDots) {
        pageNumbers.push("...");
      }
      pageNumbers.push(lastPageIndex);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav
      className={`flex items-center justify-between ${className}`}
      aria-label="Pagination"
    >
      <div className="flex-1 flex justify-between sm:justify-end">
        {/* First page button */}
        {showFirstLast && (
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-2 py-2 mr-2 text-sm font-medium rounded-md ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="sr-only">First Page</span>
            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        {/* Previous page button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 mr-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Page number buttons */}
        <div className="hidden md:flex">
          {pageNumbers.map((pageNumber, index) => {
            if (pageNumber === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={`page-${pageNumber}`}
                onClick={() => onPageChange(pageNumber as number)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                  pageNumber === currentPage
                    ? "bg-indigo-50 text-indigo-600 z-10"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Mobile page indicator */}
        <span className="md:hidden text-sm text-gray-700 px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next page button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 ml-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Last page button */}
        {showFirstLast && (
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center px-2 py-2 ml-2 text-sm font-medium rounded-md ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="sr-only">Last Page</span>
            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
