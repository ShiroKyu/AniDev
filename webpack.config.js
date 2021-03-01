const path = require('path'); // CommonJS

module.exports = {
    mode: 'development',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
    },
    target: 'node',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    },
                },
            },
        ],
    },
    externals: {
        express: 'express',
    },
    devtool: 'source-map',
};
