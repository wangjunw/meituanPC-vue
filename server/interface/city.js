import Router from 'koa-router';
let router = new Router({ prefix: '/city' });
import city from '../dbs/models/city';
router.get('/hotCity', async ctx => {
  ctx.body = {
    code: 0
  };
});
router.get('/recent', async ctx => {
  ctx.body = {
    code: 0
  };
});
router.get('/searchByKeyword', async ctx => {
  ctx.body = { code: 0 };
});
router.get('/citys', async ctx => {
  let result = await city.find();
  if (!result) {
    ctx.body = {
      code: -1,
      message: '数据查询失败'
    };
  }
  ctx.body = {
    code: 0,
    data: result
  };
});
export default router;
