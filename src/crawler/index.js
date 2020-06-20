const fs = require('fs');
const { join, sep } = require('path');
const parseMD = require('parse-md').default;

function getExtensionFromFilename(fileName) {
  return fileName.substr(fileName.lastIndexOf('.') + 1);
}

function getDetails(format, data) {
  const formatNormalised = format.toLowerCase();

  switch (formatNormalised) {
  case 'md':
  case 'markdown': {
    const { metadata } = parseMD(data);
    return metadata;
  }

  case 'json': {
    return JSON.parse(data);
  }

  default: {
    console.error('File format not recognised');
  }
  }
}

function getFolders(source) {

  const isDirectory = (source) => fs.lstatSync(source).isDirectory();
  const isFile = (source) => !fs.lstatSync(source).isDirectory();
  const getAllListings = (source) => fs.readdirSync(source).map(name => join(source, name));

  let allContent = getAllListings(source);

  const edges = allContent.filter(isFile).map(file => {
    const data = fs.readFileSync(file, 'utf-8');
    const id = file.substr(file.lastIndexOf(sep) + 1);
    const format = getExtensionFromFilename(id);
    return {
      id,
      format,
      path: file,
      details: getDetails(format, data)
    };
  });

  const nodes = allContent.filter(isDirectory).map(dir => getFolders(dir));

  const result = {
    id: source.substr(source.lastIndexOf(sep) + 1)
  };

  if (nodes.length) {
    result.nodes = nodes;
  }

  if (edges.length) {
    result.edges = edges;
  }

  return result;
}

function generateFileList(src) {
  return getFolders(src);
}

function getArticleContent(article) {
  const path = join('content', 'articles', article.id);
  const file = fs.readFileSync(path, 'utf-8');
  const { content } = parseMD(file);
  return {
    url: `/article/${article.details.slug}`,
    details: article.details,
    content
  };
}

module.exports = {
  generateFileList,
  getArticleContent
};
