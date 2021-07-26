const {
    distPath,
    srcPath,
    publicPath
} = require('./path')
const {join} = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        'main': './src/main.js',
    },
    externals: {
        'vue':'Vue'
    },
    module: {
        rules: [
            // 处理图片文件
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 5 * 1024,
                        outputPath: 'images/',
                        esModule:false
                    }
                }]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                }],
                exclude: /node_modules/
            },
            // 使用file-loader处理字体文件
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: 'file-loader'
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            title:'vue-webpack',
            template: join(publicPath,'index.html'),
            filename:'index.html',
            chunks:['main']
        }),
        new CleanWebpackPlugin(),
        
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 1,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    priority: -20,
                    minChunks: 2,
                    reuseExistingChunk: true
                }
            }
        }
    }
}