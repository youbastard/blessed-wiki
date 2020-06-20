import { Link } from 'preact-router/match';
import Search from 'components/Search';

const SiteHeader = () => (
  <nav class="ph3 ph5-ns pv3 bb b--light-gray flex justify-between items-center">
    <Link class="link dim black b f6 f5-ns dib mr3" href="/" title="Home">🍑Blessed🍑Wiki🍑</Link>
    <Search />
  </nav>
);

export default SiteHeader;
