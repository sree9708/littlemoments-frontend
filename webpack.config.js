// webpack.config.js
module.exports = {
  // other configurations...
  module: {
    rules: [
      {
        test: /react-icons\/LICENSE/,
        loader: "ignore-loader", // or use 'file-loader' to copy the file
      },
      // other rules...
    ],
  },
}
