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
      <div className="container">
        <div className="card">
          <h1 className="homepage-title">No homepage data found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="homepage-title">{homepage.title}</h1>
        {homepage.description && (
          <p className="homepage-description">{homepage.description}</p>
        )}
      </div>
    </div>
  );
}
