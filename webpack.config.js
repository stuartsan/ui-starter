module.exports = {
  entry: {
    app: [ 'webpack/hot/dev-server', './src/index.js' ]
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!autoprefixer'
      }]
  }
};
