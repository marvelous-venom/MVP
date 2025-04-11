"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className = "",
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const toggleItem = (itemId: string) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      if (allowMultiple) {
        setExpandedItems([...expandedItems, itemId]);
      } else {
        setExpandedItems([itemId]);
      }
    }
  };

  return (
    <div
      className={`divide-y divide-gray-200 border border-gray-200 rounded-md ${className}`}
    >
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);

        return (
          <div key={item.id} className="overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-4 text-left"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
            >
              <span className="text-sm font-medium text-gray-900">
                {item.title}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-4 text-sm text-gray-500">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
