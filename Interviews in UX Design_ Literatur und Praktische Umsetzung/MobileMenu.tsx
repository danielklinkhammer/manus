import React, { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-40 lg:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose}></div>
      
      {/* Menu panel */}
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={onClose}
          >
            <span className="sr-only">Menü schließen</span>
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <span className="text-xl font-bold text-gray-900">Interviews in UX Design</span>
          </div>
          
          <div className="px-4 mt-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="mobile-search"
                  name="mobile-search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Inhalte durchsuchen..."
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button type="submit" className="sr-only">Suchen</button>
            </form>
            
            {/* Suchergebnisse */}
            {searchTerm && (searchResults.length > 0 || isSearching) && (
              <div className="bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60 mb-4">
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
                          onClick={() => {
                            setSearchTerm('');
                            onClose();
                          }}
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
          
          <nav className="mt-2 px-2 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100">Home</a>
            <a href="/content" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Inhalte</a>
            <a href="/lectures" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Folien</a>
            <a href="/practical-guidelines" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Richtlinien</a>
            <a href="/exercises" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Übungen</a>
            <a href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Ressourcen</a>
            <a href="/references" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Literatur</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Über</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
