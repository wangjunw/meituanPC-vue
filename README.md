# meituanPC-vue

## 技术栈
- Nuxt.js框架做ssr
- 集成了axios、router、ElementUI
- 服务端用的 node，框架用的koa以及koa系列库
- 数据库mongodb，mongoose库操作mongodb
- 登录功能使用passport
- 邮件服务nodemailer

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

> 需要注意在启动项目之前，请先启动 mongodb 和 redis，最后会把mongodb数据放进来，但是数据基本都是自己手懂copy的，仅仅作用学习使用！
