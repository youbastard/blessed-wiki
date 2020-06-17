const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [articles] = generateFileList(join(__dirname, 'content')).nodes;

module.exports = () => {
  const pages = [
    {
      url: '/',
      data: articles,
      seo: {
        cover: '/assets/profile.jpg'
      }
    },
    { url: '/contact/' },
    { url: '/contact/success' }
  ];


  // adding all blog pages
  pages.push(...articles.edges.map(article => {
    let data;
    if (article.format === 'md') {
      const { content } = parseMD(fs.readFileSync(join('content', 'articles', article.id), 'utf-8'));
      data = content;
    } else {
      data = fs.readFileSync(join('content', 'articles', article.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
    }
    return {
      url: `/article/${article.id}`,
      seo: article.details,
      data: {
        details: article.details,
        content: data
      }
    };
  }));

  return pages;
};
