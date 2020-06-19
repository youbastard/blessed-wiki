/* eslint-disable no-unused-vars */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import format from 'date-fns/format';
import Markdown from 'markdown-to-jsx';
import TagList from 'components/TagList';
import InlineQuote from 'components/Quote';

function InlineImage({ alt, title, src }) {
  return (
    <div>
      <img src={src} alt={alt} />
      {title && <span>{title}</span>}
    </div>
  );
}

function InlineLink({ href, children }) {
  return (
    <a href={href} class="link">{ children }</a>
  );
}

const Article = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [state, setState] = useState({ details: { tags: '', date: null }, content: '' });

  useEffect(() => {
    if (data && data.data) {
      const { details, content } = data.data;
      setState((s) => ({ ...s, details, content }));
    }
  }, [data, isLoading]);

  if (isLoading) {
    return (<div class="isloading" />);
  }

  return (
    <article class="cf ph3 ph5-ns pv5">
      <header class="fn fl-ns w-50-ns pr4-ns">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{ state.details.title }</h1>
        <time class="f6 ttu tracked gray">{ format(new Date(state.details.date), 'dd MMMM, yyyy') }</time>
        <div class="f4 lh-copy measure mt0-ns no-underline">
          <Markdown options={{
            overrides: {
              a: { component: InlineLink },
              img: { component: InlineImage },
              blockquote: { component: InlineQuote }
            }
          }}
          >{ state.content }</Markdown>
        </div>
        <div class="bt pv2">
          <TagList tags={state.details.tags.split(',')} />
        </div>
      </header>
      <div class="fn fl-ns w-50-ns no-underline">
        <img src={state.details.cover} />
      </div>
    </article>
  );
};

export default Article;
