import { h } from 'preact';

import { Link } from 'preact-router/match';
import Search from 'components/Search';

const SiteHeader = () => (
  <nav class="ph3 ph5-ns pv3 bb b--light-gray flex justify-between items-center">
    <Link class={`link dark-gray b f6 f2-ns dib mr3`} href="/" title="Home">
      <span>🍑 Blessed 🍑 Wiki 🍑</span>
    </Link>
    <Search />
  </nav>
);

export default SiteHeader;
