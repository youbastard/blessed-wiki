import { h } from 'preact';
import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag
};

export const Basic = () => (
  <section class="pa3">
    <Tag>Hello Button</Tag>
  </section>
);
