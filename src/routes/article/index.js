/* eslint-disable no-unused-vars */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import ArticlePost from 'components/Article/Post';

const Article = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [state, setState] = useState({ details: { tags: '', date: null }, content: '' });

  useEffect(() => {
    if (data) {
      const { details, content } = data;
      setState((s) => ({ ...s, details, content }));
    }
  }, [data, isLoading]);

  if (isLoading) {
    return (<div class="isloading" />);
  }

  return (
    <ArticlePost article={state} />
  );
};

export default Article;
