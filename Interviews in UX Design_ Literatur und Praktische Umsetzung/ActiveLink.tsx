import React from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActiveLink({ href, children, className = '' }: ActiveLinkProps) {
  // Diese Funktion würde in einer vollständigen Implementierung 
  // den aktuellen Pfad überprüfen und entsprechend die aktive Klasse hinzufügen
  const isActive = typeof window !== 'undefined' && window.location.pathname === href;
  
  return (
    <a 
      href={href} 
      className={`${className} ${isActive ? 'nav-link-active' : 'nav-link'}`}
    >
      {children}
    </a>
  );
}
