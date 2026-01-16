import type { Restaurant } from "../types/restaurant";
import { useLanguage } from "../contexts/LanguageContext";

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

export default function RestaurantModal({
  restaurant,
  onClose,
}: RestaurantModalProps) {
  const { t } = useLanguage();

  if (!restaurant) return null;

  const cuisineLabel =
    restaurant.cuisineType === "japanese"
      ? `🇯🇵 ${t.header.japanese}`
      : `🇰🇷 ${t.header.korean}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header avec image */}
        <div className="relative h-48 bg-linear-to-br from-gray-200 to-gray-300">
          {/* Placeholder pour l'image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl">
            {restaurant.cuisineType === "japanese" ? "🍜" : "🍲"}
          </div>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <span className="text-xl text-gray-700">×</span>
          </button>

          {/* Badge cuisine */}
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-white rounded-full shadow-md text-sm font-medium">
            {cuisineLabel}
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto max-h-[calc(85vh-12rem)] p-6">
          {/* Nom et tagline */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {restaurant.name}
          </h2>
          <p className="text-lg text-gray-600 italic mb-4">
            {restaurant.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {restaurant.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Adresse et liens */}
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">📍</span>
              <span className="text-gray-700">{restaurant.address}</span>
            </div>

            {restaurant.phone && (
              <div className="flex items-start gap-2">
                <span className="text-gray-500">📞</span>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {restaurant.phone}
                </a>
              </div>
            )}

            {restaurant.website && (
              <div className="flex items-start gap-2">
                <span className="text-gray-500">🌐</span>
                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t.restaurant.website}
                </a>
              </div>
            )}

            {restaurant.instagram && (
              <div className="flex items-start gap-2">
                <span className="text-gray-500">📱</span>
                <a
                  href={`https://instagram.com/${restaurant.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {restaurant.instagram}
                </a>
              </div>
            )}

            {restaurant.googleMapsUrl && (
              <div className="flex items-start gap-2">
                <span className="text-gray-500">🗺️</span>
                <a
                  href={restaurant.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t.restaurant.viewOnGoogleMaps}
                </a>
              </div>
            )}
          </div>

          {/* Mon avis sur l'authenticité */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              ✨ {t.restaurant.myReview}
            </h3>
            <p className="text-gray-700 leading-relaxed bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              {restaurant.authenticityNote}
            </p>
          </div>

          {/* Histoire du propriétaire */}
          {restaurant.ownerStory && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                💬 {t.restaurant.story}
              </h3>
              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                {restaurant.ownerStory}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
