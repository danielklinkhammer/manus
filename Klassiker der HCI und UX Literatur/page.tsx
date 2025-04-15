import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

// Typen für die Daten
type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  edition: string;
  categories: string[];
  topics: string[];
  shortDescription: string;
  summaryFile: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
};

export default async function Home() {
  // Daten laden
  const booksData = await fs.readFile(
    path.join(process.cwd(), 'src/data/books.json'),
    'utf8'
  );
  const categoriesData = await fs.readFile(
    path.join(process.cwd(), 'src/data/categories.json'),
    'utf8'
  );

  const books: Book[] = JSON.parse(booksData);
  const categories: Category[] = JSON.parse(categoriesData);

  // Klassiker und neuere Werke filtern
  const classicBooks = books.filter(book => book.categories.includes('Klassiker')).slice(0, 3);
  const modernBooks = books.filter(book => book.categories.includes('Neuere Werke')).slice(0, 3);

  return (
    <MainLayout>
      {/* Hero-Bereich */}
      <section className="bg-blue-600 text-white rounded-lg shadow-xl p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Klassiker der HCI und UX Literatur</h1>
          <p className="text-xl mb-6">
            Eine umfassende Sammlung von grundlegenden und neueren Werken im Bereich Human-Computer Interaction und User Experience Design.
          </p>
          <Link href="/books" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Alle Bücher entdecken
          </Link>
        </div>
      </section>

      {/* Kategorien */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kategorien</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link href={`/books?category=${category.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                Bücher anzeigen →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Klassiker */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Einflussreiche Klassiker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classicBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-1">{book.author}, {book.year}</p>
                <p className="text-gray-700 mb-4">{book.shortDescription}</p>
                <Link href={`/books/${book.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neuere Werke */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Neuere Veröffentlichungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modernBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-1">{book.author}, {book.year}</p>
                <p className="text-gray-700 mb-4">{book.shortDescription}</p>
                <Link href={`/books/${book.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Über das Projekt */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Über dieses Projekt</h2>
        <p className="text-gray-700 mb-4">
          Diese Webseite bietet einen umfassenden Überblick über wichtige Literatur im Bereich Human-Computer Interaction (HCI) und User Experience (UX). 
          Von grundlegenden Klassikern bis hin zu neueren Veröffentlichungen finden Sie hier detaillierte Zusammenfassungen, Schlüsselkonzepte und praktische Anwendungen.
        </p>
        <p className="text-gray-700">
          Ziel ist es, Studierenden, Designern, Entwicklern und allen an HCI und UX Interessierten einen strukturierten Zugang zu diesem wichtigen Wissensbereich zu ermöglichen.
        </p>
      </section>
    </MainLayout>
  );
}
