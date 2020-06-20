import ArticleListItem from 'components/ArticleListItem';

const ArticleList = ({ items }) => (
  <section>
    { items.map(item => <ArticleListItem key={item.id} article={item} />) }
  </section>
);

export default ArticleList;
