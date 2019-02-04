const path = require('path');

module.exports = {
  entry: {
    server: './src/server',
    client: './src/client',
  },
  output: {
    filename: '[name].react.js',
    path: path.resolve(__dirname, "../MusicFestival.Vue.Template/Scripts/dist"),
    publicPath: "/Scripts/dist",
    sourcePrefix: ""
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '_components': path.resolve(__dirname, 'src/components'),
      '_types': path.resolve(__dirname, 'src/types'),
      '_types-custom': path.resolve(__dirname, 'src/types-custom'),
      '_state': path.resolve(__dirname, 'src/state'),
      '_utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ]
  }
};