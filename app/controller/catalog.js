'use strict';

const Controller = require('egg').Controller;

class CatalogController extends Controller {
  async catalogList() {
    const { ctx, service } = this;
    let where = {}
    const bookId = ctx.request.body.bookId || 1;
    if (ctx.request.body.bookId) {
      where.bookId = ctx.request.body.bookId || 1;
    }
    if (ctx.request.body.id) {
      where.id = ctx.request.body.id || 1;
    }
    // // 调用 model 查询数据
    const res = await ctx.bookModel.Catalog.findAll({
      where
    })
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
  // // 根据章节id和书籍id查询章节详细信息
  // async catalogDetailById () {
  //   const { ctx, service } = this;
  //   const bookId = ctx.request.body.bookId || 1;
  //   const id = ctx.request.body.id || 1;
  //   // // 调用 model 查询数据
  //   const res = await ctx.bookModel.Catalog.findAll({
  //     where: {
  //       bookId,
  //       id
  //     }
  //   })
  //   // 设置响应内容和响应状态码
  //   ctx.body = {resultCode: 1, data: res};
  //   ctx.status = 200;
  // }
}

module.exports = CatalogController;
