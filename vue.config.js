module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 80, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    // proxy: 'http://36.112.65.110:9090' // 配置跨域处理,只有一个代理
    proxy: {
      "/v1.0.3": {
        target: "http://36.112.65.110:9090",
        // target: "http://127.0.0.1:9090",
        ws: true,
        changeOrigin: true,
        pathRewriter: {
          "^/v1.0.3": ""
        }
      }
    } // 配置多个代理
  }
};
