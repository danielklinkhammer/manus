import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/content" className="text-base text-gray-500 hover:text-gray-900">
              Inhalte
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/lectures" className="text-base text-gray-500 hover:text-gray-900">
              Folien
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/practical-guidelines" className="text-base text-gray-500 hover:text-gray-900">
              Richtlinien
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/exercises" className="text-base text-gray-500 hover:text-gray-900">
              Übungen
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/resources" className="text-base text-gray-500 hover:text-gray-900">
              Ressourcen
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/references" className="text-base text-gray-500 hover:text-gray-900">
              Literatur
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
              Über
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 Interviews in UX Design. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
