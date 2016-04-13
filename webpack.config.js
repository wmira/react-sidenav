var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new ExtractTextPlugin('../dist/react-sidenav-styles.css')
];

var cssLoader = { test: /\.css$/, loader: 'style-loader!css-loader?localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader'};




if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
    cssLoader = { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')};
}


const exportsObj = {
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-sidenav': __dirname + '/src'
        }
    },
    node: {
        buffer: false
    },
    output: {
        library: 'SideNav',
        libraryTarget: 'umd2'
    },

    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        }

    },
    plugins: plugins,

    module: {
        loaders: [
            cssLoader,
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
};

module.exports = exportsObj;
