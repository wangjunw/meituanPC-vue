import Movie from '../dbs/models/movie';
import Router from 'koa-router';
let router = new Router({
  prefix: '/catMovie'
});
/**
 * 正在热映接口
 */
router.get('/getHotFilms', async ctx => {
  let currentDate = new Date().getTime();
  let movies = await Movie.find({ pubDate: { $lte: currentDate } });
  if (movies.length !== 0) {
    ctx.body = {
      code: 0,
      data: movies
    };
  } else {
    ctx.body = {
      code: 0,
      data: [],
      msg: '暂无资源'
    };
  }
});
/**
 * 即将上映接口
 */
router.get('/getComingFilms', async ctx => {
  let currentDate = new Date().getTime();
  let movies = await Movie.find({ pubDate: { $gte: currentDate } });
  if (movies.length !== 0) {
    ctx.body = {
      code: 0,
      data: movies
    };
  } else {
    ctx.body = {
      code: 0,
      data: [],
      msg: '暂无资源'
    };
  }
});

export default router;
