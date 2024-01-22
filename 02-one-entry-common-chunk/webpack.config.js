const { webpack_4_0: webpack } = require("../index")

const cwd = __dirname

module.exports = {
  mode: "development",
  entry: {
    entry: "./src/entry.js",
    home: "./src/home.js",
  },
  context: cwd,
  target: "web",
  devtool: false,
  output: {
    path: "dist",
  },
  stats: {
    assets: false,
    chunks: false,
    modules: false,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'share',
        filename: 'share-chunk.js',
        minChunks: function(module, count) {
            return module.resource && /share/.test(module.resource)
        }
    })
  ],
};
