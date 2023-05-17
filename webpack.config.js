// API KEY IMPORT FROM .ENV FOR ES6
const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./asset/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  devServer: {
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./asset/img/favicon.ico",
      filename: "index.html", // in alcuna documentazione e' filename
      title: "test",
      template: "asset/html/index.html",
    }),
    new Dotenv(),
  ],
  mode: "none",
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: ["style-loader", "css-loader", "sass-loader"], // prima installare con npm sia css che sass
        //npm install --save-dev style-loader css-loader
        //npm install --save-dev sass sass-loader
        // prima carica scss-order poi css-loader poi style-loader
        exclude: /node-modules/,
      },

      {
        test: /\.(ico)$/,
        use: "file-loader?name=assets/[name].[ext]",
      },
    ],
  },
};
module.exports = config;
