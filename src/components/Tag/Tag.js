import { h } from 'preact';

import { Link } from 'preact-router';

// TODO - slugify text
const Tag = ({ children }) => (
  <Link href={`/tagged/${children}`} class="no-underline items-center mr2 tc br2 ph2 pv1 ba gray inline-flex sans-serif">
    <span class="f7 ttu tracked">{children}</span>
  </Link>
);

export default Tag;
