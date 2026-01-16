import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Rechercher...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />

        {/* Icône de recherche */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        {/* Bouton clear */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
