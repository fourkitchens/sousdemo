const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const resolver = {
  test: /\.m?js/,
  type: 'javascript/auto',
  resolve: {
    fullySpecified: false,
  },
};

const JSLoader = {
  test: /^(?!.*\.(stories|component)\.js$).*\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
};

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        url: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        postcssOptions: {
          plugins: [['autoprefixer']],
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          importer: globImporter(),
          outputStyle: 'compressed',
        },
      },
    },
  ],
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

module.exports = {
  resolver,
  JSLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
};
