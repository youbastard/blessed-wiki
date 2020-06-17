import { h } from 'preact';
import { Link } from 'preact-router';
import TagList from 'components/TagList';
import style from './ArticleListItem.module.css';

const ArticleListItem = ({ article }) => {
  const tags = article.details.tags.split(',');
  return (
    <section>
      <Link href={`/article/${article.id}`}>
        <article>
          <h2>{article.details.title}</h2>
          <TagList tags={tags} />
          <p class={style.preview}>
            {article.preview}
          </p>
        </article>
      </Link>
    </section>
  );
};

export default ArticleListItem;
