const { generateFileList, getArticleContent } = require('./src/crawler');
const { join } = require('path');

const [articles, footerLinks] = generateFileList(join(__dirname, 'content')).nodes;

module.exports = () => {
  const pages = [
    { url: '/', articles },
    { url: '/contact/', footerLinks },
    { url: '/contact/success' }
  ];
  let posts = articles.edges.filter(a => a.format === 'md').map(getArticleContent);
  pages.push(...posts);
  return pages;
};
