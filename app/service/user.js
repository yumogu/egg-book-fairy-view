'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async save(data) {
    // console.log(this.app.mysql)
    const ctx = this.ctx;
    // const { name, age } = data;
    const user = await ctx.model.User.create(data);
    console.log('user=======', user)
    return user
  }
}

module.exports = UserService;
