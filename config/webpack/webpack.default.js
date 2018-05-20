const path = require('path');
const config = require('../');
const srcPathJoin = require('../helpers').srcPathJoin;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

const webpackDefaults = {
    resolve: {
        extensions: [
            '.js',
            '.scss',
            '.css',
        ],
        modules: [
            'node_modules',
            srcPathJoin(''),
        ],
        alias: {
            'babel-runtime': path.dirname(
                require.resolve('babel-runtime/package.json')
            ),
        },
    },
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        context: srcPathJoin('assets'),
                        name: nameAsset,
                    },
                }],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        context: srcPathJoin('assets'),
                        name: nameAsset,
                    },
                }],
            },
        ],
    },
    plugins: [
        new webpack.NamedChunksPlugin(),
        new ReactLoadablePlugin({
            filename: './public/react-loadable.json',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module){
                return isExternal(module)
            },
        }),
        new HtmlWebpackPlugin({
            title: config.APP_NAME,
            filename: 'index.html',
            favicon: srcPathJoin('assets/favicon.ico'),
            template: srcPathJoin('index.ejs'),
            chunksSortMode: 'dependency',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                collapseInlineTagWhitespace: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.ENV),
            'process.env.API_DOMAIN': JSON.stringify(config.API_DOMAIN),
            'PUBLIC_URL': '',
        }),
    ],
};

module.exports = webpackDefaults;

function isExternal(module) {

    const {
        context,
    } = module;

    if (typeof context !== 'string') {
        return false;
    }

    const isNodeModule = context.indexOf('node_modules') > -1;
    const isLoader = context.indexOf('-loader') > -1;

    return isNodeModule && !isLoader;
}

function nameAsset(filePath){
    const filePaths = filePath.split('/');
    const file = filePaths[filePaths.length - 1];

    let publicDir = filePath.split('assets/')[1].split('/')[0] || '';

    publicDir = file === publicDir ? '' : `${publicDir}/`;

    return `${publicDir}[name].[ext]`
}