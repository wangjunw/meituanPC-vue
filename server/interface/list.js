/**
 * 列表页相关接口
 */
import Category from '../dbs/models/category.js';
import List from '../dbs/models/list';
import Router from 'koa-router';
const router = new Router({ prefix: '/list' });
router.get('/category', async ctx => {
  const city = ctx.query.city.replace('市', '');
  const result = await Category.find({ city });
  if (!result) {
    ctx.body = {
      code: -1,
      message: '暂无数据'
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result[0] || {}
  };
});

router.get('/listData', async ctx => {
  const { keyword, pageSize, pageNo } = ctx.query;
  // 没有条件，无法根据keyword查数据
  const count = await List.count();
  /**
   * limit：查询几个，不用parseInt会报错：'limit' field must be numeric
   * skip：跳过几个，配合limit做分页
   */
  const result = await List.find()
    .limit(parseInt(pageSize))
    .skip(pageNo * pageSize);
  if (!result) {
    ctx.body = {
      code: -1,
      message: '暂无数据'
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result,
    total: count
  };
});
export default router;
