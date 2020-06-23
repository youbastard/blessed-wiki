import { h } from 'preact';
import { Link } from 'preact-router';

import style from './Tag.style.css';

// TODO - slugify text
const Tag = ({ children }) => (
  <Link href={`/tagged/${children}`} class={`${style.tag} no-underline items-center mr2 tc br2 ph2 pv1 bg-washed-red dark-gray hover-black inline-flex sans-serif`}>
    <span class="f6 ttu tracked">{children}</span>
  </Link>
);

export default Tag;
