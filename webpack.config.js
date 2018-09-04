const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:  './src/index.js',
    mode:   'development',
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'babel-loader',
                options: {
                    presets: [
                        'env',
                        'react',
                        'stage-2',
                    ],
                },
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
        port:        3000,
        publicPath:  'http://localhost:3000/dist/',
        // hotOnly:     true,
        // hot:         true,
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ],

};
