const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    // this webpack.config is just for development
    mode: 'development',
    entry: {
        app:'./src/index.js',
        print: './src/print.js'
    },
    // srouce map can help track down errors in browser, not in terminal
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
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
        })
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
    }
};