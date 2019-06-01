import Router from 'koa-router';
import Order from '../dbs/models/order';
import Cart from '../dbs/models/cart';
import crypto from 'crypto';
let router = new Router({ prefix: '/order' });

router.post('/createOrder', async ctx => {
  let { cartNo, price, count, total, pic, name } = ctx.request.body;
  let time = Date();
  let md5 = crypto.createHash('md5');
  let orderId = md5
    .update((Math.random() * 1000 + time).toString())
    .digest('hex');
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'not login'
    };
  } else {
    let findCart = await Cart.findOne({ cartNo });
    /**
     * status 0：未支付
     */
    let order = new Order({
      id: orderId,
      count,
      total,
      price,
      createTime: time,
      user: ctx.session.passport.user.username,
      name,
      pic,
      status: 1
    });
    let result = await order.save();
    if (!result) {
      ctx.body = {
        code: -1,
        msg: 'create failure'
      };
      return;
    }
    await findCart.remove();
    ctx.body = {
      code: 0,
      msg: 'create order success',
      orderId
    };
  }
});

router.get('/getOrders', async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'not login',
      data: []
    };
    return;
  }
  let result = await Order.find({
    user: ctx.session.passport.user.username
  });
  if (!result) {
    ctx.body = {
      code: 0,
      msg: 'find failure',
      data: []
    };
    return;
  }
  ctx.body = {
    code: 0,
    data: result
  };
});
export default router;
