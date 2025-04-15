import React from 'react';

interface SkipLinkProps {
  targetId: string;
  text?: string;
}

export default function SkipLink({ targetId, text = "Zum Hauptinhalt springen" }: SkipLinkProps) {
  return (
    <a 
      href={`#${targetId}`} 
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-blue-600 focus:text-white focus:z-50"
      aria-label={text}
    >
      {text}
    </a>
  );
}
