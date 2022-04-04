const path = require("path");
module.exports = { presets: "@babel/preset-env" };
module.exports = {
  mode: "development",
  entry: "./src/playground/Redux-Expensify.js",

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    // In previous it is Require used search  path

    historyApiFallback: true,
  },
};
