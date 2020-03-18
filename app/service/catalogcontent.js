'use strict';

const Service = require('egg').Service;

class CatalogcontentService extends Service {
  async selectModel(options) {
    const { ctx } = this
    let res = []
    let flag = Math.floor(options.catalogId/200000);
    switch (flag) {
      case 0:
        res = await ctx.bookModel.Catalogcontent.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 1:
        res = await ctx.bookModel.Catalogcontent1.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 2:
        res = await ctx.bookModel.Catalogcontent2.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 3:
        res = await ctx.bookModel.Catalogcontent3.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 4:
        res = await ctx.bookModel.Catalogcontent4.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 5:
        res = await ctx.bookModel.Catalogcontent5.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 6:
        res = await ctx.bookModel.Catalogcontent6.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 7:
        res = await ctx.bookModel.Catalogcontent7.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 8:
        res = await ctx.bookModel.Catalogcontent8.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 9:
        res = await ctx.bookModel.Catalogcontent9.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 10:
        res = await ctx.bookModel.Catalogcontent10.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 11:
        res = await ctx.bookModel.Catalogcontent11.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 12:
        res = await ctx.bookModel.Catalogcontent12.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 13:
        res = await ctx.bookModel.Catalogcontent13.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 14:
        res = await ctx.bookModel.Catalogcontent14.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
      case 15:
        res = await ctx.bookModel.Catalogcontent15.findAll({
          where: {
            bookId: options.bookId,
            catalogId: options.catalogId
          }
        })
        break
    }
    return res
  }
}

module.exports = CatalogcontentService;
