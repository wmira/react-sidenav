var webpack = require('webpack');

var plugins = [
];


const exportsObj = {
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-sidenav': __dirname + '/src'
        }
    },
    output: {
        library: 'SideNav',
        libraryTarget: 'umd2'
    },
    plugins: plugins,

    module: {
        loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devServer: {
        port: 8081,
        inline: true        
    }

};

module.exports = exportsObj;
