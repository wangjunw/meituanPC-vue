import Router from 'koa-router';
let router = new Router({ prefix: '/city' });
import provincesandcity from '../dbs/models/provincesandcity';
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
  let keyword = ctx.query.keyword;
  var reg = new RegExp(keyword, 'gi');
  let result = await city.find({ name: reg });
  if (!result) {
    ctx.body = {
      code: -1,
      data: [],
      message: '数据查询失败'
    };
    return;
  }
  ctx.body = { code: 0, data: result };
});
router.get('/citys', async ctx => {
  let result = await provincesandcity.find();
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
