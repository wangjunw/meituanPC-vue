import Router from 'koa-router';
import Menu from '../dbs/models/menu';
import Recommendplace from '../dbs/models/recommendplace';
import Topsearch from '../dbs/models/topsearch';
let router = new Router({ prefix: '/home' });
/**
 * 菜单接口
 */
router.get('/getMenu', async ctx => {
  let data = await Menu.find();
  if (data.length) {
    ctx.body = {
      code: 0,
      data: data[0].menu
    };
  } else {
    ctx.body = {
      code: -1,
      data: [],
      msg: '暂无数据'
    };
  }
});

/**
 * 搜索热门推荐接口
 * 参数：城市
 * return 该城市热门景点
 */
router.get('/recommendPlace', async ctx => {
  let city = ctx.query.city;
  let result = await Recommendplace.findOne({ name: city });
  if (result) {
    ctx.body = {
      code: 0,
      data: result.place
    };
  } else {
    ctx.body = {
      code: -1,
      msg: '查询失败'
    };
  }
});

/**
 * 搜索接口
 * 关键字、城市
 */
router.get('/search', async ctx => {
  let { city, keyword } = ctx.query;
  // 目前只造了几个北京的数据，city就先不用了
  if (keyword === '') {
    ctx.body = {
      data: [],
      code: 0
    };
    return false;
  }
  let reg = new RegExp(keyword, 'i');
  let result = await Topsearch.find({ value: reg });
  if (result.length) {
    // 对数据做一下过滤
    let data = result.map(item => {
      return { id: item.id, name: item.value };
    });
    ctx.body = {
      code: 0,
      data
    };
  } else {
    ctx.body = {
      code: 0,
      data: []
    };
  }
});
export default router;
