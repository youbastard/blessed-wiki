# Blessed Wiki

https://blessed.wiki

Github: https://github.com/youbastard/blessed-wiki

## CLI Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# run tests with jest and preact-render-spy 
yarn test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

Note: When pre-rendering, your module as components are executed in a Node.js environment, where most Web APIs are not available. To account for this, wrap that code in a check like `if (typeof window !== 'undefined')`. 
Do not add `preact build --no-prerender` to the build command as it will prevent blog posts from rendering.

### Resources

- https://www.netlifycms.org/docs/add-to-your-site/
- https://github.com/preactjs/preact-netlify
- https://github.com/preactjs/preact-cli/blob/master/README.md
- https://headlesscms.org/projects/netlify-cms
- https://www.staticgen.com/
- https://github.com/developit/preact-markup

### TODO

- Add sitemaps - https://github.com/netlify-labs/netlify-plugin-sitemap#readme
- Remove .md extension from urls
- Add meta description
- Generate image posts for image attribution
- Auto fix lint errors on save
- Auto restart dev server on error

