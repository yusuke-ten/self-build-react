const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.resolve(__dirname, "src/index.jsx"));

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
    contentBase: path.resolve(__dirname, "dist"),
    port: 9090,
    historyApiFallback: true, // これがないとルーティングできない
  },

  devtool: "source-map",

  plugins: [
    //以下追記
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
