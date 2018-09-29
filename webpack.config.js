const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const path = require('path');
const styledComponentsTransformer = createStyledComponentsTransformer();
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
            { 
                test: /\.tsx?$/, loader: "ts-loader",  
                options: {                 
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
        
            }
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