const { CleanWebpackPlugin } = require("clean-webpack-plugin");

class LogStatsPlugin {
  apply(compiler) {
    const callback = (stats, assets, callback) => {
      let json = stats.toJson();
      let chunkJson = json.chunks.map((chunk) => {
        const { id, names, files, chunks, parents, modules } = chunk;

        return {
          id,
          names,
          files,
          chunks,
          parents,
          modules: modules.map(({ id, name, type }) => ({id, name, type})),
        };
      });
      let text = JSON.stringify(chunkJson, null, 2);
      let filename = "chunks-stats.json";
      const source = {
        source() {
          return text;
        },
        size() {
          return text.length;
        },
      };
      assets[filename] = source;
      callback();
    };
    if (compiler.plugin) {
      compiler.plugin("after-compile", (compilation, cb) => {
        const stats = compilation.getStats();
        const assets = compilation.assets
        callback(stats, assets, cb);
      });
    } else {
      compiler.hooks.compilation.tap("LogStatsPlugin", (compilation) => {
        compilation.hooks.processAssets.tapAsync("LogStatsPlugin", (assets, cb) => {
          const stats = compilation.getStats();
          callback(stats, assets, cb);
        });
      });
    }
  }
}

module.exports = {
  CleanWebpackPlugin,
  LogStatsPlugin,
};
