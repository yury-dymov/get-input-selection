var path    = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'get-input-selection.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test:   /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
