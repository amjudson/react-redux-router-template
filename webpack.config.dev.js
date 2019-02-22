var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const GLOBALS = {
  'process.env.API_HOST': JSON.stringify('http://localhost/MartialArts/api')
};

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js') // primary JS entry point
  ],
  target: 'web',
  output: {
    // save the bundle here
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: 3030
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output manager'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // transform all .js files
        exclude: /(node_modules)/, // except for node_modules
        loader: 'babel-loader', // apply the bable-loader to compile the files
        query: {
          presets: ['@babel/react', '@babel/env'] // load the react, es2015 babel settings
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
};
