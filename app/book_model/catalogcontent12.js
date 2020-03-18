'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Catalogcontent12 = app.bookModel.define('catalogcontent12', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bookId: INTEGER,
    content: STRING,
    num: INTEGER,
    catalogId: INTEGER,
  });
  return Catalogcontent12;
};