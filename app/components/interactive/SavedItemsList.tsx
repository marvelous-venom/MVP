"use client";

import React, { useState, useEffect } from "react";
import { HeartIcon, TrashIcon, ShareIcon, FolderIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

export interface SavedItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  tags?: string[];
  category?: string;
  savedAt: string | Date;
  data?: Record<string, any>;
}

interface SavedItemsListProps {
  initialItems?: SavedItem[];
  onItemRemove?: (item: SavedItem) => void;
  onItemShare?: (item: SavedItem) => void;
  onCategoryCreate?: (name: string) => void;
  onCategoryChange?: (itemId: string, category: string) => void;
  allowAddingItems?: boolean;
  allowCategoryCreation?: boolean;
  categories?: string[];
  emptyState?: React.ReactNode;
  storageKey?: string;
  saveToLocalStorage?: boolean;
  renderCustomItem?: (item: SavedItem) => React.ReactNode;
  className?: string;
  title?: string;
}

const SavedItemsList: React.FC<SavedItemsListProps> = ({
  initialItems = [],
  onItemRemove,
  onItemShare,
  onCategoryCreate,
  onCategoryChange,
  allowAddingItems = false,
  allowCategoryCreation = true,
  categories: propCategories = [],
  emptyState,
  storageKey = "saved_items",
  saveToLocalStorage = true,
  renderCustomItem,
  className = "",
  title = "Saved Items"
}) => {
  const [items, setItems] = useState<SavedItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState<string[]>(propCategories);
  
  // Load saved items from localStorage if enabled
  useEffect(() => {
    if (saveToLocalStorage && typeof window !== "undefined") {
      try {
        const savedItems = localStorage.getItem(storageKey);
        if (savedItems) {
          setItems(JSON.parse(savedItems));
        } else {
          setItems(initialItems);
        }
        
        const savedCategories = localStorage.getItem(`${storageKey}_categories`);
        if (savedCategories) {
          setCategories(JSON.parse(savedCategories));
        } else {
          setCategories(propCategories);
        }
      } catch (error) {
        console.error("Error loading saved items from localStorage:", error);
      }
    } else {
      setItems(initialItems);
      setCategories(propCategories);
    }
  }, [initialItems, propCategories, saveToLocalStorage, storageKey]);
  
  // Save items to localStorage when they change
  useEffect(() => {
    if (saveToLocalStorage && typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, JSON.stringify(items));
        localStorage.setItem(`${storageKey}_categories`, JSON.stringify(categories));
      } catch (error) {
        console.error("Error saving items to localStorage:", error);
      }
    }
  }, [items, categories, saveToLocalStorage, storageKey]);
  
  // Get all unique categories from items
  const allCategories = [...new Set([...categories, ...items.map(item => item.category).filter(Boolean) as string[])];
  
  // Filter items by selected category
  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter(item => item.category === selectedCategory);
  
  // Add a new item
  const addItem = (item: SavedItem) => {
    const newItem = {
      ...item,
      savedAt: new Date().toISOString()
    };
    setItems(prevItems => [...prevItems, newItem]);
  };
  
  // Remove an item
  const removeItem = (itemId: string) => {
    const itemToRemove = items.find(item => item.id === itemId);
    if (itemToRemove) {
      if (onItemRemove) {
        onItemRemove(itemToRemove);
      }
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }
  };
  
  // Share an item
  const shareItem = (itemId: string) => {
    const item = items.find(item => item.id === itemId);
    if (item && onItemShare) {
      onItemShare(item);
    }
  };
  
  // Handle category change for an item
  const handleCategoryChange = (itemId: string, category: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, category } : item
      )
    );
    
    if (onCategoryChange) {
      onCategoryChange(itemId, category);
    }
  };
  
  // Create a new category
  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) return;
    
    const categoryName = newCategoryName.trim();
    if (!categories.includes(categoryName)) {
      setCategories(prevCategories => [...prevCategories, categoryName]);
      
      if (onCategoryCreate) {
        onCategoryCreate(categoryName);
      }
    }
    
    setNewCategoryName("");
    setIsAddingCategory(false);
  };
  
  // Format date for display
  const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  // Render the empty state
  const renderEmptyState = () => {
    if (emptyState) return emptyState;
    
    return (
      <div className="text-center py-12">
        <HeartIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-base font-semibold text-gray-900">No saved items</h3>
        <p className="mt-1 text-sm text-gray-500">
          Items you save will appear here.
        </p>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          <div className="flex space-x-2">
            {allowCategoryCreation && (
              <button
                type="button"
                onClick={() => setIsAddingCategory(true)}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Add Category
              </button>
            )}
          </div>
        </div>
        
        {/* Category tabs */}
        {allCategories.length > 0 && (
          <div className="mt-4 flex space-x-1 overflow-x-auto py-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                selectedCategory === "all"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            
            {allCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        {/* New category input */}
        {isAddingCategory && (
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={handleCreateCategory}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAddingCategory(false);
                setNewCategoryName("");
              }}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="px-4 py-5 sm:p-6">
        {filteredItems.length === 0 ? (
          renderEmptyState()
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <li key={item.id} className="py-4">
                {renderCustomItem ? (
                  renderCustomItem(item)
                ) : (
                  <div className="flex items-start">
                    {/* Thumbnail */}
                    {item.imageUrl && (
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-gray-900 truncate">
                        {item.url ? (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      
                      {item.description && (
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>Saved {formatDate(item.savedAt)}</span>
                        
                        {item.category && (
                          <>
                            <span className="mx-1">•</span>
                            <span>{item.category}</span>
                          </>
                        )}
                        
                        {item.tags && item.tags.length > 0 && (
                          <>
                            <span className="mx-1">•</span>
                            <div className="flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="ml-4 flex flex-shrink-0 space-x-2">
                      {/* Category dropdown */}
                      {allCategories.length > 0 && (
                        <div className="relative">
                          <select
                            value={item.category || ""}
                            onChange={(e) => handleCategoryChange(item.id, e.target.value)}
                            className="block w-full rounded-md border-gray-300 py-1 pl-3 pr-10 text-xs focus:border-indigo-500 focus:ring-indigo-500"
                          >
                            <option value="">No category</option>
                            {allCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      {/* Share button */}
                      {onItemShare && (
                        <button
                          type="button"
                          onClick={() => shareItem(item.id)}
                          className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">Share</span>
                          <ShareIcon className="h-5 w-5" />
                        </button>
                      )}
                      
                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SavedItemsList;