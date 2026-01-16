import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="relative z-10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between gap-6">
          {/* Logo/Titre à gauche */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t.header.title}
              </h1>
              <p className="text-xs text-gray-500 italic hidden md:block">
                {t.header.tagline}
              </p>
            </Link>
          </div>

          {/* Navigation au centre */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-red-600 transition-colors">
              {t.header.map}
            </Link>
            <Link
              to="/restaurants"
              className="hover:text-red-600 transition-colors"
            >
              {t.header.restaurants}
            </Link>
            <Link to="/about" className="hover:text-red-600 transition-colors">
              {t.header.about}
            </Link>
            <a
              href="https://instagram.com/paristwoparis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              {t.header.instagram}
            </a>
          </div>

          {/* Sélecteur de langue desktop */}
          <div className="hidden md:block flex-shrink-0">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>

          {/* Bouton menu mobile à droite */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors ml-auto"
          >
            <span className="text-lg">☰</span>
          </button>
        </nav>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-red-600 transition-colors"
            >
              {t.header.map}
            </Link>
            <Link
              to="/restaurants"
              className="block py-2 hover:text-red-600 transition-colors"
            >
              {t.header.restaurants}
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-red-600 transition-colors"
            >
              {t.header.about}
            </Link>
            <a
              href="https://instagram.com/paristwoparis"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-red-600 transition-colors"
            >
              {t.header.instagram}
            </a>

            {/* Sélecteur de langue mobile */}
            <div className="pt-2 border-t">
              <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
