import { useState, useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import ArticleList from 'components/ArticleList';

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [state, setState] = useState({ items: [] });

  useEffect(() => {
    if (data && data.data) {
      const items = data.data.edges;
      setState((s) => ({ ...s, items }));
    }
  }, [data, isLoading]);

  return (
    <div class="pa3 pa4-ns">
      { !isLoading && data && data.data && <ArticleList items={state.items} /> }
    </div>
  );
};

export default Home;
