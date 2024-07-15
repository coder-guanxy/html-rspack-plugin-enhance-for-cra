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
    <title>will be replace</title>
  </head>
  <body>
    <div>%CRA_INTERPOLATE%</div>
    <div><%= PUBLIC_KEY %></div>
    <div id="root"></div>
  </body>
</html>
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
        title: 'HtmlRspackPluginEnhanceForCRATitle',
        template: './public/index.html',
        templateParameters: {
          PUBLIC_KEY: 'public-key',
        },
        // A new property has been added
        CRAHtmlInterpolate: {
          PUBLIC_URL: '.',
          CRA_INTERPOLATE: 'create-react-app-html-interpolate',
        },
      },
    ),
  ],
};
```

## Options
