import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import restaurantsData from "../data/restaurants.json";
import type { Restaurant } from "../types/restaurant";

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const restaurants = restaurantsData as Restaurant[];

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">
            😕 Restaurant non trouvé
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            ← Retour à la carte
          </button>
        </div>
      </div>
    );
  }

  const cuisineLabel =
    restaurant.cuisineType === "japanese"
      ? `🇯🇵 ${t.header.japanese}`
      : `🇰🇷 ${t.header.korean}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-br from-gray-200 to-gray-300">
        <div className="absolute inset-0 flex items-center justify-center text-9xl">
          {restaurant.cuisineType === "japanese" ? "🍜" : "🍲"}
        </div>

        {/* Badge cuisine */}
        <div className="absolute bottom-8 left-8 px-4 py-2 bg-white rounded-full shadow-lg text-base font-medium">
          {cuisineLabel}
        </div>

        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 px-4 py-2 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-colors flex items-center gap-2"
        >
          ← {t.common.back}
        </button>
      </div>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Nom et tagline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {restaurant.name}
        </h1>
        <p className="text-2xl text-gray-600 italic mb-8">
          {restaurant.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {restaurant.keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-base shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations
            </h2>
            <div className="space-y-4 bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-medium text-gray-900">
                    {t.restaurant.address}
                  </p>
                  <p className="text-gray-700">{restaurant.address}</p>
                </div>
              </div>

              {restaurant.phone && (
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">
                      {t.restaurant.phone}
                    </p>
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                </div>
              )}

              {restaurant.website && (
                <div className="flex items-start gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="font-medium text-gray-900">
                      {t.restaurant.website}
                    </p>
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visiter le site
                    </a>
                  </div>
                </div>
              )}

              {restaurant.instagram && (
                <div className="flex items-start gap-3">
                  <span className="text-xl">📱</span>
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
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
                </div>
              )}

              {restaurant.googleMapsUrl && (
                <div className="pt-4 border-t">
                  <a
                    href={restaurant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    🗺️ {t.restaurant.viewOnGoogleMaps}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Avis et histoire */}
          <div className="space-y-8">
            {/* Mon avis */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                ✨ {t.restaurant.myReview}
              </h2>
              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
                <p className="text-gray-700 leading-relaxed">
                  {restaurant.authenticityNote}
                </p>
              </div>
            </div>

            {/* Histoire du propriétaire */}
            {restaurant.ownerStory && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  💬 {t.restaurant.story}
                </h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    {restaurant.ownerStory}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
