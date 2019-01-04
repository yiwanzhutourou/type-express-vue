var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const localConfig = {
  devServer: {
    proxy: 'http://localhost:9000',
    inline: false, // https://webpack.js.org/configuration/dev-server/#devserver-inline
    port: 8000,
  },
  productionSourceMap: false,
}

const productionConfig = {
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        }),
      ],
    },
  },
}

const map = {
  'local': localConfig,
  'dev': productionConfig,
  'production': productionConfig,
}

const config = map[process.env.NODE_ENV]

if (!config) {
  console.log('wrong env')
  process.exit(1)
}

module.exports = config
