const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // VueLoaderPlugin 注意路径一定是vue-loader/lib/plugin

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { // 开发服务器配置
    port: 3000,
    progress: true, // 编译进度条
    contentBase: './dist', // 以dist目录为默认的启动目录
    compress: true, // 压缩
    open: true // 自动打开浏览器
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', // 将ES6转化成ES5语法
          options: {
            presets: [
              '@babel/preset-env' // @babel/preset-env 就是用来将ES6转换成ES5语法的
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', {'legacy': true}], // 将ES7语法中的类装饰器转换成ES5语法， legacy事宽松模式
              ['@babel/plugin-proposal-class-properties', {'loose': true}], // 将ES7语法中的lei类转换成ES5语法
              '@babel/plugin-transform-runtime' // 避免编译出现重复
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 从js中把样式单独抽离成一个css文件
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // 解析css中的动态语法
          'postcss-loader', // 为css添加前缀
          'less-loader' // less变为css
        ]
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader' // 解决html中引入图片打包
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 200 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 删除引号
        collapseWhitespace: true // 删除空格
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'), // 引入cssnano配置压缩选项
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      },
      canPrint: true // 是否将插件信息打印到控制台
    }),
    new VueLoaderPlugin()
  ],
  performance: {
    hints: false // 取消警告提示
  }
}