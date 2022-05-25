const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname,'./dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {   
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {   
                test: /\.txt/,
                type: 'asset/source',
            },
            {   
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader' 
                ]
            },
            {   
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {   
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // will sjow by default. don't need to add this 
                // path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title : 'Hello World sample here',
            template: 'src/index.hbs',
            description: 'Random Description text goes here'
        })
    ]
}