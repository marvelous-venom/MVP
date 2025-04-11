"use client";

import React, { useState } from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  variant?: "default" | "pills" | "underlined";
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  onChange,
  variant = "default",
  className = "",
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : "")
  );

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  // Tab header style variants
  const tabHeaderStyles = {
    default: {
      base: "flex space-x-1 border-b border-gray-200",
      tab: {
        active:
          "bg-white border-gray-200 text-indigo-600 border-b-2 border-indigo-500",
        inactive:
          "bg-white text-gray-500 hover:text-gray-700 hover:border-gray-300",
        disabled: "bg-white text-gray-300 cursor-not-allowed",
        base: "py-3 px-4 text-sm font-medium text-center",
      },
    },
    pills: {
      base: "flex space-x-1",
      tab: {
        active: "bg-indigo-100 text-indigo-700",
        inactive: "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
        disabled: "text-gray-300 cursor-not-allowed",
        base: "py-2 px-4 text-sm font-medium text-center rounded-md",
      },
    },
    underlined: {
      base: "flex space-x-8 border-b border-gray-200",
      tab: {
        active: "text-indigo-600 border-b-2 border-indigo-500",
        inactive: "text-gray-500 hover:text-gray-700 hover:border-gray-300",
        disabled: "text-gray-300 cursor-not-allowed",
        base: "py-3 px-1 text-sm font-medium text-center border-b-2 border-transparent",
      },
    },
  };

  const styles = tabHeaderStyles[variant];

  return (
    <div className={className}>
      {/* Tab headers */}
      <div className={styles.base}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            className={`${styles.tab.base} ${
              tab.id === activeTabId
                ? styles.tab.active
                : tab.disabled
                ? styles.tab.disabled
                : styles.tab.inactive
            }`}
            disabled={tab.disabled}
            aria-selected={tab.id === activeTabId}
            role="tab"
            aria-controls={`tabpanel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={tab.id === activeTabId ? "block" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
