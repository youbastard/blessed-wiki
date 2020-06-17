import { h } from 'preact';
// import { Link } from 'preact-router';
import style from './Tag.module.css';

const Tag = ({ tag }) => (
  <span class={style.tag}>{tag.trim()}</span>
);

export default Tag;