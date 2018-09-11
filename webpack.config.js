const path = require('path');
const babelrc = require('./.babelrc');
// const webpack = require('webpack');

module.exports = {
    entry:  './src/index.jsx',
    mode:   'development',
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'babel-loader',
                options: babelrc,
            },
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
        ],
    },

    output: {
        path:       path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename:   'app.js',
    },

    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port:        3333,
        publicPath:  'http://localhost:3333/dist/',
        // hotOnly:     true,
        hot:         true,
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: 'inline-source-map',

};
