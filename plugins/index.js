const { CleanWebpackPlugin } = require("clean-webpack-plugin");

class LogStatsPlugin {
  constructor({ all = false, chunks = true } = {}) {
    this.all = all;
    this.chunks = chunks;
  }
  logAllStats() {
    if (!this.all) {
      return;
    }
    const stats = this.stats;
    if (stats && stats.toJson) {
      let json = stats.toJson({
        chunks: true,
        chunkModules: true,
        all: false,
      });
      this.emitAsset("stats.json", json);
    }
  }
  logChunksStats() {
    if (!this.chunks) {
      return;
    }
    let json = this.stats.toJson("verbose");

    let chunkJson = json.chunks.map((chunk) => {
      const { id, names, files, chunks, parents, modules } = chunk;

      return {
        id,
        names,
        files,
        chunks,
        parents,
        modules: modules.map(({ id, name, type }) => ({ id, name, type })),
      };
    });
    this.emitAsset("chunks-stats.json", chunkJson);
  }
  emitAsset(filename, json) {
    let text = JSON.stringify(json, null, 2);
    const source = {
      source() {
        return text;
      },
      size() {
        return text.length;
      },
    };
    this.assets[filename] = source;
  }
  apply(compiler) {
    const callback = (stats, assets, callback) => {
      this.stats = stats;
      this.assets = assets;
      this.logAllStats();
      this.logChunksStats();

      callback();
    };
    if (compiler.plugin) {
      compiler.plugin("after-compile", (compilation, cb) => {
        const stats = compilation.getStats();
        const assets = compilation.assets;
        callback(stats, assets, cb);
      });
    } else {
      compiler.hooks.compilation.tap("LogStatsPlugin", (compilation) => {
        compilation.hooks.processAssets.tapAsync(
          "LogStatsPlugin",
          (assets, cb) => {
            const stats = compilation.getStats();
            callback(stats, assets, cb);
          }
        );
      });
    }
  }
}

module.exports = {
  CleanWebpackPlugin,
  LogStatsPlugin,
};
