const { join } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: join(__dirname, 'app/renderer.tsx'),
    target: 'electron-renderer',
    output: {
        path: join(__dirname, 'app/build'),
        filename: 'renderer.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [{
            test:  /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader'
        }]
    }
};