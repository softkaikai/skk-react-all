const path = require('path');

const webpack = require('webpack');


module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'static')
    },
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 开启缓存，加快构建
                        cacheDirectory : true,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            // 减少包大小的
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: /(node_modules|global_css)/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(scss|css)$/,
                include: /(global_css)/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}