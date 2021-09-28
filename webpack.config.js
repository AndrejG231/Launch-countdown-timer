const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(".", "public", "script", "app.ts"),
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
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  mode: "development",
  devtool: "source-map",
};
