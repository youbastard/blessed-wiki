import { h } from 'preact';

import { Link } from 'preact-router';
import TagList from 'components/TagList';

const ArticleListItem = ({ article }) => {
  const tags = article.details.tags.split(',');
  return (
    <section class="mb4">
      <article>
        <Link class="link dark-gray" href={`/article/${article.details.slug}/`}>
          <h2 class="mb1">{article.details.title}</h2>
        </Link>
        {/* <p>{article.details.subtitle}</p> */}
        <TagList tags={tags} />
      </article>
    </section>
  );
};

export default ArticleListItem;
