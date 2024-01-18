const path = require("path");
const fs = require("fs");
const { webpack_4_0, webpack4, webpack5, plugins } = require("../index");
const LogRuntimeHooksOrderPlugin = require("log-runtime-hooks-order-webpack-plugin");

const { CleanWebpackPlugin } = plugins;

const cwd = process.cwd();

function getPath(webpackVersion, dist) {
  return path.join(cwd, webpackVersion, dist);
}

function getWebpack40Config() {
  const config = getConfig();

  config.output.path = getPath("v4-0", config.output.path);
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack4Config() {
  const config = getConfig();

  config.output.path = getPath("v4", config.output.path);
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack5Config() {
  const config = getConfig();

  config.output.path = getPath("v5", config.output.path);
  config.output.clean = true;

  return config;
}

function getConfig() {
  const config = {
    mode: "development",
    entry: "./src/main.js",
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
      //new LogRuntimeHooksOrderPlugin()
    ],
  };

  return config;
}

[
  { value: webpack_4_0, version: "v4.0", config: getWebpack40Config() },
  { value: webpack4, version: "v4", config: getWebpack4Config() },
  { value: webpack5, version: "v5", config: getWebpack5Config() },
].forEach(({ version, value: webpack, config }) => {
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if (stats && stats.toJson) {
      let json = stats.toJson();
      let text = JSON.stringify(json, null, 2);
      let file = path.join(config.output.path, "stats.json");

      fs.appendFileSync(file, text, "utf8");
    }
    console.log("callback called 111");
  });
});
