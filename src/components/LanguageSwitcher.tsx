import { Language } from "../lib/i18n";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ko", label: "한", flag: "🇰🇷" },
    { code: "ja", label: "日", flag: "🇯🇵" },
  ];

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            currentLanguage === lang.code
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
