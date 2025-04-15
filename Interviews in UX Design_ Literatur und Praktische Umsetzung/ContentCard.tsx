import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ContentCard({ title, description, href, icon }: CardProps) {
  return (
    <div className="card hover:shadow-md">
      <div className="px-4 py-5 sm:p-6">
        {icon && <div className="text-blue-500 mb-4">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
        <div className="mt-4">
          <Link href={href} className="text-sm font-medium text-blue-600 hover:text-blue-500">
            Mehr erfahren <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
