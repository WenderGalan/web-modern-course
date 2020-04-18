const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // Modo do webpack
  mode: modoDev ? 'development' : 'production',
  // Entrada para o webpack
  entry: './src/principal.js',
  devServer: {
    contentBase: './public',
    port: 9000
  },
  output: {
    // Configura o nome do arquivo
    filename: 'principal.js',
    // Configura a pasta
    path: __dirname + '/public'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css'
    })
  ],
  optimization: {
    minimizer: [
      // Vai minimificar os JS
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      // Otimiza o CSS
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    // Configura os loaders
    rules: [
      // Extensão .css
      {
        test: /\.s?[ac]ss$/,
        use: [
          // Extrai o arquivo de css para fora
          MiniCssExtractPlugin.loader,
          // Adiciona CSS a DOM injetando a tag <style>
          // 'style-loader',
          // Interpreta @import, url() e etc...
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}