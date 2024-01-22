const path = require("path");
const fs = require("fs");
const { webpack_4_0, webpack4, webpack5, plugins } = require("./index");
const LogRuntimeHooksOrderPlugin = require("log-runtime-hooks-order-webpack-plugin");

const { CleanWebpackPlugin } = plugins;

const TARGET_CASE = "02-one-entry-common-chunk";

const cwd = path.join(process.cwd(), TARGET_CASE);

function getPath(webpackVersion, dist) {
  return path.join(cwd, webpackVersion, dist);
}

function getWebpack40Config() {
  const config = commonWebpackConfig();

  config.output.path = getPath("v4-0", config.output.path);
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack4Config() {
  const config = commonWebpackConfig();

  config.output.path = getPath("v4", config.output.path);
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack5Config() {
  const config = commonWebpackConfig();

  config.output.path = getPath("v5", config.output.path);
  config.output.clean = true;

  return config;
}

function commonWebpackConfig() {
  const defaultConfig = path.join(cwd, "webpack.config.js");

  if (fs.existsSync(defaultConfig)) {
    return require(defaultConfig);
  }

  const config = {
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
      //new LogRuntimeHooksOrderPlugin()
    ],
  };

  return config;
}

[
  { value: webpack_4_0, version: "v4.0", config: getWebpack40Config() },
  // { value: webpack4, version: "v4", config: getWebpack4Config() },
  // { value: webpack5, version: "v5", config: getWebpack5Config() },
].forEach(({ version, value: webpack, config }) => {
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if (stats && stats.toJson) {
      let json = stats.toJson({ 
        chunks: true,
        // chunkModules: true,
        all: false
      });
      let text = JSON.stringify(json, null, 2);
      let file = path.join(config.output.path, "stats.json");

      if(fs.existsSync(file)) {
        fs.rmSync(file)
      }

      fs.appendFileSync(file, text, "utf8");
    }
    console.log("callback called 111");
  });
});
