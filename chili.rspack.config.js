const path = require('path');
const rspack = require("@rspack/core");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: './src/chili3d/packages/chili-web/src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public/chili3d'),
    filename: 'chili3d.bundle.js',
    publicPath: '/chili3d/'
  },
  experiments: {
    css: true,
  },
  module: {
    parser: {
      "css/auto": {
        namedExports: false,
      },
    },
    rules: [
      {
        test: /\.wasm$/,
        type: "asset",
      },
      {
        test: /\.cur$/,
        type: "asset",
      },
      {
        test: /\.jpg$/,
        type: "asset",
      },
      {
        test: /\.(j|t)s$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              decorators: true,
            },
            target: "esnext",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
    fallback: {
      fs: false,
      perf_hooks: false,
      os: false,
      crypto: false,
      stream: false,
      path: false,
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: "./src/chili3d/public",
          globOptions: {
            ignore: ["**/**/index.html"],
          },
        },
      ],
    }),
    new rspack.DefinePlugin({
      __APP_VERSION__: JSON.stringify("0.6.0"),
      __DOCUMENT_VERSION__: JSON.stringify("0.6"),
    }),
  ],
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        minimizerOptions: {
          mangle: {
            keep_classnames: true,
            keep_fnames: true,
          },
        },
      }),
      new rspack.LightningCssMinimizerRspackPlugin(),
    ],
  },
};