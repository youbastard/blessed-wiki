import { Link } from 'preact-router';

const Tag = ({ tag }) => (
  <Link href={`/tagged/${tag}`} class="no-underline items-center mr2 tc br2 ph2 pv1 ba gray inline-flex">
    <span class="f7 ttu tracked">{tag}</span>
  </Link>
);

export default Tag;
