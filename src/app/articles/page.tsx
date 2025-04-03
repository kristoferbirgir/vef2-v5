import { client } from '../../lib/datocms';
import { gql } from 'graphql-request';
import Link from 'next/link';

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
    <div className="container">
      <div className="card">
        <h1 className="articles-title">Articles</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`} className="article-link">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
