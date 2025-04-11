"use client";

import React, { useState } from "react";
import {
  DocumentTextIcon,
  DocumentIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
  ArrowDownTrayIcon,
  ShieldCheckIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export type ResourceType =
  | "pdf"
  | "doc"
  | "xls"
  | "ppt"
  | "zip"
  | "img"
  | "txt"
  | "other";

export interface ResourceMetadata {
  title: string;
  type: ResourceType;
  size?: string;
  updatedAt?: string;
  description?: string;
  language?: string;
  forRegisteredUsers?: boolean;
  tags?: string[];
  version?: string;
}

interface DownloadableResourceProps {
  resource: ResourceMetadata;
  url: string;
  previewUrl?: string;
  requiresSignup?: boolean;
  onDownload?: (resource: ResourceMetadata) => void;
  onPreview?: (resource: ResourceMetadata) => void;
  className?: string;
  compact?: boolean;
  trackDownloads?: boolean;
}

const DownloadableResource: React.FC<DownloadableResourceProps> = ({
  resource,
  url,
  previewUrl,
  requiresSignup = false,
  onDownload,
  onPreview,
  className = "",
  compact = false,
  trackDownloads = false,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [downloadCount, setDownloadCount] = useState(0);

  // Map resource type to icon
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case "pdf":
        return <DocumentTextIcon className="h-10 w-10 text-red-500" />;
      case "doc":
        return <DocumentTextIcon className="h-10 w-10 text-blue-500" />;
      case "xls":
        return <TableCellsIcon className="h-10 w-10 text-green-500" />;
      case "ppt":
        return (
          <PresentationChartBarIcon className="h-10 w-10 text-orange-500" />
        );
      case "img":
        return <DocumentIcon className="h-10 w-10 text-purple-500" />;
      case "txt":
        return <DocumentTextIcon className="h-10 w-10 text-gray-500" />;
      default:
        return <DocumentIcon className="h-10 w-10 text-gray-500" />;
    }
  };

  // File extension from type
  const getFileExtension = (type: ResourceType) => {
    switch (type) {
      case "pdf":
        return "PDF";
      case "doc":
        return "DOCX";
      case "xls":
        return "XLSX";
      case "ppt":
        return "PPTX";
      case "zip":
        return "ZIP";
      case "img":
        return "IMG";
      case "txt":
        return "TXT";
      default:
        return "FILE";
    }
  };

  // Handle download click
  const handleDownloadClick = async () => {
    if (requiresSignup) {
      // Call a function to show signup modal or redirect to signup page
      // This would be implemented based on your authentication flow
      alert("Please sign up to download this resource");
      return;
    }

    setIsDownloading(true);

    try {
      // If tracking downloads, call the provided callback
      if (trackDownloads && onDownload) {
        onDownload(resource);
        setDownloadCount((prevCount) => prevCount + 1);
      }

      // Trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resource:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle preview click
  const handlePreviewClick = () => {
    if (onPreview) {
      onPreview(resource);
    }

    if (previewUrl) {
      window.open(previewUrl, "_blank");
    }
  };

  // Format date
  const formattedDate = resource.updatedAt
    ? new Date(resource.updatedAt).toLocaleDateString()
    : null;

  // Compact version of the resource card
  if (compact) {
    return (
      <div className={`flex items-center border rounded-md p-3 ${className}`}>
        <div className="flex-shrink-0">{getResourceIcon(resource.type)}</div>
        <div className="ml-4 flex-grow">
          <h3 className="text-sm font-medium text-gray-900">
            {resource.title}
          </h3>
          <p className="text-xs text-gray-500">
            {getFileExtension(resource.type)}
            {resource.size && ` • ${resource.size}`}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <button
            onClick={handleDownloadClick}
            disabled={isDownloading}
            className="text-indigo-600 hover:text-indigo-500"
            aria-label={`Download ${resource.title}`}
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  // Full version of the resource card
  return (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
      <div className="p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0">{getResourceIcon(resource.type)}</div>
          <div className="ml-4 flex-grow">
            <h3 className="text-lg font-medium text-gray-900">
              {resource.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center text-sm text-gray-500 gap-x-4">
              <span>{getFileExtension(resource.type)}</span>
              {resource.size && <span>{resource.size}</span>}
              {formattedDate && <span>Updated: {formattedDate}</span>}
              {resource.version && <span>v{resource.version}</span>}
            </div>

            {resource.description && (
              <p className="mt-2 text-sm text-gray-600">
                {resource.description}
              </p>
            )}

            {resource.tags && resource.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {resource.forRegisteredUsers && (
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <ShieldCheckIcon className="h-4 w-4 text-indigo-500 mr-1" />
                <span>Available for registered users only</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          {previewUrl && (
            <button
              onClick={handlePreviewClick}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <EyeIcon className="h-4 w-4 mr-1" />
              Preview
            </button>
          )}

          <button
            onClick={handleDownloadClick}
            disabled={isDownloading}
            className={`inline-flex items-center px-4 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white ${
              isDownloading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }`}
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                Download
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadableResource;
