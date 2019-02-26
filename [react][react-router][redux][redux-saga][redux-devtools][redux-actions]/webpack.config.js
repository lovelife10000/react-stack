const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const package = require('./package.json')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge');
const dev = process.argv.indexOf("development") !== -1;


const common_config = {
    mode: dev ? 'development' : 'production',
    entry: ['babel-polyfill', "./src/client/client.js"],
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.css', '.png'],
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname),
                exclude: /node_modules/,
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, '..'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            ignoreOrder: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            getLocalIdent: (context, localIdentName, localName, options) => localName,
                        },
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 2 versions',
                                        'Firefox ESR',
                                        'ie >= 9',
                                    ],
                                }),
                            ],
                        },
                    },
                        {
                            loader: 'less-loader',
                        }],

                }),
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[hash:8].[name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 65,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                    {
                                        removeEmptyAttrs: false,
                                    },
                                ],
                            },
                            gifsicle: {
                                optimizationLevel: 7,
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                                interlaced: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[hash:8].[name].[ext]',
                    },
                }],
            },
        ],

    },
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEVCLIENT__: true,
            __DEVSERVER__: false,
            __DEVTOOLS__: false,
            __DEVLOGGER__: true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin({
            filename: '[hash:8].style.css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({

            title: '',
            template: path.join(__dirname, './src/assets/index.html'), // 模板文件
            inject: 'body',
            initialData: 'window.__INITIAL_STATE__ = <%- __state__ %>',
            hash: false, // 为静态资源生成hash值
            minify: { // 压缩HTML文件
                removeComments: false, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
            },
        }),
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],

        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {

            "src": path.resolve(__dirname, "src"),

        },
    }};

const dev_config = {
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: false,
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: 'dist'
    }
};

const pro_config = {
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].[chunkhash:5].js',
    },
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: "all",
            name: true,
            cacheGroups: {
                default: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: "vendor",
                    maxInitialRequests: 5,
                },
            }
        }
    },
    plugins: [],
};

module.exports = () => {
    if (dev) {
        return merge(common_config, dev_config);
    }
    else {
        return merge(common_config, pro_config);
    }
};

