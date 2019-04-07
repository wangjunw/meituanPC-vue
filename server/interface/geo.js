import Router from 'koa-router';
let router = new Router({ prefix: '/geo' });
import Province from '../dbs/models/provinces';
import axios from 'axios';
/**
 * 根据ip获取地理位置的接口
 */
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

/**
 * 获取省份接口
 */
router.get('/province', async ctx => {
  let province = await Province.find();
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value
      };
    })
  };
});

export default router;
