import { Link } from 'preact-router';

const Tag = ({ tag }) => (
  <Link href={`/tagged/${tag}`} class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2">
    <span class="f6">{tag}</span>
  </Link>
);

export default Tag;
