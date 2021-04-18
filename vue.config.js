// const myPlugin = require('./myPlugin')
module.exports = {
  publicPath: './',
  outputDir: './dist',
  configureWebpack: {
    // plugins: [new myPlugin()],
  },
  devServer: {
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
    proxy: {
      '/test': {
        target: 'http://ims.3xdata.cn',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/test': '', // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        },
      },
      '/static': {
        target: 'http://ims.3xdata.cn/static/',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/static': '', // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        },
      },
      '/imsNew': {
        target: 'http://ims.3xdata.cn/imsNew/',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/imsNew': '', // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        },
      },
      '/Test': {
        target: 'http://49.234.27.60/',
        // target: 'http://ims.3xdata.cn',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/Test': '', // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        },
      },
      '/js': {
        target: 'http://49.234.27.60/js/',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          '/js': '', // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        },
      },
    },
    // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
    // after: require("./mock/mock-server.js")
  },
}
