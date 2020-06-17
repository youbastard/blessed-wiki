import { h } from 'preact';
import style from './Loader.module.css';

const Loader = () => (
  <article class={style.loadingPlaceholder}>
    <h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
    <div class={`${style.loadingBody} loading`}>&nbsp;</div>
    <div class={`${style.loadingBody} loading`}>&nbsp;</div>
    <div class={`${style.loadingBody} loading`}>&nbsp;</div>
  </article>
);

export default Loader;
