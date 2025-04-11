"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface Location {
  id: string | number;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  category?: string;
  url?: string;
}

interface MapMarker {
  type: "primary" | "secondary" | "inactive";
  location: Location;
}

interface LocationMapProps {
  locations: Location[];
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  height?: string;
  width?: string;
  showInfoOnHover?: boolean;
  onLocationSelect?: (location: Location) => void;
  selectedLocationId?: string | number | null;
  className?: string;
}

// Declare the Google Maps script status
type MapScriptStatus = "loading" | "loaded" | "error";

const LocationMap: React.FC<LocationMapProps> = ({
  locations,
  defaultCenter,
  defaultZoom = 12,
  height = "400px",
  width = "100%",
  showInfoOnHover = true,
  onLocationSelect,
  selectedLocationId = null,
  className = "",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [activeInfoWindow, setActiveInfoWindow] =
    useState<google.maps.InfoWindow | null>(null);
  const [mapScriptStatus, setMapScriptStatus] =
    useState<MapScriptStatus>("loading");

  // Function to load the Google Maps script
  const loadGoogleMapsScript = () => {
    if (typeof window === "undefined") return;

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setMapScriptStatus("loaded");
      return;
    }

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!googleMapsApiKey) {
      console.error(
        "Google Maps API key is not defined in environment variables"
      );
      setMapScriptStatus("error");
      return;
    }

    // Create the script element
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    // Set up callbacks
    script.onload = () => {
      setMapScriptStatus("loaded");
    };

    script.onerror = () => {
      console.error("Failed to load Google Maps script");
      setMapScriptStatus("error");
    };

    // Add the script to the document
    document.head.appendChild(script);
  };

  // Initialize the map
  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  // Set up the map once the script is loaded
  useEffect(() => {
    if (!mapRef.current || mapScriptStatus !== "loaded" || map) return;

    try {
      // Find center location
      let mapCenter = defaultCenter;
      if (!mapCenter && locations.length > 0) {
        // Compute the average lat/lng if no default center provided
        const totalLat = locations.reduce((sum, loc) => sum + loc.lat, 0);
        const totalLng = locations.reduce((sum, loc) => sum + loc.lng, 0);
        mapCenter = {
          lat: totalLat / locations.length,
          lng: totalLng / locations.length,
        };
      } else if (!mapCenter) {
        // Default to a fallback location if no locations provided
        mapCenter = { lat: 40.7128, lng: -74.006 }; // New York City
      }

      // Create a new map
      const googleMap = new google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: defaultZoom,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      setMap(googleMap);
    } catch (error) {
      console.error("Error initializing Google Map:", error);
    }
  }, [mapRef, locations, defaultCenter, defaultZoom, mapScriptStatus, map]);

  // Create and update markers when locations or the selected location changes
  useEffect(() => {
    if (!map) return;

    // Remove all existing markers
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    // Close any open info window
    if (activeInfoWindow) {
      activeInfoWindow.close();
      setActiveInfoWindow(null);
    }

    // Create new markers for each location
    const newMarkers = locations.map((location) => {
      const isSelected = selectedLocationId === location.id;

      // Create marker
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.name,
        animation: isSelected ? google.maps.Animation.BOUNCE : undefined,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: isSelected ? 12 : 10,
          fillColor: isSelected ? "#4f46e5" : "#6366f1",
          fillOpacity: isSelected ? 1 : 0.8,
          strokeWeight: 2,
          strokeColor: "#ffffff",
        },
      });

      // Create info window content
      const contentString = `
        <div style="padding: 10px; max-width: 200px;">
          <h3 style="margin: 0 0 5px; font-weight: 600;">${location.name}</h3>
          ${
            location.address
              ? `<p style="margin: 0 0 10px; font-size: 0.875rem;">${location.address}</p>`
              : ""
          }
          ${
            location.url
              ? `<a href="${location.url}" target="_blank" style="color: #4f46e5; font-size: 0.875rem; text-decoration: none;">View details</a>`
              : ""
          }
        </div>
      `;

      // Create info window and handle click/hover events
      const infoWindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: location.name,
      });

      // Add click listener
      marker.addListener("click", () => {
        // Close any open info window
        if (activeInfoWindow) {
          activeInfoWindow.close();
        }

        // Open this info window
        infoWindow.open({
          anchor: marker,
          map,
        });

        setActiveInfoWindow(infoWindow);

        // Call the onLocationSelect callback if provided
        if (onLocationSelect) {
          onLocationSelect(location);
        }
      });

      // Add hover listener if enabled
      if (showInfoOnHover) {
        marker.addListener("mouseover", () => {
          // Only open on hover if no info window is currently open
          if (!activeInfoWindow) {
            infoWindow.open({
              anchor: marker,
              map,
            });
            setActiveInfoWindow(infoWindow);
          }
        });

        marker.addListener("mouseout", () => {
          // Close the info window on mouseout, but only if it was opened by hovering
          // and not by clicking (i.e., if selected location doesn't match this marker)
          if (activeInfoWindow && selectedLocationId !== location.id) {
            infoWindow.close();
            setActiveInfoWindow(null);
          }
        });
      }

      return marker;
    });

    setMarkers(newMarkers);

    // Adjust the map bounds to fit all markers if there are any
    if (newMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      newMarkers.forEach((marker) => bounds.extend(marker.getPosition()!));
      map.fitBounds(bounds);

      // Don't zoom in too far on single marker
      if (map.getZoom()! > 16) {
        map.setZoom(16);
      }

      // If a specific location is selected, center on it
      if (selectedLocationId) {
        const selectedLocation = locations.find(
          (loc) => loc.id === selectedLocationId
        );
        if (selectedLocation) {
          map.setCenter({
            lat: selectedLocation.lat,
            lng: selectedLocation.lng,
          });
          map.setZoom(15);
        }
      }
    }
  }, [map, locations, selectedLocationId, showInfoOnHover, onLocationSelect, markers, activeInfoWindow]);

  // Render loading state if the map script or API key is not available
  if (mapScriptStatus === "loading") {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ height, width }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-10 w-10 text-gray-400"
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
            <p className="mt-2 text-sm text-gray-500">Loading map...</p>
          </div>
        </div>
      </div>
    );
  }

  // Render error state if the map script failed to load
  if (mapScriptStatus === "error") {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ height, width }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="max-w-md text-center p-6">
            <MapPinIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-base font-semibold text-gray-900">
              Map unavailable
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn&apos;t load the map at this time. Please check your internet
              connection or try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height, width }}
      aria-label="Map showing locations"
    ></div>
  );
};

export default LocationMap;
