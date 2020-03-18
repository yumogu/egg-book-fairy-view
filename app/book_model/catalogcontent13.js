'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Catalogcontent13 = app.bookModel.define('catalogcontent13', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    content: STRING,
    num: INTEGER,
    catalogId: INTEGER,
  });
  return Catalogcontent13;
};