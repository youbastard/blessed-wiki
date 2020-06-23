import { h } from 'preact';

const ArticleImage = ({ alt, title, src }) => (
  <div>
    <img src={src} alt={alt} />
    {title && <span>{title}</span>}
  </div>
);

export default ArticleImage;
