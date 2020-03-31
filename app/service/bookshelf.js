'use strict';

const Service = require('egg').Service;

class BookshelfService extends Service {

  async list(options) {
    const { ctx } = this
    let where = {}
    if (options.bookId) {
      where.bookId = options.bookId
    }
    where.userId = options.userId
    // console.log('select==========', select)
    const res = await ctx.model.Bookshelf.findAll({where});
    return res
  }
  async add(options) {
    const { ctx } = this
    const res = await ctx.model.Bookshelf.findOrCreate({
      where: {
        bookId: options.bookId,
        userId: options.userId
    }, 
      defaults: options
    }).spread((user, created) => {
      if(created === false) {
        user.update(options)
      }
    })
    return res
  }
}

module.exports = BookshelfService;
