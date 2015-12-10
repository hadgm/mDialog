var path = require('path');

var loaders = [
  {
    test: /\.css$/,
    loader: 'style!css',
  },
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015']
    }
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=[path][name].[ext]&context=./src',
  }, {
    test: /\.tpl.html$/,
    loader: 'raw',
  }, {
    test: /(index|admin).html$/,
    loader: 'file?name=[name].[ext]',
  }, {
    test: /\.scss$/,
    loader: 'style!css?sourceMap!sass?sourceMap',
  },
];

module.exports = {
  name: 'app',
  target: 'web',
  entry: {
    main: './src/dialog.module.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    chunkFilename: '[name].chunk.js',
    library: 'mDialog',
  },
  externals: {
    'angular': 'angular',
  },
  module: {
    loaders: loaders,
  },
}