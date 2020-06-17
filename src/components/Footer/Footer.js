import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Footer.module.css';

const Footer = () => (
  <footer class={style.footer}>
    <nav>
      <Link activeClassName={style.active} href="/contact">Contact me</Link>
    </nav>
  </footer>
);

export default Footer;
