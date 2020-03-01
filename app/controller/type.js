'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
  async typeList() {
    const { ctx, service} = this
    // const req = Object.assign(ctx.request.body);
    // let userInfo = req.userInfo
    // function toLine(name) {
    //   return name.replace(/([A-Z])/g,"_$1").toLowerCase();
    // }
    // let tempObj = {}
    // for (let v in userInfo) {
    //   tempObj[""+v.replace(/([A-Z])/g,"_$1").toLowerCase()+""] = userInfo[v];
    // }
    console.log('ctx.model', ctx.model)
    // // // 调用 Service 进行业务处理
    const res = await ctx.model.Type.findAll();
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = TypeController;
