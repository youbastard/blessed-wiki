import { h } from 'preact';

import Tag from 'components/Tag';

const TagList = ({ tags }) => (
  <section class="pa3">
    { tags.map(t => <Tag key={t}>{ t.trim() }</Tag>) }
  </section>
);

export default TagList;
