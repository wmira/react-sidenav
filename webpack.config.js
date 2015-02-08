var webpack = require('webpack');


var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
];

if (process.env.COMPRESS) {

    plugins.push(

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {

    output: {
        library: 'SideNav',
        libraryTarget: 'umd2'
    },

    externals: {
        react: {
            root: 'React',
            commonjs: 'react/addons',
            commonjs2: 'react/addons',
            amd: 'react/addons'
        }
    },

    node: {
        buffer: false
    },

    plugins: plugins,

    module: {
        loaders: [
            { loader: 'jsx-loader?harmony' }
        ]
    }

};
