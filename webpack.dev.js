
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { watchFile } = require('fs');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html/i,
        use: "html-loader",
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}