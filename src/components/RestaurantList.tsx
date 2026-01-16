import { useState } from "react";
import { Link } from "react-router-dom";
import type { Restaurant, CuisineType } from "../types/restaurant";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useLanguage } from "../contexts/LanguageContext";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
}

export default function RestaurantList({
  restaurants,
  onRestaurantClick,
}: RestaurantListProps) {
  const { t } = useLanguage();
  const [cuisineFilter, setCuisineFilter] = useState<CuisineType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrer les restaurants
  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Filtre par type de cuisine
    if (cuisineFilter && restaurant.cuisineType !== cuisineFilter) {
      return false;
    }

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = restaurant.name.toLowerCase().includes(query);
      const matchesKeywords = restaurant.keywords.some((k) =>
        k.toLowerCase().includes(query)
      );
      const matchesTagline = restaurant.tagline.toLowerCase().includes(query);

      return matchesName || matchesKeywords || matchesTagline;
    }

    return true;
  });

  const japaneseCount = restaurants.filter(
    (r) => r.cuisineType === "japanese"
  ).length;
  const koreanCount = restaurants.filter(
    (r) => r.cuisineType === "korean"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t.header.restaurants}
          </h1>
          <p className="text-gray-600">
            {restaurants.length} restaurants authentiques • {japaneseCount} 🇯🇵 •{" "}
            {koreanCount} 🇰🇷
          </p>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Barre de recherche */}
            <div className="flex-1 w-full">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder={t.restaurant.searchPlaceholder}
              />
            </div>

            {/* Filtres de cuisine */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCuisineFilter(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  cuisineFilter === null
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.restaurant.all} ({restaurants.length})
              </button>
              <button
                onClick={() =>
                  setCuisineFilter(
                    cuisineFilter === "japanese" ? null : "japanese"
                  )
                }
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  cuisineFilter === "japanese"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇯🇵 {t.header.japanese} ({japaneseCount})
              </button>
              <button
                onClick={() =>
                  setCuisineFilter(cuisineFilter === "korean" ? null : "korean")
                }
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  cuisineFilter === "korean"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇰🇷 {t.header.korean} ({koreanCount})
              </button>
            </div>
          </div>
        </div>

        {/* Résultats */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-2">😕</p>
            <p className="text-gray-600">{t.restaurant.noResults}</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setCuisineFilter(null);
              }}
              className="mt-4 text-red-600 hover:text-red-700 font-medium"
            >
              {t.restaurant.resetFilters}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {filteredRestaurants.length} restaurant
              {filteredRestaurants.length > 1 ? "s" : ""} trouvé
              {filteredRestaurants.length > 1 ? "s" : ""}
            </div>

            {/* Grille de cartes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={onRestaurantClick}
                />
              ))}
            </div>
          </>
        )}

        {/* Retour à la carte */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            ← {t.common.back}
          </Link>
        </div>
      </div>
    </div>
  );
}
