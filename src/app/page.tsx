// app/page.tsx
import { client } from '../lib/datocms';
import { gql } from 'graphql-request';

interface HomepageData {
  homepage: {
    title: string;
    description?: string;
  } | null;
}

const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
      title
      description
    }
  }
`;

export default async function HomePage() {
  const data = await client.request<HomepageData>(HOMEPAGE_QUERY);
  const homepage = data.homepage;

  if (!homepage) {
    return (
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold">No homepage data found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* A centered “card” style container */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{homepage.title}</h1>
        {homepage.description && (
          <p className="text-lg leading-relaxed">
            {homepage.description}
          </p>
        )}
      </div>
    </div>
  );
}
