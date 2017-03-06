const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
// const WebpackChunkHash = require("webpack-chunk-hash");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    return {
        entry: {
            app: path.resolve(__dirname, 'src'),
            vendor: ['react', 'react-dom', 'react-router', 'moment', 'lodash']
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js'
        },

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    include: path.resolve(__dirname, 'src'),
                    use: 'babel-loader'
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.tpl.html'),
                inject: 'body',
                filename: 'index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                names: [
                    'vendor', 'manifest'
                ],
                minChunks: function(module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            // new webpack.HashedModuleIdsPlugin(),
            // new WebpackChunkHash(),
            // new ChunkManifestPlugin({filename: 'chunk-manifest.json', manifestVariable: 'webpackManifest'}),
            new ScriptExtHtmlWebpackPlugin({inline: 'manifest'}),
            new ExtractTextPlugin('styles.css'),
        ]
    }
}
