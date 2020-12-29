module.exports = {
  chainWebpack: config => {
    config.module
      .rule('file-replace')
      .pre()
      .test(/\.js$/)
      .use('file-replace-loader')
      .loader('file-replace-loader')
      .options({
        condition: 'always',
        replacement (resourcePath) {
          return resourcePath
        },
        async: false
      })
      .end()
  }
}