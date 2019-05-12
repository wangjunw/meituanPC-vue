import Router from 'koa-router';
const router = new Router({ prefix: '/detail' });
import Nearby from '../dbs/models/nearby';
import Comment from '../dbs/models/comment';
import RecommendDish from '../dbs/models/recommenddish';
/**
 * 获取附近商家数据
 */
router.get('/nearby', async ctx => {
  const data = await Nearby.find();
  if (!data) {
    ctx.body = {
      code: -1,
      message: '获取附近商家失败'
    };
  }
  ctx.body = {
    code: 0,
    data
  };
});
/**
 * 获取评论
 */
router.get('/comment', async ctx => {
  const result = await Comment.find();
  if (!result) {
    return {
      code: -1,
      message: '获取评论失败'
    };
  }
  ctx.body = {
    code: 0,
    data: result[0]
  };
});

/**
 * 获取推荐菜
 */
router.get('/recommend', async ctx => {
  const result = await RecommendDish.find();
  if (!result) {
    return {
      code: -1,
      message: '获取推荐数据失败'
    };
  }
  ctx.body = {
    code: 0,
    data: result[0]
  };
});
export default router;
