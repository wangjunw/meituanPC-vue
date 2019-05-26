const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import Redis from 'koa-redis';
import json from 'koa-json';
import dbConfig from './dbs/config';
import passport from './interface/utils/passport';
import users from './interface/users';
import geo from './interface/geo';
import home from './interface/home';
import movie from './interface/movie';
import city from './interface/city';
import list from './interface/list';
import detail from './interface/detail';
import cart from './interface/cart';
import order from './interface/order';
const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  app.keys = ['mt', 'keyskeys'];
  app.proxy = true;
  // session的配置
  app.use(
    session({
      key: 'mt',
      prefix: 'mt:uid',
      store: new Redis()
    })
  );
  // 配置body解析
  app.use(
    bodyParser({
      extendTypes: ['json', 'form', 'text']
    })
  );
  app.use(json());

  // 连接数据库
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  });

  // passport配置
  app.use(passport.initialize());
  app.use(passport.session());

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // 引人路由
  app.use(users.routes()).use(users.allowedMethods()); // 用户
  app.use(geo.routes()).use(geo.allowedMethods()); //位置
  app.use(home.routes()).use(home.allowedMethods()); //首页
  app.use(movie.routes()).use(movie.allowedMethods()); //猫眼电影
  app.use(city.routes()).use(city.allowedMethods()); // 切换城市
  app.use(list.routes()).use(list.allowedMethods()); //商品列表
  app.use(detail.routes()).use(detail.allowedMethods()); //详情
  app.use(cart.routes()).use(cart.allowedMethods()); //购物车
  app.use(order.routes()).use(order.allowedMethods()); //订单
  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
