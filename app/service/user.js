'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async save(data) {
    // console.log(this.app.mysql)
    const ctx = this.ctx;
    // const { name, age } = data;
    let obj = {
      nick_name: '抠脚小仙女�',
      gender: 0,
      language: 'zh_CN',
      city: 'Wuhan',
      province: 'Hubei',
      country: 'China',
      avatar_url: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKfhRMq1xhX7sbfzxQ8QvAqiaHWazAiaMGyfnk0O0UYnt7oFSBK6dUKIBCJicX438O264Pk026D6wUZA/132'
    }
    let temp = { 
      nick_name: '抠脚小仙女�',
      gender: 0,
      language: 'zh_CN',
      city: 'Wuhan',
      province: 'Hubei',
      country: 'China',
      avatar_url: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKfhRMq1xhX7sbfzxQ8QvAqiaHWazAiaMGyfnk0O0UYnt7oFSBK6dUKIBCJicX438O264Pk026D6wUZA/132' }
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
