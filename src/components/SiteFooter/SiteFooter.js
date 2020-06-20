import { Link } from 'preact-router/match';

const SiteFooter = () => (
  <footer class="pv3 pv3-l ph3 ph5-ns bt b--light-gray" style={{ background: 'oldlace' }}>
    <nav>
      <Link class="link dim f6 dib mr5 black" href="/about" title="About">About</Link>
      <Link class="link dim f6 dib mr5 black" href="/contact" title="Contact">Contact</Link>
      <Link class="link dim f6 dib mr5 black" href="/contact" title="Contact">Support Wikipedia</Link>
    </nav>
  </footer>
);

export default SiteFooter;
