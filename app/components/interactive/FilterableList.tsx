/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export interface FilterOption {
  id: string;
  label: string;
  options: { value: string; label: string; count?: number }[];
  multiSelect?: boolean;
  defaultExpanded?: boolean;
}

export interface SortOption {
  id: string;
  label: string;
  defaultDirection?: "asc" | "desc";
}

interface FilterableListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  filterOptions?: FilterOption[];
  sortOptions?: SortOption[];
  keyExtractor: (item: T) => string;
  searchKeys?: (keyof T)[];
  filterFunction?: (
    item: T,
    activeFilters: Record<string, string[]>,
    searchQuery: string,
    searchKeys?: (keyof T)[]
  ) => boolean;
  sortFunction?: (
    items: T[],
    sortBy: string,
    sortDirection: "asc" | "desc"
  ) => T[];
  emptyState?: React.ReactNode;
  loadingState?: React.ReactNode;
  className?: string;
  layout?: "grid" | "list";
  saveFiltersToStorage?: boolean;
  storageKey?: string;
  showResultCount?: boolean;
  perPage?: number;
  showActiveFilters?: boolean;
  isLoading?: boolean;
}

function FilterableList<T>({
  items,
  renderItem,
  filterOptions = [],
  sortOptions = [],
  keyExtractor,
  searchKeys,
  filterFunction,
  sortFunction,
  emptyState,
  loadingState,
  className = "",
  layout = "grid",
  saveFiltersToStorage = false,
  storageKey = "filterableList",
  showResultCount = true,
  perPage,
  showActiveFilters = true,
  isLoading = false,
}: FilterableListProps<T>) {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );
  const [expandedFilters, setExpandedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>(sortOptions[0]?.id || "");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">(
    sortOptions[0]?.defaultDirection || "asc"
  );
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize expanded filters from props
  useEffect(() => {
    const defaultExpanded = filterOptions
      .filter((filter) => filter.defaultExpanded)
      .map((filter) => filter.id);

    setExpandedFilters(defaultExpanded);
  }, [filterOptions]);

  // Initialize state from local storage if enabled
  useEffect(() => {
    if (!saveFiltersToStorage) return;

    try {
      const savedFilters = localStorage.getItem(`${storageKey}_filters`);
      const savedSearch = localStorage.getItem(`${storageKey}_search`);
      const savedSort = localStorage.getItem(`${storageKey}_sort`);

      if (savedFilters) {
        setActiveFilters(JSON.parse(savedFilters));
      }

      if (savedSearch) {
        setSearchQuery(savedSearch);
      }

      if (savedSort) {
        const { by, direction } = JSON.parse(savedSort);
        setSortBy(by);
        setSortDirection(direction);
      }
    } catch (e) {
      console.error("Error loading filters from localStorage", e);
    }
  }, [saveFiltersToStorage, storageKey]);

  // Save filter state to local storage when it changes
  useEffect(() => {
    if (!saveFiltersToStorage) return;

    try {
      localStorage.setItem(
        `${storageKey}_filters`,
        JSON.stringify(activeFilters)
      );
      localStorage.setItem(`${storageKey}_search`, searchQuery);
      localStorage.setItem(
        `${storageKey}_sort`,
        JSON.stringify({ by: sortBy, direction: sortDirection })
      );
    } catch (e) {
      console.error("Error saving filters to localStorage", e);
    }
  }, [
    activeFilters,
    searchQuery,
    sortBy,
    sortDirection,
    saveFiltersToStorage,
    storageKey,
  ]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters, searchQuery, sortBy, sortDirection]);

  // Default filter function if none provided
  const defaultFilterFunction = (
    item: T,
    activeFilters: Record<string, string[]>,
    searchQuery: string,
    searchKeys: (keyof T)[] = []
  ): boolean => {
    // First check if it matches all active filters
    for (const [filterId, selectedValues] of Object.entries(activeFilters)) {
      if (selectedValues.length === 0) continue; // Skip if no options selected for this filter

      // Find the filter definition to check if it's a property of the item
      const filterDef = filterOptions.find((f) => f.id === filterId);
      if (!filterDef) continue;

      // Check if the item has the property and it matches any of the selected values
      const itemValue = (item as any)[filterId];

      // Handle array values (items that have multiple values for a single filter)
      if (Array.isArray(itemValue)) {
        const hasMatch = itemValue.some((val) =>
          selectedValues.includes(String(val))
        );
        if (!hasMatch) return false;
      }
      // Handle single values
      else if (!selectedValues.includes(String(itemValue))) {
        return false;
      }
    }

    // Then check if it matches the search query
    if (searchQuery && searchKeys && searchKeys.length > 0) {
      const normalizedQuery = searchQuery.toLowerCase();

      const matchesSearch = searchKeys.some((key) => {
        const value = (item as never)[key];
        if (typeof value === "string" || typeof value === "number") {
          return String(value).toLowerCase().includes(normalizedQuery);
        }
        return false;
      });

      if (!matchesSearch) return false;
    }

    return true;
  };

  // Default sort function if none provided
  const defaultSortFunction = (
    items: T[],
    sortBy: string,
    sortDirection: "asc" | "desc"
  ): T[] => {
    if (!sortBy) return items;

    return [...items].sort((a, b) => {
      const aValue = (a as any)[sortBy];
      const bValue = (b as any)[sortBy];

      // Handle undefined values
      if (aValue === undefined && bValue === undefined) return 0;
      if (aValue === undefined) return sortDirection === "asc" ? -1 : 1;
      if (bValue === undefined) return sortDirection === "asc" ? 1 : -1;

      // Handle string values
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      // Handle numeric values
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });
  };

  // Filter and sort items
  const filteredItems = useMemo(() => {
    // First filter the items
    const filtered = items.filter((item) =>
      filterFunction
        ? filterFunction(item, activeFilters, searchQuery, searchKeys)
        : defaultFilterFunction(item, activeFilters, searchQuery, searchKeys)
    );

    // Then sort the filtered items
    if (sortBy) {
      return sortFunction
        ? sortFunction(filtered, sortBy, sortDirection)
        : defaultSortFunction(filtered, sortBy, sortDirection);
    }

    return filtered;
  }, [
    items,
    activeFilters,
    searchQuery,
    sortBy,
    sortDirection,
    filterFunction,
    sortFunction,
    searchKeys,
  ]);

  // Paginate items if perPage is specified
  const paginatedItems = useMemo(() => {
    if (!perPage) return filteredItems;

    const startIndex = (currentPage - 1) * perPage;
    return filteredItems.slice(startIndex, startIndex + perPage);
  }, [filteredItems, currentPage, perPage]);

  // Calculate total pages for pagination
  const totalPages = useMemo(() => {
    if (!perPage) return 1;
    return Math.max(1, Math.ceil(filteredItems.length / perPage));
  }, [filteredItems, perPage]);

  // Toggle a filter value
  const toggleFilter = (filterId: string, value: string) => {
    setActiveFilters((prev) => {
      const currentValues = prev[filterId] || [];
      const filterDef = filterOptions.find((f) => f.id === filterId);

      // For multi-select filters, toggle the value
      if (filterDef?.multiSelect) {
        return {
          ...prev,
          [filterId]: currentValues.includes(value)
            ? currentValues.filter((v) => v !== value)
            : [...currentValues, value],
        };
      }

      // For single-select filters, replace the value or clear if it's the same
      return {
        ...prev,
        [filterId]: currentValues.includes(value) ? [] : [value],
      };
    });
  };

  // Toggle filter expansion
  const toggleFilterExpansion = (filterId: string) => {
    setExpandedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Toggle sort direction or change sort field
  const handleSortChange = (sortId: string) => {
    if (sortId === sortBy) {
      // Toggle direction if the same field
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      // Set new field with default direction
      setSortBy(sortId);
      const sortOption = sortOptions.find((opt) => opt.id === sortId);
      setSortDirection(sortOption?.defaultDirection || "asc");
    }
  };

  // Clear all filters and search
  const clearAllFilters = () => {
    setActiveFilters({});
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Remove a specific filter
  const removeFilter = (filterId: string, value: string) => {
    setActiveFilters((prev) => {
      const currentValues = [...(prev[filterId] || [])];
      return {
        ...prev,
        [filterId]: currentValues.filter((v) => v !== value),
      };
    });
  };

  // Check if any filters are active
  const hasActiveFilters =
    Object.values(activeFilters).some((values) => values.length > 0) ||
    !!searchQuery;

  // Get label for a filter value
  const getFilterValueLabel = (filterId: string, value: string): string => {
    const filter = filterOptions.find((f) => f.id === filterId);
    if (!filter) return value;

    const option = filter.options.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  // Count active filters for mobile badge
  const activeFilterCount = Object.values(activeFilters).reduce(
    (count, values) => count + values.length,
    0
  );

  // Pagination controls
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className={`${className}`}>
      {/* Filters and Search - Desktop */}
      <div className="hidden md:flex justify-between items-center mb-6">
        <div className="flex-1 flex items-center">
          {/* Search */}
          <div className="relative rounded-md shadow-sm max-w-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSearchQuery("")}
              >
                <XMarkIcon
                  className="h-5 w-5 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          {/* Active filters */}
          {showActiveFilters && hasActiveFilters && (
            <div className="ml-4 flex flex-wrap items-center gap-2">
              {Object.entries(activeFilters).map(([filterId, values]) =>
                values.map((value) => (
                  <span
                    key={`${filterId}-${value}`}
                    className="inline-flex items-center rounded-full bg-gray-100 py-1 pl-2.5 pr-1 text-sm font-medium text-gray-800"
                  >
                    {getFilterValueLabel(filterId, value)}
                    <button
                      type="button"
                      onClick={() => removeFilter(filterId, value)}
                      className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
                    >
                      <span className="sr-only">Remove filter</span>
                      <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </span>
                ))
              )}
              {searchQuery && (
                <span className="inline-flex items-center rounded-full bg-gray-100 py-1 pl-2.5 pr-1 text-sm font-medium text-gray-800">
                  Search: {searchQuery}
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
                  >
                    <span className="sr-only">Remove search</span>
                    <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Sort options */}
        {sortOptions.length > 0 && (
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-2">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() =>
                setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="ml-2 p-1 rounded-md hover:bg-gray-100"
            >
              <span className="sr-only">
                Sort {sortDirection === "asc" ? "descending" : "ascending"}
              </span>
              {sortDirection === "asc" ? "↑" : "↓"}
            </button>
          </div>
        )}
      </div>

      {/* Filters and Search - Mobile */}
      <div className="md:hidden space-y-4 mb-6">
        {/* Search */}
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setSearchQuery("")}
            >
              <XMarkIcon
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {/* Filter and Sort buttons */}
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setShowMobileFilters(true)}
            className="flex-1 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-gray-400" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1.5 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                {activeFilterCount}
              </span>
            )}
          </button>

          {sortOptions.length > 0 && (
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="flex-1 rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  Sort: {option.label} {sortDirection === "asc" ? "↑" : "↓"}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Active filters */}
        {showActiveFilters && hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2">
            {Object.entries(activeFilters).map(([filterId, values]) =>
              values.map((value) => (
                <span
                  key={`${filterId}-${value}`}
                  className="inline-flex items-center rounded-full bg-gray-100 py-1 pl-2.5 pr-1 text-sm font-medium text-gray-800"
                >
                  {getFilterValueLabel(filterId, value)}
                  <button
                    type="button"
                    onClick={() => removeFilter(filterId, value)}
                    className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
                  >
                    <span className="sr-only">Remove filter</span>
                    <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                </span>
              ))
            )}
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Mobile filter dialog */}
      {showMobileFilters && (
        <div className="relative z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <div className="mt-4 border-t border-gray-200">
                {filterOptions.map((filter) => (
                  <div
                    key={filter.id}
                    className="border-b border-gray-200 py-6 px-4"
                  >
                    <h3 className="flow-root text-base font-medium text-gray-900">
                      <button
                        onClick={() => toggleFilterExpansion(filter.id)}
                        className="flex w-full items-center justify-between bg-white py-1 text-left text-gray-400 hover:text-gray-500"
                      >
                        <span className="font-medium text-gray-900">
                          {filter.label}
                        </span>
                        <span className="ml-6 flex items-center">
                          {expandedFilters.includes(filter.id) ? "-" : "+"}
                        </span>
                      </button>
                    </h3>
                    {expandedFilters.includes(filter.id) && (
                      <div className="pt-4 space-y-2">
                        {filter.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${filter.id}-${option.value}`}
                              name={`${filter.id}[]`}
                              type={filter.multiSelect ? "checkbox" : "radio"}
                              checked={(
                                activeFilters[filter.id] || []
                              ).includes(option.value)}
                              onChange={() =>
                                toggleFilter(filter.id, option.value)
                              }
                              className={
                                filter.multiSelect
                                  ? "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  : "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              }
                            />
                            <label
                              htmlFor={`filter-${filter.id}-${option.value}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                              {option.count !== undefined && (
                                <span className="ml-1 text-gray-400">
                                  ({option.count})
                                </span>
                              )}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Apply button */}
              <div className="mt-auto px-4">
                <button
                  type="button"
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result count */}
      {showResultCount && (
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredItems.length} results
        </div>
      )}

      {/* Loading state */}
      {isLoading && loadingState ? (
        loadingState
      ) : isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : null}

      {/* No results */}
      {!isLoading && filteredItems.length === 0 && (
        <div className="py-12">
          {emptyState || (
            <div className="text-center">
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                No results found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Results - Grid Layout */}
      {!isLoading && layout === "grid" && filteredItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item) => (
            <div key={keyExtractor(item)} className="h-full">
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}

      {/* Results - List Layout */}
      {!isLoading && layout === "list" && filteredItems.length > 0 && (
        <div className="space-y-4">
          {paginatedItems.map((item) => (
            <div key={keyExtractor(item)}>{renderItem(item)}</div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {perPage && totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * perPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * perPage, filteredItems.length)}
                </span>{" "}
                of <span className="font-medium">{filteredItems.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
                    currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const isActive = pageNumber === currentPage;

                  // Show current page, first, last, and pages around current
                  const showPageNumber =
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    Math.abs(pageNumber - currentPage) <= 1;

                  // Show ellipsis if needed
                  if (!showPageNumber) {
                    if (pageNumber === 2 || pageNumber === totalPages - 1) {
                      return (
                        <span
                          key={`ellipsis-${pageNumber}`}
                          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                        isActive
                          ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                          : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterableList;
