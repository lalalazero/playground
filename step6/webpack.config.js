module.exports = {
    mode: "development",
    entry: {
      entry: "./src/entry.js",
      home: "./src/home.js",
    },
    context: __dirname,
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
    ],
}