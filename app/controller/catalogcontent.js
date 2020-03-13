'use strict';

const Controller = require('egg').Controller;

class CatalogcontentController extends Controller {
  async catalogList() {
    const { ctx, service } = this;
    // const author = ctx.session.userId;
    // const req = Object.assign(ctx.request.body);
    // console.log('tag页', req)
    // const offset = (req.page-1)*req.rows || 10;
    // // 调用 model 查询数据
    const res = await ctx.bookModel.Catalogcontent.findAll({
      where: {
        bookId: 1,
        num: 0,
        catalogId: 6
      }
    })
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = CatalogcontentController;
