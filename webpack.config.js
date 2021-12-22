const path = require('path');

module.exports = {
  // mode: 'development',
  // entry: './src/index.js',
  entry: './App.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    historyApiFallback:true
  },

  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'public'),
  //   },
  //   compress: false,
  //   port: 4000,
  // }

  // plugins: [
  //     new webpack.HotModuleReplacementPlugin()
  // ]
};