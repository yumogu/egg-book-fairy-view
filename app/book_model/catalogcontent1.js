'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Catalogcontent1 = app.bookModel.define('catalogcontent1', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    content: STRING,
    num: INTEGER,
    catalogId: INTEGER,
  });
  return Catalogcontent1;
};