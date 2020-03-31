'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    nick_name: STRING(30),
    gender: INTEGER,
    language: STRING(30),
    city: STRING(30),
    province: STRING(30),
    country: STRING(30),
    avatar_url: STRING,
    created_at: DATE,
    updated_at: DATE
  });

  return User;
};