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

  // 修改端口号
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '192.168.0.103',
    }
  };

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
    datasources: [
      {
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model',
        dialect: 'mysql',
        host: '127.0.0.1',
        username: 'root',
        password: '123',
        port: 3306,
        database: 'egg-sequelize-doc-default',
        define: {
          
          // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
          freezeTableName: true,
          timestamps: false,
        }
      },
      {
        delegate: 'bookModel', // load all models to app.model and ctx.model
        baseDir: 'book_model',
        dialect: 'mysql',
        database: 'novel_aiz5_com',
        host: '118.24.156.247',
        port: 3306,
        username: 'yxy',
        password: '123456',
        define: {
          // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
          freezeTableName: true,
          timestamps: false,
          underscored: false
        }
     },
    ],
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
