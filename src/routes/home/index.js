import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Loader from 'components/Loader';
import ArticleList from 'components/ArticleList';
import style from './style';

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  return (
    <div class={style.pageBlogs}>
      <h1 class={style.pageTitle}>Latest Posts</h1>
      { isLoading && <Loader /> }
      { !isLoading && data && data.data && <ArticleList items={data.data.edges} /> }
    </div>
  );
};

export default Home;
