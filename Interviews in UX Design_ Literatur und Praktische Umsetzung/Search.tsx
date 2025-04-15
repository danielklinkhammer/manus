import React, { useState } from 'react';

interface SearchProps {
  placeholder?: string;
}

export default function Search({ placeholder = "Suchen..." }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Simulierte Suche - in einer echten Implementierung würde hier eine API-Anfrage erfolgen
    setTimeout(() => {
      // Beispiel-Suchergebnisse
      const results = [
        { title: 'Grundlagen von Interviews in UX Design', url: '/content#grundlagen-von-interviews-in-ux-design' },
        { title: 'Interviewtypen im UX-Kontext', url: '/content#interviewtypen-im-ux-kontext' },
        { title: 'Planung von Interviews', url: '/content#planung-von-interviews' },
        { title: 'Praktische Richtlinien für Interviews', url: '/practical-guidelines' },
        { title: 'Übung 1: Entwicklung eines Interviewleitfadens', url: '/exercises#übung-1-entwicklung-eines-interviewleitfadens' },
      ].filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">Suchen</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={placeholder}
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="sr-only">Suchen</button>
      </form>

      {/* Suchergebnisse */}
      {searchTerm && (searchResults.length > 0 || isSearching) && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
          {isSearching ? (
            <div className="px-4 py-2 text-sm text-gray-500">Suche läuft...</div>
          ) : searchResults.length === 0 ? (
            <div className="px-4 py-2 text-sm text-gray-500">Keine Ergebnisse gefunden</div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <a
                    href={result.url}
                    className="block px-4 py-2 hover:bg-gray-50 text-sm"
                    onClick={() => setSearchTerm('')}
                  >
                    {result.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
