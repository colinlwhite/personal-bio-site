const path = require('path');
// optional enhancements for webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// require is generally used by things that are node.js based.
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev
});

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    extractScss
  ],
  module: {
    rules: [{
      enforce: 'pre', // Happens before all the other tasks
      test: /\.js$/, // Run eslint on all files with an extension of .js
      exclude: /node_modules/, // That are not in the node_modules folder
      use: 'eslint-loader' // It's using the eslint-loader package
    }, 
    // {
    //   test: /\.mp4$/,
    //   exclude: /node_modules/,
    //   use: 'file-loader'
    // },
    {
      test: /\.(png|jp(e*)g|svg|mov|mp4)$/,  
      use: [{
          loader: 'file-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              // name: 'images/[hash]-[name].[ext]'
          } 
      }]
    },
    {
      test: /\.js$/, // converts all files that w/.js from ES6 to ES5 so old browsers like IE can run our code.
      exclude: /node_modules/, // That are not in the node_modules folder.
      use: 'babel-loader'
    }, {
      test: /(\.css|\.scss)$/, // grabbing all files that end in this
      exclude: /node_modules/, // except in this folder
      use: extractScss.extract({ // extract scss plugin for css-loader package
        use:[
          {loader: 'css-loader'}, // copying the new CSS files to the build folder
          {loader: 'sass-loader'} // converting .scss to css
        ],
        fallback: 'style-loader'
      })
    }]
  },
  devServer: {
    historyApiFallback: true,
    open: isDev ? true : false
  }
};
