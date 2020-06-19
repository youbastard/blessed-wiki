import { h } from 'preact';
import { Link } from 'preact-router/match';

const SiteFooter = () => (
  <footer class="bg-near-black white-80 pv3 pv3-l ph3">
    <nav>
      <Link class="link dim gray f6 f5-ns dib mr3" href="/about" title="About">About</Link>
      <Link class="link dim gray f6 f5-ns dib mr3" href="/contact" title="Contact">Contact</Link>
      <Link class="link dim gray f6 f5-ns dib mr3" href="/contact" title="Contact">Support Wikipedia</Link>
    </nav>
  </footer>
);

export default SiteFooter;
