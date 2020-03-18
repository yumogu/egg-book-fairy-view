'use strict';

const Controller = require('egg').Controller;

class CatalogController extends Controller {
  async catalogList() {
    const { ctx, service } = this;
    const bookId = ctx.request.body.bookId || 1;
    // // 调用 model 查询数据
    const res = await ctx.bookModel.Catalog.findAll({
      where: {
        bookId
      }
    })
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = CatalogController;
