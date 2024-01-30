const path = require("path");
const fs = require("fs");
const { webpack_4_0, webpack4, webpack5, plugins } = require("./index");
const LogRuntimeHooksOrderPlugin = require("log-runtime-hooks-order-webpack-plugin");

const { CleanWebpackPlugin, LogStatsPlugin } = plugins;

const TARGET_CASE = "step6";

const cwd = path.join(process.cwd(), TARGET_CASE);

const DEFAULT_WEBPACK_CONFIGS = {
  base: "webpack.config.js",
  v40: "webpack.v40.config.js",
  v4: "webpack.v4.config.js",
  v5: "webpack.v5.config.js",
};

const VBASE = "base";
const V40 = "v40";
const V4 = "v4";
const V5 = "v5";

function getPath(webpackVersion, dist) {
  return path.join(cwd, webpackVersion, dist);
}

function resolveWebpackConfig(webpackVersion) {
  const configFile = DEFAULT_WEBPACK_CONFIGS[webpackVersion];
  const defaultFile = DEFAULT_WEBPACK_CONFIGS[VBASE];

  let config;
  try {
    config = require(cwd + "/" + configFile);
  } catch (e) {
    try {
      config = require(cwd + "/" + defaultFile);
    } catch (e) {
      config = commonWebpackConfig();
    }
  }

  if (!config) {
    throw new Error("should have config " + webpackVersion);
  }
  return JSON.parse(JSON.stringify(config));
}

function getWebpack40Config() {
  let config = resolveWebpackConfig(V40);

  config.output.path = getPath(V40, config.output.path);
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack4Config() {
  let config = resolveWebpackConfig(V4);

  config.output.path = getPath(V4, config.output.path);
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack5Config() {
  let config = resolveWebpackConfig(V5);

  config.output.path = getPath(V5, config.output.path);
  config.output.clean = true;

  return config;
}

function commonWebpackConfig() {
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
      new LogStatsPlugin(),
    ],
  };

  return config;
}

[
  { value: webpack_4_0, version: V40, config: getWebpack40Config() },
  { value: webpack4, version: V4, config: getWebpack4Config() },
  { value: webpack5, version: V5, config: getWebpack5Config() },
].forEach(({ version, value: webpack, config }) => {
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if (err) {
      console.log(err);
    }

    console.log("callback called 111");
  });
});
