'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Catalogcontent6 = app.bookModel.define('catalogcontent6', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    content: STRING,
    num: INTEGER,
    catalogId: INTEGER,
  });
  return Catalogcontent6;
};