import { h } from 'preact';
import ArticleQuote from './ArticleQuote';

export default {
  title: 'ArticleQuote',
  component: ArticleQuote
};

export const Basic = () => (
  <ArticleQuote>
    It was that impossible thing - happiness which
    does not fade to reveal the thin shoots of some
    new desire rising from within it.
  </ArticleQuote>
);
