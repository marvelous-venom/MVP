"use client";

import React, { useState, useEffect } from "react";
import {
  CheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export interface ChecklistItemProps {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  onToggle?: (id: string, completed: boolean) => void;
  dueDate?: Date;
  priority?: "low" | "medium" | "high";
  category?: string;
  link?: {
    text: string;
    url: string;
  };
  className?: string;
  saveToLocalStorage?: boolean;
  localStorageKey?: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  id,
  title,
  description,
  completed: propCompleted = false,
  onToggle,
  dueDate,
  priority = "medium",
  category,
  link,
  className = "",
  saveToLocalStorage = false,
  localStorageKey = "studyglobal_checklist",
}) => {
  const [isCompleted, setIsCompleted] = useState(propCompleted);
  const [showDetails, setShowDetails] = useState(false);

  // Priority styling
  const priorityStyles = {
    low: "bg-green-50 border-green-200",
    medium: "bg-blue-50 border-blue-200",
    high: "bg-orange-50 border-orange-200",
  };

  const priorityTextStyles = {
    low: "text-green-700",
    medium: "text-blue-700",
    high: "text-orange-700",
  };

  const priorityBadgeStyles = {
    low: "bg-green-100 text-green-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-orange-100 text-orange-800",
  };

  // Handle initial state and sync with props
  useEffect(() => {
    if (saveToLocalStorage) {
      // Check if we have a saved state in localStorage
      const savedChecklist = localStorage.getItem(localStorageKey);
      if (savedChecklist) {
        try {
          const parsedChecklist = JSON.parse(savedChecklist);
          if (parsedChecklist[id] !== undefined) {
            setIsCompleted(parsedChecklist[id]);
            return;
          }
        } catch (e) {
          console.error("Error parsing checklist from localStorage", e);
        }
      }
    }

    // If not using localStorage or no saved state, use the prop
    setIsCompleted(propCompleted);
  }, [propCompleted, id, saveToLocalStorage, localStorageKey]);

  // Handle toggling completion state
  const handleToggle = () => {
    const newCompletedState = !isCompleted;
    setIsCompleted(newCompletedState);

    if (onToggle) {
      onToggle(id, newCompletedState);
    }

    if (saveToLocalStorage) {
      try {
        // Get existing checklist or initialize a new one
        const savedChecklist = localStorage.getItem(localStorageKey);
        const parsedChecklist = savedChecklist
          ? JSON.parse(savedChecklist)
          : {};

        // Update the item's completion status
        parsedChecklist[id] = newCompletedState;

        // Save back to localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(parsedChecklist));
      } catch (e) {
        console.error("Error saving checklist to localStorage", e);
      }
    }
  };

  // Format due date
  const formattedDueDate = dueDate
    ? new Date(dueDate).toLocaleDateString()
    : null;

  // Check if the due date is past
  const isDueDatePast = dueDate ? new Date(dueDate) < new Date() : false;

  return (
    <div
      className={`border rounded-lg overflow-hidden ${priorityStyles[priority]} ${className}`}
    >
      <div className="flex items-center p-4">
        {/* Checkbox */}
        <div className="flex-shrink-0 mr-3">
          <button
            onClick={handleToggle}
            className={`w-6 h-6 rounded-full flex items-center justify-center border ${
              isCompleted
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "bg-white border-gray-300 text-transparent hover:border-indigo-500"
            }`}
            aria-checked={isCompleted}
            role="checkbox"
          >
            <CheckIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3
                className={`text-base font-medium ${
                  isCompleted
                    ? "line-through text-gray-500"
                    : priorityTextStyles[priority]
                }`}
              >
                {title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-1">
                {/* Priority badge */}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${priorityBadgeStyles[priority]}`}
                >
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}{" "}
                  Priority
                </span>

                {/* Category badge */}
                {category && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {category}
                  </span>
                )}

                {/* Due date */}
                {formattedDueDate && (
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      isDueDatePast && !isCompleted
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    Due: {formattedDueDate}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center">
              {/* Info toggle button */}
              {(description || link) && (
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="ml-2 text-gray-400 hover:text-gray-500"
                >
                  <InformationCircleIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable details */}
      {showDetails && (
        <div className="px-4 pb-4 pt-0">
          {description && (
            <p className="text-sm text-gray-600 mb-2">{description}</p>
          )}

          {link && (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-1 text-sm text-indigo-600 hover:text-indigo-500"
            >
              {link.text} →
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ChecklistItem;
