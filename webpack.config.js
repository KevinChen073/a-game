/**
 * Created by Kevin on 16/8/16.
 */
const webpack = require('webpack');
const path = require('path');
const srcRoot = './assets';
const devPath = './dist';
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index: path.resolve(srcRoot, './js')
    },
    //入口文件输出配置
    output: {
        path: path.resolve(devPath, './js'),
        filename: '[name].bundle.js'
    },
    devServer: {
        "contentBase": devPath,
        "compress": true,
        hot: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'], include: path.resolve(srcRoot)},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: path.resolve(srcRoot)},
            { test: /\.(js|jsx)$/, use: [{loader:'babel-loader'}] ,include: path.resolve(srcRoot)},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(devPath, './index.html'),
            template: path.resolve(srcRoot, './index.html'),
        }),
    ]
};