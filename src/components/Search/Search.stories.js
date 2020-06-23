import { h } from 'preact';
import Search from './Search';

export default {
  title: 'Search',
  component: Search
};

export const Basic = () => (
  <section class="pa3">
    <Search />
  </section>
);
