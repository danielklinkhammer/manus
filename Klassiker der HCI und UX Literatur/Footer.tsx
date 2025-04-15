export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">HCI & UX Literatur</h2>
            <p className="text-gray-300 text-sm">
              Eine umfassende Sammlung von Klassikern und neueren Werken der HCI und UX Literatur
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white text-sm">
                  Startseite
                </a>
              </li>
              <li>
                <a href="/books" className="text-gray-300 hover:text-white text-sm">
                  Bücher
                </a>
              </li>
              <li>
                <a href="/topics" className="text-gray-300 hover:text-white text-sm">
                  Themen
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white text-sm">
                  Über
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} HCI & UX Literatur. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
