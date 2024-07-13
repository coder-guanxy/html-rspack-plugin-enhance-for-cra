## Installation

```bash
# npm
npm install html-rspack-plugin-enhance-for-cra
# yarn
yarn add html-rspack-plugin-enhance-for-cra
# pnpm
pnpm add html-rspack-plugin-enhance-for-cra
```

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RepackHtmlPluginEnhanceForCRA-%TITLE_SUFFIX%</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```js
const {
  HtmlRspackPluginEnhanceForCRA,
} = require('html-rspack-plugin-enhance-for-cra');
const { HtmlRspackPlugin } = require('@rspack/core');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlRspackPluginEnhanceForCRA(
      HtmlRspackPlugin, // HtmlRspackPlugin | HtmlWebpackPlugin
      {
        // normal html-rspack-plugin | html-webpack-plugin options
        templateParameters: {
          P: 'p', // <%= P %>
        },
      },
      {
        // <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        // <link rel="icon" href="./favicon.ico" />
        PUBLIC_URL: '.',
        TITLE_SUFFIX: 'title_suffix',
      },
    ),
  ],
};
```

## Options
