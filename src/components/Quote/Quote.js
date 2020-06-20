const Quote = ({ children, cite }) => (
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2" style={{ borderColor: '#ff650c' }}>
    <p class="f6 f4-m f4-l lh-copy measure mt0">{ children }</p>
    { cite && <cite class="f6 ttu tracked fs-normal">-{cite}</cite> }
  </blockquote>
);

export default Quote;

