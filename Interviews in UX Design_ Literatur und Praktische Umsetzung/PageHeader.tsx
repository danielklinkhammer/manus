import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">{title}</h1>
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800">
          {description}
        </p>
      </div>
    </div>
  );
}
