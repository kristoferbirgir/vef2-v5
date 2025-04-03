// app/articles/[slug]/page.tsx
import { client } from '../../../lib/datocms';
import { gql } from 'graphql-request';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  bodyText: string;
  slug: string;
  publishedDate: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

interface ArticleData {
  article: Article | null;
}

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      id
      title
      bodyText
      slug
      publishedDate
      image {
        url
        alt
        width
        height
      }
    }
  }
`;

interface ArticlePageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function ArticlePage(props: ArticlePageProps) {
  // Await params before using it
  const params = await props.params;
  const { slug } = params;
  const data = await client.request<ArticleData>(ARTICLE_QUERY, { slug });
  const article = data.article;

  if (!article) {
    return (
      <div className="container">
        <div className="card">
          <h1>Article not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-date">
          Published: {new Date(article.publishedDate).toLocaleDateString()}
        </p>
        {article.image && (
          <div className="article-image">
            <Image
              src={article.image.url}
              alt={article.image.alt || 'Article image'}
              fill
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
          </div>
        )}
        <div className="article-body">{article.bodyText}</div>
      </div>
    </div>
  );
}
