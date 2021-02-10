const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },

  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
    port: 9090,
    historyApiFallback: true,
  },

  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
