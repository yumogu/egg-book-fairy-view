'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isLogin = app.middleware.isLogin({}, app);
  router.get('/', controller.home.index);
  router.post('/api/user', controller.user.getUserInfo);
  router.post('/api/typeList', controller.type.typeList);
  router.post('/api/booksList', controller.book.booksList);
  router.post('/api/catalogListById', controller.catalog.catalogList);
  router.post('/api/catalogcontent', controller.catalogcontent.catalogList);
  router.post('/api/bookshelf/add', isLogin, controller.bookshelf.index);
  router.post('/api/bookshelf/list', isLogin, controller.bookshelf.list);
  // router.post('/api/catalog/catalogDetailById', controller.catalog.catalogDetailById);
  
};
