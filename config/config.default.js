/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582823065609_3268';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: false
  };
  // config.mysql = {
  //   client: {
  //     host: '',
  //     port: '',
  //     user: '',
  //     password: '',
  //     database: ''
  //   },
  //   app: true,
  //   agent: false
  // }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
