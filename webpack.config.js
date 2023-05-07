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
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "asset/img/favicon.ico",
      filename: "index.html", // in alcuna documentazione e' filename
      title: "test",
      template: "asset/html/index.html",
    }),
  ],
  mode: "none",
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: ["style-loader", "css-loader", "sass-loader"], // prima intsallare con npm sia css che sass
        //npm install --save-dev style-loader css-loader
        //npm install --save-dev sass sass-loader
        // prima carica scss-order poi css-loader poi style-loader
        exclude: /node-modules/,
      },
      // test html-loader va qui se installato ma sembra non necessario forse fa le stesse cose
    ],
  },
};
module.exports = config;
