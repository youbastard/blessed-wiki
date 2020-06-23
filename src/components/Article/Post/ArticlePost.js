import { h } from 'preact';

import format from 'date-fns/format';
import Markdown from 'markdown-to-jsx';
import TagList from 'components/TagList';

import Link from 'components/Article/Link';
import Quote from 'components/Article/Quote';
import Image from 'components/Article/Image';


const ArticlePost = ({ article }) => {
  return (
    <article class="cf">
      <header class="fn fl-ns w-50-ns pr4-ns">
        <h1 class="f2 lh-title fw6 mb3 mt0 pt3">{ article.details.title }</h1>
        <time class="f6 ttu tracked">{ format(new Date(article.details.date), 'dd MMMM, yyyy') }</time>
        <div class="f4 lh-copy measure mt0-ns no-underline">
          <Markdown options={{
            overrides: {
              a: { component: Link },
              img: { component: Image },
              blockquote: { component: Quote }
            }
          }}
          >{ article.content }</Markdown>
        </div>
        <div class="pv2">
          <TagList tags={article.details.tags.split(',')} />
        </div>
      </header>
      <div class="fn fl-ns w-50-ns">
        <img src={article.details.cover} />
      </div>
    </article>
  );
};

export default ArticlePost;
