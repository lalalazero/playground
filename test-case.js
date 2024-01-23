const path = require("path");
const fs = require("fs");
const { webpack_4_0, webpack4, webpack5, plugins } = require("./index");
const LogRuntimeHooksOrderPlugin = require("log-runtime-hooks-order-webpack-plugin");

const { CleanWebpackPlugin, LogStatsPlugin } = plugins;

const TARGET_CASE = "step6";

const cwd = path.join(process.cwd(), TARGET_CASE);

const DEFAULT_WEBPACK_CONFIGS = [
  "webpack.config.js",
  "webpack.v40.config.js",
  "webpack.v4.config.js",
  "webpack.v5.config.js",
];

function getPath(webpackVersion, dist) {
  return path.join(cwd, webpackVersion, dist);
}

function getWebpack40Config() {
  let config = null;

  try {
    config = require(cwd + "/webpack.config.js");
  } catch (e) {
    try {
      config = require(cwd + "/webpack.v40.config.js");
    } catch (e) {
      config = commonWebpackConfig();
    }
  }

  if (!config) {
    console.log("no valid webpack v4.0 config");
    return;
  }

  config.output.path = getPath("v4-0", config.output.path);
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack4Config() {
  let config = null;

  try {
    config = require(cwd + "/webpack.config.js");
  } catch (e) {
    try {
      config = require(cwd + "/webpack.v4.config.js");
    } catch (e) {
      config = commonWebpackConfig();
    }
  }

  if (!config) {
    console.log("no valid webpack v4 config");
    return;
  }

  config.output.path = getPath("v4", config.output.path);
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new CleanWebpackPlugin());

  return config;
}

function getWebpack5Config() {
  let config = null;

  try {
    config = require(cwd + "/webpack.config.js");
  } catch (e) {
    try {
      config = require(cwd + "/webpack.v5.config.js");
    } catch (e) {
      config = commonWebpackConfig();
    }
  }

  if (!config) {
    console.log("no valid webpack v5 config");
    return;
  }
  config.output.path = getPath("v5", config.output.path);
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
  { value: webpack_4_0, version: "v4.0", config: getWebpack40Config() },
  { value: webpack4, version: "v4", config: getWebpack4Config() },
  { value: webpack5, version: "v5", config: getWebpack5Config() },
].forEach(({ version, value: webpack, config }) => {
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if(err) {
      console.log(err)
    }
    
    console.log("callback called 111");
  });
});
