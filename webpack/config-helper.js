const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {
  const config = {
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
      })
    ],
    devtool: options.production ? 'source-map' : 'cheap-eval-source-map',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2017'],
              plugins: ['transform-object-rest-spread']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  };

  if (!options.production) {
    config.devServer = {
      contentBase: './dist',
      inline: true
    };
  }

  return config;
};
