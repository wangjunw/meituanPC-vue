import Router from 'koa-router';
let router = new Router({ prefix: '/geo' });
import axios from 'axios';
router.get('/getPosition', async ctx => {
  let ip = ctx.request.ip;
  let {
    status,
    data: { location }
  } = await axios.get(`http://ip.360.cn/IPShare/info`);
  let city = location.split('\t')[0];
  if (status === 200 && city !== '内网IP') {
    ctx.body = {
      city
    };
  } else {
    ctx.body = {
      city: '北京'
    };
  }
});

export default router;
