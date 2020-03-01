'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nick_name: STRING(30),
      gender: INTEGER,
      language: STRING(30),
      city: STRING(30),
      province: STRING(30),
      country: STRING(30),
      avatar_url: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
