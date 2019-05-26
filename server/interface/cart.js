/**
 * 与天猫淘宝不同，另外两个是只有一个购物车
 * 美团有多个购物车，每一次抢购都生成一个购物车
 */
import Cart from '../dbs/models/cart';
import Router from 'koa-router';
const router = new Router({ prefix: '/cart' });
import crypto from 'crypto';

// 创建购物车
router.post('/create', async ctx => {
  // 如果没有登录提示登录
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'not login'
    };
    return;
  }
  let createTime = new Date().getTime();
  let { id, detail } = ctx.request.body;
  let md5 = crypto.createHash('md5');
  let cartNo = md5
    .update(
      Math.random()
        .toString()
        .slice(3, 9) + createTime
    )
    .digest('hex');
  let cart = new Cart({
    id,
    cartNo,
    detail,
    createTime,
    user: ctx.session.passport.user
  });
  let result = await cart.save();
  if (!result) {
    ctx.body = {
      code: -1,
      msg: '创建失败'
    };
    return;
  }
  ctx.body = {
    code: 0,
    msg: 'success',
    cartNo
  };
});

// 获取购物车信息
router.get('/getCartInfo', async ctx => {
  let cartNo = ctx.query.cartNo;
  let result = await Cart.findOne({ cartNo });
  if (!result) {
    ctx.body = {
      code: -1,
      msg: 'no data'
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result.detail || {}
  };
});
export default router;
