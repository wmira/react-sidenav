
const path = require('path');

module.exports = {
    entry: './src/playground/index.tsx',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },    
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devtool: 'source-map',
    
    devServer: {
        inline: true        
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};