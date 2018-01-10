const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// // local css modules
// loaders.push({
//   test: /[\/\\]src[\/\\].*\.css/,
//   exclude: /(node_modules|bower_components|public)/,
//   loader: ExtractTextPlugin.extract(
//     'style',
//     'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
//   )
// });
//
// // local scss modules
// loaders.push({
//   test: /[\/\\]src[\/\\].*\.scss/,
//   exclude: /(node_modules|bower_components|public)/,
//   loader: ExtractTextPlugin.extract(
//     'style',
//     'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
//   )
// });
// // global css files
// loaders.push({
//   test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
//   loader: ExtractTextPlugin.extract('style', 'css')
// });
//
module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide``u``.  filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // }),
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    })
    // new HtmlWebpackPlugin({
    //   template: './src/template.html',
    //   title: 'Webpack App'
    // }),
  ]
};
