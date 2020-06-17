/* eslint-disable no-unused-vars */
import { h } from 'preact';
import ArticleListItem from 'components/ArticleListItem';
import style from './ArticleList.module.css';

const ArticleList = ({ items }) => (
  <section class={style.list}>
    { items.map(item => <ArticleListItem key={item.id} article={item} />) }
  </section>
);

export default ArticleList;
