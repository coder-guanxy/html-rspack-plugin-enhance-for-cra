const { HtmlRspackPluginEnhanceForCRA } = require('../dist/index');
const { HtmlRspackPlugin } = require('@rspack/core');

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    port: 3000,
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new HtmlRspackPluginEnhanceForCRA(
      HtmlRspackPlugin,
      {
        title: 'HtmlRspackPluginEnhanceForCRATitle',
        template: './public/index.html',
        templateParameters: {
          P: '12312',
        },
      },
      {
        PUBLIC_URL: '.',
        TITLE_SUFFIX: 'title_suffix',
      },
    ),
  ],
};
