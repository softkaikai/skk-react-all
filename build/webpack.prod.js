const path = require('path');


module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        useBuiltIns: 'entry',
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
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
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}