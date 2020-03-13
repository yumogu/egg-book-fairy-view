'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Catalog = app.bookModel.define('catalog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    name: STRING,
    num: INTEGER,
    type: INTEGER,
    createTime: DATE,
    updateTime: DATE,
    isReptileTool: INTEGER,
    isJin: INTEGER,
    reptileAddress: STRING,
  });

  return Catalog;
};