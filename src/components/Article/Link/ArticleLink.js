import { h } from 'preact';

const ArticleLink = ({ href, children }) => (
  <a href={href} class="link" style={{ color: '#f35b00' }}>{ children }</a>
);

export default ArticleLink;
