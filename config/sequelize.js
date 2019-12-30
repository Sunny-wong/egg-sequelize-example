'use strict';
const path = require('path');
const fs = require('fs');
const extend = require('extend2');

function loadSequelizeCfg() {
  const defaultCfgPath = path.join(__dirname, 'config.default.js');
  const defaultCfg = _loadSequelizeCfg(defaultCfgPath);
  let serverEnv;

  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
  }

  if (process.env.NODE_ENV === 'test') {
    serverEnv = 'unittest';
  } else if (process.env.NODE_ENV === 'production') {
    serverEnv = 'prod';
  } else {
    serverEnv = 'local';
  }

  const targetCfgPath = path.join(__dirname, `config.${serverEnv}.js`);
  let targetCfg;
  if (fs.existsSync(targetCfgPath)) {
    targetCfg = _loadSequelizeCfg(targetCfgPath);
  }

  return {
    [process.env.NODE_ENV]: extend(true, {}, defaultCfg, targetCfg),
  };
}

function _loadSequelizeCfg(file) {
  let cfg = require(file);
  if (typeof cfg === 'function') {
    cfg = cfg({});
  }

  return cfg.sequelize;
}

module.exports = loadSequelizeCfg();
