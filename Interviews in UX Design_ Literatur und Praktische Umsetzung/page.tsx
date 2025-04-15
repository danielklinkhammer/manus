import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const components = {
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3 border-b pb-1" />,
  h3: (props) => <h3 {...props} className="text-xl font-bold mt-5 mb-2" />,
  h4: (props) => <h4 {...props} className="text-lg font-bold mt-4 mb-2" />,
  p: (props) => <p {...props} className="my-4" />,
  ul: (props) => <ul {...props} className="list-disc pl-6 my-4" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6 my-4" />,
  li: (props) => <li {...props} className="my-1" />,
  blockquote: (props) => <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4" />,
  code: (props) => <code {...props} className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm" />,
  pre: (props) => <pre {...props} className="bg-gray-100 rounded p-4 overflow-x-auto my-4 font-mono text-sm" />,
  table: (props) => <div className="overflow-x-auto my-6"><table {...props} className="min-w-full divide-y divide-gray-300" /></div>,
  th: (props) => <th {...props} className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-50" />,
  td: (props) => <td {...props} className="px-3 py-4 text-sm text-gray-500 border-b border-gray-200" />,
  hr: () => <hr className="my-8 border-t border-gray-300" />,
};

export default async function LecturesPage() {
  const filePath = path.join(process.cwd(), 'src/app/lectures/page.mdx');
  const source = fs.readFileSync(filePath, 'utf8');
  
  return (
    <div className="prose prose-blue max-w-none">
      <h1 className="text-3xl font-bold mb-6">Vorlesungsfolien: Interviews in UX Design</h1>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800">
          Diese Seite enthält die Präsentationsfolien für die 3-stündige Vorlesung zu Interviews im UX Design.
          Die Folien bieten einen strukturierten Überblick über die wichtigsten Konzepte und Methoden und können
          als Leitfaden während der Vorlesung verwendet werden.
        </p>
      </div>
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </div>
  );
}
