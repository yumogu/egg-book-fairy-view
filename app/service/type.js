'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async save(data) {
    // console.log(this.app.mysql)
    const ctx = this.ctx;
    // const { name, age } = data;
    const user = await ctx.model.User.create(data);
    // ctx.status = 201;
    // ctx.body = user;
    // const result = await this.app.mysql.insert('users', data);
    // const user = await this.ctx.mysql.query('INSERT INTO users (name, age) VALUES (?, ?)', data.name,data.age);
    // const insertSuccess = result.affectedRows === 1;
    console.log('user', user)
    return user
  }
}

module.exports = UserService;