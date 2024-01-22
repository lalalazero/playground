const cwd = __dirname

module.exports = {
  mode: "development",
  entry: {
    entry: "./src/entry.js",
    // home: "./src/home.js",
  },
  context: cwd,
  target: "web",
  devtool: false,
  output: {
    path: "dist",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          name: 'share',
          filename: 'share-chunk.js',
          test(module) {
            return /share/.test(module.request)
          }
        }
      }
    }
  },
//   stats: {
//     assets: false,
//     chunks: false,
//     modules: false,
//   },
};
