const config = require('./config');
const merge = require('webpack-merge');
const webpackDev = require('./config/webpack/webpack.dev');
const webpackProd = require('./config/webpack/webpack.prod');
const webpackDefault = require('./config/webpack/webpack.default');

const TARGET = process.env.npm_lifecycle_event.toUpperCase();

const {
  ENV,
  __DEV__,
  APP_NAME,
} = config;

process.noDeprecation = true;

console.log("——————————————————————————————");
console.log(`Running ${TARGET} on ${APP_NAME}`);
console.log("==============================");
console.log('environment :', ENV);
console.log("——————————————————————————————");

module.exports = (
  __DEV__
    ? merge(webpackDefault, webpackDev)
    : merge(webpackDefault, webpackProd)
);