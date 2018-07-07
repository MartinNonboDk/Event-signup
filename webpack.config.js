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
    devtool: 'source-map',//source map should be unavailable in production as it enlarges the footprint drastically but debugging is easier - perfect for development
    output: {
        path: PATHS.build,
        publicPath: "/dist/",
        filename:'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/')
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