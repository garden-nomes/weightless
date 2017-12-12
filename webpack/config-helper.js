const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => ({
  entry: ['./src/index.js'],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(
          options.production ? 'production' : 'development'
        )
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: options.production && {
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    }),
    ...(options.production
      ? [
        webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        })
      ]
      : [])
  ],
  devtool: options.production ? 'source-map' : 'cheap-eval-source-map',
  devServer: !options.production && {
    contentBase: './dist',
    inline: true
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
