'use strict';

const Controller = require('egg').Controller;

class CatalogcontentController extends Controller {
  async catalogList() {
    const { ctx, service } = this;
    const req = Object.assign(ctx.request.body);
    const res = await service.catalogcontent.selectModel(req);
    
    
    // 设置响应内容和响应状态码
    ctx.body = {resultCode: 1, data: res};
    ctx.status = 200;
  }
}

module.exports = CatalogcontentController;
