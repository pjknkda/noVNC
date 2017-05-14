const webpack = require('webpack');

module.exports = {
    entry: './lib/rfb.js',
    output: {
        filename: 'novnc.js',
        library: 'novnc',
        libraryTarget: 'umd'
    },
}
