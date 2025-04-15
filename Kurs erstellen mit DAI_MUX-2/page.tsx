import Link from 'next/link'

export default function BewertungPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Bewertungsmaterialien</h1>
          <p className="mt-2 text-blue-100">
            <Link href="/" className="hover:underline">Zurück zur Startseite</Link>
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <h2>Bewertungsmaterialien</h2>
            <p>Die Bewertungsmaterialien für den Kurs sind als Markdown-Datei verfügbar.</p>
            <p>
              <a 
                href="/materials/bewertung/bewertungsmaterial.md" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bewertungsmaterialien öffnen
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} - Designing with and for Artificial Intelligence</p>
        </div>
      </footer>
    </div>
  )
}
