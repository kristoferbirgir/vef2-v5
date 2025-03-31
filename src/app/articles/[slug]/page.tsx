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
  params: { slug: string };
}

export default async function ArticlePage({ params: { slug } }: ArticlePageProps) {
  const data = await client.request<ArticleData>(ARTICLE_QUERY, { slug });
  const article = data.article;

  if (!article) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        Published: {new Date(article.publishedDate).toLocaleDateString()}
      </p>
      {article.image && (
        <div className="relative my-4" style={{ width: '600px', height: '400px' }}>
          <Image
            src={article.image.url}
            alt={article.image.alt || 'Article image'}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
      )}
      <div className="mt-4 whitespace-pre-line text-lg">
        {article.bodyText}
      </div>
    </div>
  );
}
