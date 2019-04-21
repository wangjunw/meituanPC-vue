import Router from 'koa-router';
import Menu from '../dbs/models/menu';
import Recommendplace from '../dbs/models/recommendplace';
import Topsearch from '../dbs/models/topsearch';
import Minsu from '../dbs/models/minsu';
import Mtnav from '../dbs/models/mtnav';
import Guesslike from '../dbs/models/guesslike';
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

//推荐民宿
router.get('/minsu', async ctx => {
  let cityId = ctx.query.cityId;
  let result = await Minsu.find({ cityId });
  if (!result || !result[0].list) {
    ctx.body = {
      code: -1,
      msg: '没有相关数据'
    };
    return;
  }
  ctx.body = {
    code: 0,
    list: result[0].list
  };
});

// 猜你喜欢接口
router.get('/guesslike', async ctx => {
  let data = await Guesslike.find();
  if (!data) {
    ctx.body = {
      code: -1,
      data: []
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: data[0].data
  };
});

// 美团导航接口
router.get('/mtnav', async ctx => {
  let data = await Mtnav.find();
  if (!data) {
    ctx.body = {
      code: -1,
      data: []
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: data[0].data
  };
});
export default router;
