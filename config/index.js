const fs = require('fs');
const path = require('path');

const APP_NAME = 'React Template 2018';
const PORT = '9001';

const {
    API_DOMAIN,
    NODE_ENV: ENV,
} = process.env;

const __STAGING__ = ENV === 'staging';
const __PRODUCTION__ = ENV === 'production';
const __DEV__ = !__STAGING__ && !__PRODUCTION__;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const PATH = {
    root: path.resolve('./'),
    src: path.resolve('./src'),
    public: path.resolve('./public'),
    pkgJson: path.resolve('./package.json'),
    appNodeModules: resolveApp('node_modules'),
    appIndex: resolveApp('./src/index.js'),
};

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

const config = {
    APP_NAME,
    ENV,
    PORT,
    PATH,
    API_DOMAIN,
    __DEV__,
    __PRODUCTION__,
};

module.exports = config;
