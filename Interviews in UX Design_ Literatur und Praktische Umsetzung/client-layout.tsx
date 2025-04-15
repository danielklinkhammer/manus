'use client';

import React from 'react';
import SkipLink from '@/components/SkipLink';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink targetId="main-content" />
      <Navigation />
      <main id="main-content" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
