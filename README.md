# webpack整合

  通常情况下，实际开发中我们都需要**使用构建工具对代码进行打包**；
  TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS；
  步骤如下

## 初始化项目

  进入项目根目录，执行命令**npm init -y**，生成**package.json**配置文件

## 下载构建工具

* 命令如下：

```typeScript
npm i -D 【下载开发依赖】webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```
共安装了7个包:

  * webpack：构建工具webpack

  * webpack-cli：webpack的命令行工具

  * webpack-dev-server：webpack的开发服务器

  * typescript：ts编译器

  * ts-loader：ts加载器，用于在webpack中编译ts文件

  * html-webpack-plugin：webpack中html插件，用来自动创建html文件

  * clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录


## 配置webpack

根目录下创建webpack的配置文件**webpack.config.js**：

```typeScript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的所有的配置信息都应该写在module.exports中

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },

   entry: "./src/index.ts",//指定入口文件

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
               use: {
                   loader: "ts-loader"     
               },
              //要排除的文件
               exclude: /node_modules/
           }
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           title:'TS测试'
       }),
   ]
}
```

* html-webpack-plugin：webpack中html插件，用来自动创建html文件
  * 安装 「npm」html-webpack-plugin
  * 在webpack.config.json中引入  const xxx = require('html-webpack-plugin')
  * module.exports中配置webpack插件 


* webpack-dev-server：webpack的开发服务器
  * 实时更新
<img width="760" alt="image" src="https://user-images.githubusercontent.com/117837871/215415260-97b1e423-c284-4342-8f32-4ac77df5e175.png">

<img width="269" alt="image" src="https://user-images.githubusercontent.com/117837871/215415287-f5474538-4127-4797-976f-01a883c8b75a.png">

* clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录
  * 安装 「npm」clean-webpack-plugin
  * 在webpack.config.json中引入  const xxx = require('clean-webpack-plugin')
  * module.exports中配置webpack插件 
![image](https://user-images.githubusercontent.com/117837871/215415200-b431efa4-9718-4b43-838d-91d88841515a.png)


## 配置TS编译选项

  根目录下创建**tsconfig.json**，配置可以根据自己需要

```typeScript
{
   "compilerOptions": {
       "target": "ES2015",
       "module": "ES2015",
       "strict": true
       }
}
```
## 修改package.json配置

  修改package.json添加如下配置

```typeScript
{
   ..."scripts": {
       "test": "echo \"Error: no test specified\"&& exit 1",
**
       "build": "webpack",
       "start": "webpack serve --open chrome.exe"},
...}
```

## 项目使用

  在src下创建ts文件，并在并命令行执行**npm run build**对代码进行编译；

  或者执行**npm start**来启动开发服务器；


## Babel

  除了webpack，开发中还经常需要结合babel来对代码进行转换；

  以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；

*虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；*

*对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；*

  * 安装依赖包：

npm i -D @babel/core @babel/preset-env babel-loader core-js

  * 共安装了4个包，分别是：

    * @babel/core：babel的核心工具

    * @babel/preset-env：babel的预定义环境

    * @babel-loader：babel在webpack中的加载器

    * core-js：core-js用来使老版本的浏览器支持新版ES语法

  * 修改webpack.config.js配置文件
```typeScript
...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                            //指定环境的插件
                                "@babel/preset-env",
                              //配置信息
                                {
                                //要兼容的目标浏览器
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                  //指定corejs的版本
                                    "corejs":"3",
                                  //使用corejs的方式，usage表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...
```
如此一来，使用ts编译后的文件将会再次被babel处理；

使得代码可以在大部分浏览器中直接使用；

同时可以在配置选项的targets中指定要兼容的浏览器版本；
