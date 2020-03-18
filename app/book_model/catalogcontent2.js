'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const catalogcontent2 = app.bookModel.define('catalogcontent2', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    content: STRING,
    num: INTEGER,
    catalogId: INTEGER,
  });
  return catalogcontent2;
};