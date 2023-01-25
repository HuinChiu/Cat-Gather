const path=require("path");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    mode: "development",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]//css載入器規則
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
              },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'index.html',
            inject: true,
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
          }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        allowedHosts: ['all'],
        historyApiFallback: true,
      },
    optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
            compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
            }
        }
        })
    ]
    }
}