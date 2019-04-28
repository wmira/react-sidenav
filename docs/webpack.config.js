
const babelOptions = require('./babel.config')

module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
  },  
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: {
            loader: 'babel-loader',
            options: babelOptions,
        },
        exclude: /node_modules/
        
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: /node_modules/
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
      inline: true,
      port: 8081
  }
};