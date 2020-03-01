'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Type = app.model.define('book_type', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type_code: STRING(30),
    type_str: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return Type;
};