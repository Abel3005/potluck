var webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: [
        './app/app.jsx'
    ],
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
        ],
        alias: {
            applicationStyles: 'app/styles/app.css'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};