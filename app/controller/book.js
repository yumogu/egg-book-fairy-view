'use strict';

const Controller = require('egg').Controller;

class BooksController extends Controller {
  async booksList() {
    const { ctx, service } = this;
    // const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body);
    const offset = (req.page-1)*req.rows || 10;
    // // 调用 model 查询数据
    const res = await ctx.bookModel.Book.findAll({
      limit: req.rows || 10,
      offset
    })
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = BooksController;
