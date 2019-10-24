const path = require('path');
const multi = require('multi-loader');

module.exports = {
    entry: './frontend/hipster_habitat.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: multi(
                    'babel-loader',
                    'style-loader',
                    'css-loader'
                ),
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};