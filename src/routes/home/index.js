import { usePrerenderData } from '@preact/prerender-data-provider';
import ArticleList from 'components/ArticleList';

const Home = (props) => {
  const [data, isLoading, error] = usePrerenderData(props);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      { !isLoading && data && data.articles && <ArticleList items={data.articles.edges} /> }
    </div>
  );
};

export default Home;
