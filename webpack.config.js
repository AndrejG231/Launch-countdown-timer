const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(".", "src", "app.ts"),
  resolve: {
    extensions: [".js", ".ts"],
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, "public", "images"), to: "images" },
      ],
    }),
  ],
  mode: "production",
  devtool: "source-map",
};
