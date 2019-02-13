const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    // this webpack.config is just for development
    // So that the bundle is not minified
    // production mode including optimization and tree shaking
    mode: 'development',
    entry: {
        app:'./src/index.js'
    },
    // srouce map can help track down errors in browser, not in terminal
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        // clean dist folder, remove all unused files
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin({
            fileName: '../manifest.json'
        }),
        // generate a new html file, attach all bundler.js in that index.html
        new HtmlWebpackPlugin({
            title: 'Ouput Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    optimization: {
        usedExports: true
    }
}