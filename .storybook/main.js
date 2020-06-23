const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    // Enables absolute import support
    config.resolve.modules.push(path.resolve(__dirname, "../src"));

    // Return the altered config
    return config;
  }
};


