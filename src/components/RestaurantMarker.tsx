import { Marker } from "@vis.gl/react-maplibre";
import { useState } from "react";
import type { Restaurant } from "../types/restaurant";

interface RestaurantMarkerProps {
  restaurant: Restaurant;
  onClick?: (restaurant: Restaurant) => void;
}

export default function RestaurantMarker({
  restaurant,
  onClick,
}: RestaurantMarkerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Marker
      longitude={restaurant.coordinates.longitude}
      latitude={restaurant.coordinates.latitude}
      anchor="bottom"
      onClick={() => onClick?.(restaurant)}
      style={{
        zIndex: isHovered
          ? 10000
          : Math.round((50 - restaurant.coordinates.latitude) * 1000),
      }}
    >
      <div
        className="cursor-pointer hover:scale-110 transition-transform duration-200 flex flex-col items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Nom du restaurant */}
        <div className="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded-md shadow-md mb-1 whitespace-nowrap">
          {restaurant.name}
        </div>

        {/* Pin marker */}
        <div className="relative">
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full shadow-lg flex items-center justify-center">
            <div
              className={`w-3 h-3 rounded-full ${
                restaurant.cuisineType === "japanese"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            />
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-gray-800" />
        </div>

        {/* Mini aperçu au survol */}
        {isHovered && (
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl p-4 z-9999 pointer-events-none">
            <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
            <p className="text-sm text-gray-600 mb-2 italic">
              {restaurant.tagline}
            </p>
            <p className="text-xs text-gray-500 mb-2">{restaurant.address}</p>
            {restaurant.keywords && (
              <div className="flex flex-wrap gap-1">
                {restaurant.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Marker>
  );
}
