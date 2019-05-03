import Router from 'koa-router';
let router = new Router({ prefix: '/city' });
import provincesandcity from '../dbs/models/provincesandcity';
import city from '../dbs/models/city';
import recentCity from '../dbs/models/recentcity';
// 随便取了前几个
router.get('/hotCity', async ctx => {
  let result = await city.find();
  if (!result) {
    ctx.body = {
      code: -1,
      message: '没有相关数据'
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result.slice(0, 10)
  };
});
router.get('/recent', async ctx => {
  let { username, city } = ctx.query;
  let result = await recentCity.findOne({ username });
  if (!result) {
    recentCity.create({
      username,
      recentCitise: [city]
    });
    ctx.body = {
      code: 0,
      data: [city]
    };
    return;
  }
  let recentCitise = [...result.recentCitise];
  if (recentCitise.indexOf(city) === -1) {
    if (recentCitise.length >= 15) {
      recentCitise.shift();
    }
    recentCitise.push(city);
    await recentCity.updateOne({ username }, { recentCitise });
  }
  ctx.body = {
    code: 0,
    data: recentCitise
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
