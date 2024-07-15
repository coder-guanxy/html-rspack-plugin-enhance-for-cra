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
    new HtmlRspackPluginEnhanceForCRA(HtmlRspackPlugin, {
      title: 'HtmlRspackPluginEnhanceForCRATitle',
      template: './public/index.html',
      // templateContent: `
      //   <!DOCTYPE html>
      //   <html>
      //     <head>
      //       <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      //       <title>%TITLE_SUFFIX%</title>
      //     </head>
      //     <body>
      //       <div>%CRA_INTERPOLATE%</div>
      //       <div id="root"></div>
      //     </body>
      //   </html>
      // `,
      templateParameters: {
        PUBLIC_KEY: 'public-key',
      },
      CRAHtmlInterpolate: {
        PUBLIC_URL: '.',
        CRA_INTERPOLATE: 'create-react-app-html-interpolate',
      },
    }),
  ],
};
