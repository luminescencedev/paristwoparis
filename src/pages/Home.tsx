import { Map, useMap } from "@vis.gl/react-maplibre";
import { useEffect, useState, useMemo } from "react";
import { middleOfParis, parisBounds } from "../lib/constants";
import RestaurantMarker from "../components/RestaurantMarker";
import RestaurantModal from "../components/RestaurantModal";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import restaurantsData from "../data/restaurants.json";
import type { Restaurant, CuisineType } from "../types/restaurant";
import { useLanguage } from "../contexts/LanguageContext";

function MapController() {
  const { current: map } = useMap();

  useEffect(() => {
    if (!map) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        map.flyTo({
          center: [middleOfParis[0], middleOfParis[1]],
          zoom: 10,
          duration: 2000,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [map]);

  return null;
}

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [cuisineFilter, setCuisineFilter] = useState<CuisineType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const restaurants = restaurantsData as Restaurant[];
  const { t } = useLanguage();

  // Filtrer les restaurants selon le filtre actif et la recherche
  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Filtre par type de cuisine
    if (cuisineFilter) {
      filtered = filtered.filter((r) => r.cuisineType === cuisineFilter);
    }

    // Filtre par recherche (nom ou mots-clés)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.keywords.some((k) => k.toLowerCase().includes(query)) ||
          r.tagline.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [cuisineFilter, searchQuery, restaurants]);

  const handleMarkerClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Map Container plein écran */}
      <div className="flex-1 overflow-hidden relative md:p-6 md:pt-0">
        <div className="h-full w-full md:rounded-3xl md:overflow-hidden md:shadow-xl md:border-4 md:border-white">
          <Map
            initialViewState={{
              longitude: middleOfParis[0],
              latitude: middleOfParis[1],
              zoom: 12,
            }}
            maxBounds={parisBounds}
            minZoom={10}
            maxZoom={17}
            maxPitch={0}
            dragRotate={false}
            touchZoomRotate={false}
            style={{ width: "100%", height: "100%" }}
            mapStyle="/styles/paris-restaurant.json"
          >
            <MapController />

            {/* Marqueurs des restaurants filtrés - triés du nord au sud pour gérer le z-index */}
            {[...filteredRestaurants]
              .sort((a, b) => b.coordinates.latitude - a.coordinates.latitude)
              .map((restaurant) => (
                <RestaurantMarker
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={handleMarkerClick}
                />
              ))}
          </Map>
        </div>

        {/* Bouton loupe mobile */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="md:hidden absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full shadow-xl p-2 hover:bg-white transition-colors"
          style={{ zIndex: 100000 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        {/* Menu de recherche mobile déroulant */}
        {isSearchOpen && (
          <div
            className="md:hidden absolute top-4 left-4 right-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-3 flex flex-col gap-3"
            style={{ zIndex: 100000 }}
          >
            <SearchBar
              onSearch={handleSearch}
              placeholder={t.restaurant.searchPlaceholder}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCuisineFilter(
                    cuisineFilter === "japanese" ? null : "japanese"
                  );
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  cuisineFilter === "japanese"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇯🇵 {t.header.japanese}
              </button>
              <button
                onClick={() => {
                  setCuisineFilter(
                    cuisineFilter === "korean" ? null : "korean"
                  );
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  cuisineFilter === "korean"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇰🇷 {t.header.korean}
              </button>
            </div>
          </div>
        )}

        {/* Barre de recherche et filtres desktop */}
        <div
          className="hidden md:flex absolute top-4 left-4 right-4 md:top-10 md:left-1/2 md:right-auto md:-translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-2 items-center gap-3 md:max-w-3xl w-auto"
          style={{ zIndex: 100000 }}
        >
          {/* Barre de recherche */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <SearchBar
              onSearch={handleSearch}
              placeholder={t.restaurant.searchPlaceholder}
            />
          </div>

          {/* Filtres de cuisine */}
          <div className="flex items-center gap-2">
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
              🇯🇵 {t.header.japanese}
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
              🇰🇷 {t.header.korean}
            </button>
          </div>
        </div>

        {/* Légende compacte mobile */}
        <div
          className="md:hidden absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-3 py-2 flex items-center gap-2"
          style={{ zIndex: 100000 }}
        >
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full border border-gray-800"></div>
            <span className="text-xs text-gray-700">🇯🇵</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full border border-gray-800"></div>
            <span className="text-xs text-gray-700">🇰🇷</span>
          </div>
        </div>

        {/* Légende complète desktop */}
        <div
          className="hidden md:block absolute bottom-8 left-8 bg-white rounded-2xl shadow-lg p-4"
          style={{ zIndex: 100000 }}
        >
          <h3 className="text-sm font-bold mb-3 text-gray-800">Cuisine</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-gray-800"></div>
              <span className="text-sm text-gray-700">Japonais</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              <span className="text-sm text-gray-700">Coréen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal du restaurant */}
      <RestaurantModal
        restaurant={selectedRestaurant}
        onClose={handleCloseModal}
      />
    </div>
  );
}
