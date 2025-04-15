import React from 'react';

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    level: number;
  }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-8 sticky top-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Inhaltsverzeichnis</h2>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-2 py-1 rounded ${
              item.level === 2 ? 'pl-4' : item.level === 3 ? 'pl-8' : 'font-medium'
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
