import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
// import ArticleList from 'components/ArticleList';

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log(data, isLoading);
  return (
    <div class="pa3 pa4-ns">
      {/* { !isLoading && data && data.data && <ArticleList items={data.data.edges} /> } */}
    </div>
  );
};

export default Home;
