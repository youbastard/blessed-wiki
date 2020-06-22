import { useState, useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import ArticleList from 'components/ArticleList';

const Home = (props) => {
  const [data, isLoading, error] = usePrerenderData(props);
  // const [state, setState] = useState({ items: [] });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error}</p>;

  // useEffect(() => {
  //   if (data && data.articles) {
  //     const items = data.articles.edges;
  //     setState((s) => ({ ...s, items }));
  //   }
  // }, [data, isLoading]);

  return (
    <div>
      { !isLoading && data && data.articles && <ArticleList items={data.articles.edges} /> }
    </div>
  );
};

export default Home;
