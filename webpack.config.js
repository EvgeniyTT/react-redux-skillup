var path = require('path');
var webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle-[hash:4].js'
    },
    // devServer: {
    //     historyApiFallback: true,
    //     proxy: [{
    //         path: '/api/*',
    //         target: 'http://localhost:3001'
    //     }]
    // },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
      new CleanPlugin(['build']),
      new webpack.optimize.DedupePlugin(),
      new ExtractTextPlugin('styles-[hash:4].css'),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      })
      // ,
      // new webpack.DefinePlugin({
      //   API_HOST: JSON.stringify('http://jsui.nixdev.co:3040')
      // })
    ]

}
