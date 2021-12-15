/* eslint-disable indent */
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: isDev ? '[local]' : '[hash:base64:5]',
              },
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
      favicon: './public/favicon.svg',
      title: 'React CI-CD',
      inject: 'body',
    }),

    new CleanWebpackPlugin(),

    new BundleAnalyzerPlugin(),
  ].concat(
    /* eslint-disable comma-dangle */
    isDev
      ? []
      : new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    /* eslint-enable comma-dangle */
  ),

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },

  devtool: isDev && 'eval-source-map',

  devServer: {
    port: 3000,
  },
};
