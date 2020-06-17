import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Header.module.css';

const Header = () => (
  <header class={style.header}>
    <Link href="/"><h1>Blessed Wiki</h1></Link>
  </header>
);

export default Header;
