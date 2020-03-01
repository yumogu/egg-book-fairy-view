'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserInfo() {
    const { ctx, service } = this;
    // const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body);
    let userInfo = req.userInfo
    function toLine(name) {
      return name.replace(/([A-Z])/g,"_$1").toLowerCase();
    }
    let tempObj = {}
    for (let v in userInfo) {
      tempObj[""+v.replace(/([A-Z])/g,"_$1").toLowerCase()+""] = userInfo[v];
    }
    console.log(tempObj)
    // // 调用 Service 进行业务处理
    const res = await service.user.save(tempObj);
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1};
    ctx.status = 200;
  }
}

module.exports = UserController;
