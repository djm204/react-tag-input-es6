var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: "./redoneInES6/TagsInput.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "reactTags.js"

    }
};
