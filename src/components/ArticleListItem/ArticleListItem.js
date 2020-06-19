import { h } from 'preact';
import { Link } from 'preact-router';
import TagList from 'components/TagList';

const ArticleListItem = ({ article }) => {
  const tags = article.details.tags.split(',');
  console.log(article);
  return (
    <section>
      <article>
        <Link class="link" href={`/article/${article.details.slug}/`}>
          <h2>{article.details.title}</h2>
        </Link>
        <p>{article.details.subtitle}</p>
        <TagList tags={tags} />
      </article>
    </section>
  );
};

export default ArticleListItem;
