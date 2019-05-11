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
  const result = await List.find();
  if (!result) {
    ctx.body = {
      code: -1,
      message: '暂无数据'
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result
  };
});
export default router;
