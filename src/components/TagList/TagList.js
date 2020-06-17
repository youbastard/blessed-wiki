import { h } from 'preact';
import Tag from 'components/Tag';
import style from './TagList.module.css';

const TagList = ({ tags }) => (
  <section class={style.taglist}>
    { tags.map(t => <Tag key={t} tag={t} />) }
  </section>
);

export default TagList;