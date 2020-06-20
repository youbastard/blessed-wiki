import { useState, useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import ArticleList from 'components/ArticleList';

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [state, setState] = useState({ items: [] });

  useEffect(() => {
    if (data && data.articles) {
      const items = data.articles.edges;
      setState((s) => ({ ...s, items }));
    }
  }, [data, isLoading]);

  return (
    <div class="ph3 ph5-ns pv3">
      { !isLoading && data && data.articles && <ArticleList items={state.items} /> }
    </div>
  );
};

export default Home;
