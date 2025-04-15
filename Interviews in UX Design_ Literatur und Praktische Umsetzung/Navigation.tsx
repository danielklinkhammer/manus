import React from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Search from './Search';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Interviews in UX Design
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <ActiveLink href="/content">
                  Inhalte
                </ActiveLink>
                <ActiveLink href="/lectures">
                  Folien
                </ActiveLink>
                <ActiveLink href="/practical-guidelines">
                  Richtlinien
                </ActiveLink>
                <ActiveLink href="/exercises">
                  Übungen
                </ActiveLink>
                <ActiveLink href="/resources">
                  Ressourcen
                </ActiveLink>
                <ActiveLink href="/references">
                  Literatur
                </ActiveLink>
                <ActiveLink href="/about">
                  Über
                </ActiveLink>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Search placeholder="Inhalte durchsuchen..." />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" 
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Menü öffnen</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
