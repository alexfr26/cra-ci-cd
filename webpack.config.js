/* eslint-disable indent */
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',

  context: path.join(__dirname, 'src'),

  entry: { main: './index.js' },

  output: {
    filename: isDev ? '[name].js' : '[name].[fullhash].js',
    assetModuleFilename: 'assets/[name]_[hash][ext]',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    hashDigestLength: 4,
  },

  resolve: { extensions: ['.js', '.jsx'] },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.s?css$/,
        use: [
          'style-loader',

          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
            },
          },

          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      title: 'React CI-CD',
    }),

    new CleanWebpackPlugin(),
  ],

  devtool: isDev && 'eval-source-map',

  devServer: {
    port: 3333,
  },
};
