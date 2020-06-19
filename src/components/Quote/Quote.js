import { h } from 'preact';

const Quote = ({ children, cite }) => (
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">{ children }</p>
    { cite && <cite class="f6 ttu tracked fs-normal">―Stanley Morison</cite> }
  </blockquote>
);

export default Quote;

