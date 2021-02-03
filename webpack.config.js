const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: 'src/registration.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'posts/index.html',
            template: 'src/posts/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};