const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        vue: ['vue', 'vuex', 'vue-router']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, '../dist'),
        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, '../dist', 'manifest.json') // 生成任务清单
        })
    ]
}