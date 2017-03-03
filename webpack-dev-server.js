const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

// always dev enviroment when running webpack dev server
const env = { dev: process.env.NODE_ENV };

const devServerConfig = {
  contentBase: path.join(__dirname, '../../src/'),
  historyApiFallback: { disableDotRule: true },
  stats: {
      colors: true
  }
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);
server.listen(3000, 'localhost');
