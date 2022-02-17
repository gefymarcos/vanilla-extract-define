const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}