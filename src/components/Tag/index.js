import { h } from 'preact';
// import { Link } from 'preact-router';
import style from './style';

const Tag = ({ tag }) => (
  <span class={style.tag}>{tag.trim()}</span>
);

export default Tag;