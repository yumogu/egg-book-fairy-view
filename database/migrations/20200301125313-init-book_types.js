'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    // 在执行数据库升级时调用的函数，创建 users 表
    const { INTEGER, STRING , DATE} = Sequelize;
    await queryInterface.createTable('book_types', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      type_code: STRING(30),
      type_str: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('book_types');
  }
};
