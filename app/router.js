'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/user', controller.user.getUserInfo);
  router.post('/api/typeList', controller.type.typeList);
  router.get('/api/booksList', controller.book.booksList);
  router.get('/api/catalogListById', controller.catalog.catalogList);
  router.get('/api/catalogcontent', controller.catalogcontent.catalogList);
};
