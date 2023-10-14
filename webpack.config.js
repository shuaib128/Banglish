const path = require("path");

module.exports = {
  entry: {
    contentScript: "./contentScript.js",
    background: './background.js',
    main: "./main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  mode: "development",
};
