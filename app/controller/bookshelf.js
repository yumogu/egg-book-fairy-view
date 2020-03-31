'use strict';

const Controller = require('egg').Controller;

class BookshelfController extends Controller {
  async index() {
    const { ctx, service } = this
    let req = ctx.request.body
    let userid = ctx.request.header.userid
    let temp = {
      userId : userid,
      bookId : req.id,
      catalogId : req.catalogId,
      bookName : req.name,
      author : req.author,
      description : req.description,
      imgUrl : req.imgUrl,
      bookType : req.bookType,
      updataTime : req.updataTime,
      bookStatus : req.bookStatus,
      catalogName: req.catalogName,
      currentPage: req.currentPage
    }
    const res = await service.bookshelf.add(temp);
    console.log('++++++++++++++++++++++++++', res)
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
  async list () {
    const { ctx, service } = this
    let req = ctx.request.body
    let userId = ctx.request.header.userid
    req.userId = userId
    const res = await service.bookshelf.list(req);
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = BookshelfController;
