/* eslint-disable arrow-body-style */
const path = require('path');
const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js']
});

import { lstatSync, readdirSync } from 'fs';

const isDirectory = (source) => {
  return lstatSync(source).isDirectory();
};

const getDirectories = (source) => {
  return readdirSync(source)
    .map((name) => path.join(source, name))
    .filter(isDirectory);
};

module.exports = (config, env, helpers) => {
  netlifyPlugin(config);
  getDirectories('src/').map((dir) => {
    config.resolve.alias[dir.replace('src/', '')] = path.resolve(__dirname, dir);
  });
  env.production && !env.ssr && config.plugins.push(new ImageminPlugin({
    from: './build/assets/**',
    pngquant: {
      quality: '60'
    },
    plugins: [
      imageminMozjpeg({
        quality: 70,
        progressive: true
      })
    ]
  }));
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;
    // Add PurgeCSS only in production.
    if (env.production) {
      plugins.push(purgecss);
    }
  });
  return config;
};
