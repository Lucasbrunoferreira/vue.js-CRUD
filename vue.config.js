const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  devServer: {
    watchOptions: {
      poll: true
    }
  },

  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      })
    ]
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "public/css/reset.scss"; @import "public/css/fonts"; @import "public/css/global-variables.scss";'
      }
    }
  },

  pwa: {
    name: 'Book Store',
    themeColor: '#42b983',
    msTileColor: '#2c3e50'
  }
}
