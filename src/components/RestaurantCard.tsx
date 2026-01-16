import type { Restaurant } from "../types/restaurant";
import { useLanguage } from "../contexts/LanguageContext";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: (restaurant: Restaurant) => void;
}

export default function RestaurantCard({
  restaurant,
  onClick,
}: RestaurantCardProps) {
  const { t } = useLanguage();
  const cuisineLabel =
    restaurant.cuisineType === "japanese"
      ? `🇯🇵 ${t.header.japanese}`
      : `🇰🇷 ${t.header.korean}`;
  const cuisineColor =
    restaurant.cuisineType === "japanese"
      ? "from-red-500 to-pink-500"
      : "from-blue-500 to-cyan-500";

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden group"
      onClick={() => onClick(restaurant)}
    >
      {/* Image placeholder */}
      <div
        className={`h-48 bg-linear-to-br ${cuisineColor} flex items-center justify-center text-6xl relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        {restaurant.cuisineType === "japanese" ? "🍜" : "🍲"}
      </div>

      {/* Contenu */}
      <div className="p-5">
        {/* Badge cuisine */}
        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium mb-3">
          {cuisineLabel}
        </div>

        {/* Nom */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {restaurant.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-gray-600 italic mb-3 line-clamp-2">
          {restaurant.tagline}
        </p>

        {/* Adresse */}
        <div className="flex items-start gap-2 text-sm text-gray-500 mb-3">
          <span>📍</span>
          <span className="line-clamp-1">{restaurant.address}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {restaurant.keywords.slice(0, 3).map((keyword) => (
            <span
              key={keyword}
              className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs"
            >
              {keyword}
            </span>
          ))}
          {restaurant.keywords.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
              +{restaurant.keywords.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-xs text-gray-500">
            {restaurant.arrondissement}e arrondissement
          </span>
          {restaurant.isVerified && (
            <span className="text-xs text-green-600 font-medium">
              ✓ {t.common.verified}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
