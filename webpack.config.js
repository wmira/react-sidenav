
const path = require('path');

module.exports = {
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-sidenav': path.resolve(__dirname, 'src')
        }
    },

    devServer: {
        inline: true
    }
};