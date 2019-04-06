import Router from 'koa-router';
import Menu from '../dbs/models/menu';
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
export default router;
