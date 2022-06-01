const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },

    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
         port: 8080,
         disableHostCheck: true//这是内网穿透需要的配置的
    },
    publicPath: '',
    //其他配置....
  }