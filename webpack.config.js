const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的所有的配置信息都应该写在module.exports中

module.exports = {
    optimization: {
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",//指定入口文件

    mode: 'development',

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        //打包后文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //指定规则生效的文件【正则表达式】
                test: /\.ts$/,
                //要使用的loader
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式，usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ],
                //要排除的文件
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                    {
                                        browsers: 'last 2 versions'
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'TS测试'
        }),
    ]
}