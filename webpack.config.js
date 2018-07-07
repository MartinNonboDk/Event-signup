const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'components'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: [
        path.join(__dirname, 'components')
    ],
    output: {
        path: PATHS.build,
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-class-properties']
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
  };