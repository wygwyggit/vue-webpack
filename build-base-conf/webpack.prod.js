const {distPath} = require('./path')
const webpack = require('webpack')

const {
    merge
} = require('webpack-merge')
// css分割
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:8].js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
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
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: 'css'
                    }
                },
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css'
        }),
        new BundleAnalyzerPlugin({

        })
    ],
    optimization: {
        minimizer:[
            // 压缩js文件
            new TerserPlugin(),
            // 压缩css文件
            new CssMinimizerPlugin()
        ]
    }
}
module.exports = merge(prodConfig, commonConfig)