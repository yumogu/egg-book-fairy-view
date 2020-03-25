'use strict';

const Controller = require('egg').Controller;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class BooksController extends Controller {
  async booksList() {
    const { ctx, service } = this;
    // const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body);
    const offset = (req.page-1)*req.rows || 10;
    console.log('=======================================', '都市言情', req.type, offset
    )
    let where = {}
    if (req.type && req.type.length > 0) {
      where.bookType = req.type
    }
    if (req.name) {
      where.name =  {
        [Op.like]: `%${req.name}%`
      }
    }
    console.log('******************************', where)
    // // 调用 model 查询数据
    const res = await ctx.bookModel.Book.findAndCountAll({
      where,
      limit: req.rows || 10,
      offset,
      
    })

    
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = BooksController;
