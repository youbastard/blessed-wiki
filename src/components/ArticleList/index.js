/* eslint-disable no-unused-vars */
import { h } from 'preact';
import ArticleListItem from '../../components/ArticleListItem';
import style from './style';


const ArticleList = ({ items }) => {
  return (
    <section>
      { items.map(item => <ArticleListItem key={item.id} article={item} />) }
    </section>
  );
};

export default ArticleList;
