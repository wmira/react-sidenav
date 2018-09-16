
const path = require('path');

module.exports = {
    entry: './src/playground/index.tsx',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "react-sidenav": path.resolve(__dirname,"src")
        }
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