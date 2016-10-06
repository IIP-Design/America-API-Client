process.env.NODE_ENV = 'development';

var path = require('path');
var autoprefixer = require('autoprefixer');


module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, "js/src", "index.js"),
  output: {
    path: path.join(__dirname, "js/src"),
    filename: 'packed.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};
