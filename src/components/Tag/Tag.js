import { Link } from 'preact-router';

const Tag = ({ tag }) => (
  <Link href={`/tagged/${tag}`} class="no-underline bg-animate hover-bg-gray inline-flex items-center mr2 tc br2 pa2">
    <span class="f6 ttu tracked">{tag}</span>
  </Link>
);

export default Tag;
