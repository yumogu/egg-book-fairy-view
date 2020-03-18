'use strict';

const Service = require('egg').Service;

class BookshelfService extends Service {

  async list(options) {
    const { ctx } = this
    let select = {}
    if (options.bookId) {
      select.where = {
        bookId: options.bookId
      }
    }
    const res = await ctx.model.Bookshelf.findAll(select);
    return res
  }
  async add(options) {
    console.log('add==================options', options)
    const { ctx } = this
    const res = await ctx.model.Bookshelf.create(options);
    return res
  }
  async check(options) {
    console.log('=========================checkOptions', options)
    const { ctx } = this
    const res = await ctx.model.Bookshelf.findAll({
      where: {
        bookId: null
      }
    })
    console.log('========================check', res)
    return res
  }
}

module.exports = BookshelfService;