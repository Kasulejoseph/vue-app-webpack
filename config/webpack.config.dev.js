const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  // The application entry point
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the stylesinside the style tag of the document
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  plugins: [new VueLoaderPlugin()]
};
