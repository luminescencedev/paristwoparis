export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paris <span className="text-red-600">two</span> Paris
          </h1>
          <p className="text-xl text-gray-600 italic">
            Le deuxième visage de Paris — Entre Seoul et Tokyo
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Faire découvrir les lieux de cuisine{" "}
            <strong>japonaise et coréenne authentique</strong> à Paris. Nous
            sélectionnons uniquement des restaurants tenus par des passionnés
            qui respectent les traditions culinaires et utilisent des recettes
            authentiques transmises de génération en génération.
          </p>
        </section>

        {/* Pourquoi ce site */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💡</span>
            <h2 className="text-2xl font-bold text-gray-900">
              Pourquoi ce guide ?
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Paris regorge de restaurants asiatiques, mais tous ne sont pas
              authentiques. Beaucoup ont adapté leurs plats au goût occidental,
              perdant ainsi l'essence même de la cuisine traditionnelle
              japonaise et coréenne.
            </p>
            <p>
              Ce site a été créé pour vous guider vers les{" "}
              <strong>véritables pépites</strong> : ces restaurants où les
              saveurs, les techniques et l'ambiance sont fidèles à ce que vous
              trouveriez à Tokyo ou à Seoul.
            </p>
          </div>
        </section>

        {/* Critères de sélection */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h2 className="text-2xl font-bold text-gray-900">Nos Critères</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-2xl">👨‍🍳</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Authenticité
                </h3>
                <p className="text-gray-600 text-sm">
                  Restaurants tenus ou supervisés par des chefs japonais ou
                  coréens
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🍜</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Recettes traditionnelles
                </h3>
                <p className="text-gray-600 text-sm">
                  Respect des techniques et ingrédients originaux
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🏮</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ambiance</h3>
                <p className="text-gray-600 text-sm">
                  Décor et atmosphère qui reflètent la culture
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">❤️</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Passion</h3>
                <p className="text-gray-600 text-sm">
                  Propriétaires passionnés avec une vraie histoire à raconter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment utiliser */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-gray-900">
              Comment utiliser ce site
            </h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">1.</span>
              <p>
                Explorez la carte interactive pour découvrir les restaurants
                près de vous
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">2.</span>
              <p>Filtrez par cuisine (🇯🇵 japonaise ou 🇰🇷 coréenne)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">3.</span>
              <p>Recherchez par nom ou style (ramen, bbq, izakaya, etc.)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-red-600">4.</span>
              <p>
                Cliquez sur un restaurant pour lire notre avis et l'histoire du
                propriétaire
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-linear-to-r from-red-50 to-blue-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Suivez-nous</h2>
          <p className="text-gray-700 mb-6">
            Rejoignez notre communauté pour découvrir de nouveaux restaurants et
            partager vos expériences culinaires !
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              📱 Instagram
            </a>
          </div>
        </section>

        {/* Retour */}
        <div className="mt-12 text-center">
          <a
            href="#map"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            ← Retour à la carte
          </a>
        </div>
      </div>
    </div>
  );
}
