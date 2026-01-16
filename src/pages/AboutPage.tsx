import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";

export default function AboutPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.header.title}
          </h1>
          <p className="text-xl text-gray-600 italic">{t.header.tagline}</p>
        </div>

        {/* Mission */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {t.about.mission}
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t.about.missionText}
          </p>
        </section>

        {/* Pourquoi ce site */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💡</span>
            <h2 className="text-2xl font-bold text-gray-900">{t.about.why}</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{t.about.whyText1}</p>
            <p>{t.about.whyText2}</p>
          </div>
        </section>

        {/* Critères de sélection */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {t.about.criteria}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-2xl">👨‍🍳</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t.about.authenticity}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.about.authenticityDesc}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🍜</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t.about.traditional}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.about.traditionalDesc}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🏮</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t.about.ambiance}
                </h3>
                <p className="text-gray-600 text-sm">{t.about.ambianceDesc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">❤️</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t.about.passion}
                </h3>
                <p className="text-gray-600 text-sm">{t.about.passionDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment utiliser */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {t.about.howTo}
            </h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">1.</span>
              <p>{t.about.howToStep1}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">2.</span>
              <p>{t.about.howToStep2}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">3.</span>
              <p>{t.about.howToStep3}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">4.</span>
              <p>{t.about.howToStep4}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-linear-to-r from-red-50 to-blue-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.about.follow}
          </h2>
          <p className="text-gray-700 mb-6">{t.about.followText}</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              📱 {t.header.instagram}
            </a>
          </div>
        </section>

        {/* Retour */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            ← {t.common.back}
          </button>
        </div>
      </div>
    </div>
  );
}
