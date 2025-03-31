// app/articles/page.tsx
import { client } from '../../lib/datocms';
import { gql } from 'graphql-request';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Article {
  id: string;
  title: string;
  slug: string;
}

interface ArticlesData {
  allArticles: Article[];
}

const ARTICLES_QUERY = gql`
  query Articles {
    allArticles {
      id
      title
      slug
    }
  }
`;

export default async function ArticlesPage() {
  const data = await client.request<ArticlesData>(ARTICLES_QUERY);
  const articles = data.allArticles;

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id}>
              <Link
                href={`/articles/${article.slug}`}
                className="flex items-center justify-between border border-blue-200 p-4 rounded hover:bg-blue-50 transition-colors"
              >
                <span className="text-blue-600 font-medium">{article.title}</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
