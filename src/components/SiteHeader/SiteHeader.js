import { h } from 'preact';
import { Link } from 'preact-router/match';

const SiteHeader = () => (
  <nav class="pa3 pa4-ns bb b--light-gray">
    <Link class="link dim black b f6 f5-ns dib mr3" href="/" title="Home">Blessed Wiki</Link>
  </nav>
);

export default SiteHeader;