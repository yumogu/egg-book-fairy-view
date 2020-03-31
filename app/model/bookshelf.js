'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Bookshelf = app.model.define('bookshelf', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    bookId: INTEGER,
    catalogId: INTEGER,
    catalogName: STRING,
    bookName: STRING,
    author: STRING,
    description: STRING,
    imgUrl: STRING,
    bookType: INTEGER,
    updataTime: DATE,
    bookStatus: INTEGER,
    currentPage: INTEGER
  });

  return Bookshelf;
};