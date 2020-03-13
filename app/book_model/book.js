'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Book = app.bookModel.define('book', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    author: STRING,
    description: STRING,
    originUrl: STRING,
    imgUrl: STRING,
    type: INTEGER,
    updateTime: DATE,
    bookStatus: INTEGER,
    bookType: STRING,
    reptileType: INTEGER,
    isJin: INTEGER,
    hot: INTEGER
  });

  return Book;
};