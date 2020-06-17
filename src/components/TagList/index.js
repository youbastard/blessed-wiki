import { h } from 'preact';
import style from './style';
import Tag from '../../components/Tag';

const TagList = ({ tags }) => (
  <section class={style.taglist}>
    { tags.map(t => <Tag key={t} tag={t} />) }
  </section>
);

export default TagList;