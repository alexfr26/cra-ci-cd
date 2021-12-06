const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',

    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: isDev ? '[name].js' : '[name].[fullhash].js',
        hashDigestLength: 4,
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpe?g|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash:4].[ext]',
                },
            },
        ],
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),

        new CleanWebpackPlugin(),
    ],

    devServer: {
        port: 3333,
        hot: isDev,
    },

    stats: 'error-only',
};
