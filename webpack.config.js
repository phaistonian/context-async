module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index-dist.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader?cacheDirectory',
    }],
  }
};
