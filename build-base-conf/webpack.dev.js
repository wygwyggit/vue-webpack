
const webpack = require('webpack')
const {distPath,publicPath} = require('./path')
const {
    merge
} = require('webpack-merge')
const {join,resolve} = require('path')
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: distPath
    },
    devtool:'cheap-module-eval-source-map',
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@':resolve(__dirname,'../src')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: publicPath,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
    ],
    optimization: {
        usedExports: true
    }
}
module.exports = merge(commonConfig, devConfig)