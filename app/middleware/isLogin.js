module.exports = (options, app) => {
  return async function isAdmin(ctx, next) {
    // 获取头部token信息   如果不存在，表示没有登录，跳转到首页
    let userId = ctx.request.header.userid
    console.log('ctx.request.header********', ctx.request.header)
    if (userId) {
      await next();
    } else {
      ctx.body = {resultCode: 0, errorCode: 'login-error'};
      ctx.status = 200; 
    };
    
  };
};