import { Link } from 'preact-router/match';

const SiteFooter = () => (
  <footer class="bg-white-80 pv3 pv3-l ph3 ph5-ns bt b--light-gray">
    <nav>
      <Link class="link dim f6 dib mr5" href="/about" title="About">About</Link>
      <Link class="link dim f6 dib mr5" href="/contact" title="Contact">Contact</Link>
      <Link class="link dim f6 dib mr5" href="/contact" title="Contact">Support Wikipedia</Link>
    </nav>
  </footer>
);

export default SiteFooter;
